import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const sourceUrl = "https://karneval.berlin/fest/";
const outputPath = resolve(projectRoot, "src/data/events.ts");

const genreRules = [
  ["Salsa", /\bsalsa\b/i],
  ["Cuban", /\bcuban|kuban|rumba|timba|son\b/i],
  ["Forro", /\bforr[oó]\b/i],
  ["Brazilian", /\bbrazil|brasil|samba|bossa|baile funk|coco de roda\b/i],
  ["Afro", /\bafro|africa|afrikan|amapiano|high-?life|afrobeats?|gqom\b/i],
  ["Caribbean", /\b(caribbean|karib\w*|soca|calypso|dancehall|ska|zouk|kompa)\b/i],
  ["Latin", /\blatin|latinx|latein|latino|cumbia|tango|reggaeton|andes|andine|kolumb|peru\b/i],
  ["Electro", /\belectro|electronic|elektron|techno|house|garage|grime|club|dj\b/i],
  ["Reggae", /\breggae|dancehall|dub|rocksteady|jamaica|soca\b/i],
  ["Hip-Hop", /\bhip-?hop|rap|trap|r&b|rnb\b/i],
  ["Jazz", /\bjazz|fusion|blues|swing\b/i],
  ["Pop", /\bpop|indie|songwriter|rock\b/i],
  ["Performance", /\bperformance|tanz|dance|zirkus|comedy|walkact|theater|poesie|lesung|yoga|meditation|führung|segen|gebet\b/i],
  ["Workshop", /\bworkshop|kurs|open class|mitmach|training\b/i],
];

const dayOrder = new Map([
  ["Freitag", 1],
  ["Samstag", 2],
  ["Sonntag", 3],
  ["Montag", 4],
]);

function normalizeText(value = "") {
  return value.replace(/\s+/g, " ").trim();
}

function cleanHtmlText($, element) {
  return normalizeText($(element).text().replace(/\u00a0/g, " "));
}

async function loadHtml() {
  const localArg = process.argv.find((arg) => arg.startsWith("--source="));
  if (localArg) {
    return readFileSync(resolve(process.cwd(), localArg.slice("--source=".length)), "utf8");
  }

  const tmpFallback = "/private/tmp/kdk-fest.html";
  if (existsSync(tmpFallback)) {
    return readFileSync(tmpFallback, "utf8");
  }

  const response = await fetch(sourceUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${sourceUrl}: ${response.status}`);
  }
  return response.text();
}

function extractStages($) {
  const stages = [];
  $(".kdk-tabs__sub-picker-list").each((_, list) => {
    $(list)
      .find(".kdk-tabs__sub-picker-option")
      .each((__, button) => {
        stages.push(cleanHtmlText($, button));
      });
  });
  return stages;
}

function inferTypes(...parts) {
  const haystack = parts.filter(Boolean).join(" ");
  const types = genreRules
    .filter(([, regex]) => regex.test(haystack))
    .map(([type]) => type);
  return types.length > 0 ? types : ["Other"];
}

function splitArtist(name, style) {
  const cleanedStyle = normalizeText(style);
  if (!cleanedStyle || /^(auftritt|bis \d{2}:\d{2})$/i.test(cleanedStyle)) {
    return name;
  }
  if (/^(dj|performance|intro stage)\b/i.test(name)) {
    return name;
  }
  return name;
}

function parseDay(dayText) {
  const match = dayText.match(/(\p{L}+),\s*(\d{2}\.\d{2})\./u);
  if (!match) {
    return null;
  }
  return {
    day: match[1],
    date: match[2].replace(".", "/"),
    order: dayOrder.get(match[1]) ?? 99,
  };
}

function parseEndTime(style) {
  const match = style.match(/\bbis\s+(\d{2}:\d{2})\b/i);
  return match?.[1] ?? undefined;
}

function buildEvents($, stages) {
  const events = [];
  const contents = $(".kdk-tabs__sub-content--lineup").toArray();
  const lineupStages = stages.length > contents.length ? stages.slice(stages.length - contents.length) : stages;

  contents.forEach((content, stageIndex) => {
    const stage = lineupStages[stageIndex] ?? `Stage ${stageIndex + 1}`;

    $(content)
      .find(".kdk-tabs__lineup-day-group")
      .each((_, group) => {
        const dayInfo = parseDay(cleanHtmlText($, $(group).find(".kdk-tabs__lineup-day").first()));
        if (!dayInfo) return;

        $(group)
          .find(".kdk-tabs__lineup-item")
          .each((__, item) => {
            const name = cleanHtmlText($, $(item).find(".kdk-lineup__name").first());
            const time = cleanHtmlText($, $(item).find(".kdk-tabs__lineup-time").first());
            if (!name || !time) return;

            const style = cleanHtmlText($, $(item).find(".kdk-lineup__style").first());
            const description = cleanHtmlText($, $(item).find(".kdk-lineup__desc").first());
            const artist = splitArtist(name, style);
            const endTime = parseEndTime(style);

            events.push({
              id: `${dayInfo.date}-${time}-${stage}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              day: dayInfo.day,
              dayOrder: dayInfo.order,
              date: dayInfo.date,
              time,
              ...(endTime ? { endTime } : {}),
              name,
              artist,
              stage,
              types: inferTypes(name, style, description, stage),
              ...(style ? { sourceText: style } : {}),
              ...(description ? { description } : {}),
            });
          });
      });
  });

  return events.sort((a, b) => {
    if (a.dayOrder !== b.dayOrder) return a.dayOrder - b.dayOrder;
    if (a.time !== b.time) return a.time.localeCompare(b.time);
    return a.stage.localeCompare(b.stage) || a.name.localeCompare(b.name);
  });
}

const html = await loadHtml();
const $ = cheerio.load(html);
const stages = extractStages($);
const events = buildEvents($, stages);

const source = `export type EventType = {
  id: string;
  day: string;
  dayOrder: number;
  date: string;
  time: string;
  endTime?: string;
  name: string;
  artist: string;
  stage: string;
  types: string[];
  sourceText?: string;
  description?: string;
};

export const events: EventType[] = ${JSON.stringify(events, null, 2)};
`;

writeFileSync(outputPath, source);
console.log(`Generated ${events.length} events across ${stages.length} stages.`);
