import { useMemo } from "react";
import { events, type EventType } from "../data/events";
import type { EventGroups, FilterState } from "../types";
import { getEventLocationLabel } from "./location";

export const defaultFilters: FilterState = {
  days: [],
  types: [],
  stages: [],
  query: "",
  startTime: "12:00",
  endTime: "23:30",
  savedOnly: false,
};

export const timeOptions = Array.from({ length: 28 }, (_, index) => {
  const hour = 10 + Math.floor(index / 2);
  const minute = index % 2 === 0 ? "00" : "30";
  return `${String(hour).padStart(2, "0")}:${minute}`;
});

export function timeToIndex(time: string) {
  return Math.max(0, timeOptions.indexOf(time));
}

export function uniqueSorted(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function countGroupedEvents(eventGroups: EventGroups) {
  return Object.values(eventGroups).reduce(
    (total, timeGroups) => total + Object.values(timeGroups).reduce((sum, group) => sum + group.length, 0),
    0,
  );
}

export function useEventGroups(filters: FilterState, savedEventIds: Set<string>) {
  return useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    const filtered = events.filter((event) => {
      const matchesDay = filters.days.length === 0 || filters.days.includes(event.day);
      const matchesStage = filters.stages.length === 0 || filters.stages.includes(getEventLocationLabel(event));
      const matchesType = filters.types.length === 0 || filters.types.some((type) => event.types.includes(type));
      const matchesTime = event.time >= filters.startTime && event.time <= filters.endTime;
      const matchesSaved = !filters.savedOnly || savedEventIds.has(event.id);
      const matchesQuery =
        !query ||
        event.name.toLowerCase().includes(query) ||
        event.artist.toLowerCase().includes(query) ||
        event.stage.toLowerCase().includes(query);

      return matchesDay && matchesStage && matchesType && matchesTime && matchesSaved && matchesQuery;
    });

    return filtered.reduce<EventGroups>((dayGroups, event: EventType) => {
      const dayKey = `${event.day}, ${event.date}`;
      dayGroups[dayKey] ??= {};
      dayGroups[dayKey][event.time] ??= [];
      dayGroups[dayKey][event.time].push(event);
      return dayGroups;
    }, {});
  }, [filters, savedEventIds]);
}
