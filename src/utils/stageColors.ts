const stageColors: Record<string, { accent: string; surface: string; text: string; border: string }> = {
  "Heilig-Kreuz-Kirche": {
    accent: "#d43d2f",
    surface: "#ffe8df",
    text: "#7a2018",
    border: "rgba(212, 61, 47, 0.3)",
  },
  IMPACT: {
    accent: "#006d77",
    surface: "#dff7f6",
    text: "#064d54",
    border: "rgba(0, 109, 119, 0.3)",
  },
  "Klang Plaza": {
    accent: "#7a4cc2",
    surface: "#efe7ff",
    text: "#4d2f82",
    border: "rgba(122, 76, 194, 0.3)",
  },
  "Neue Pumpe": {
    accent: "#d88600",
    surface: "#fff0cf",
    text: "#7a4a00",
    border: "rgba(216, 134, 0, 0.34)",
  },
  "Rasen in Aktion": {
    accent: "#5f8f00",
    surface: "#ecf8cf",
    text: "#3f6100",
    border: "rgba(95, 143, 0, 0.32)",
  },
  "Sound Avenue": {
    accent: "#1769c2",
    surface: "#e3f0ff",
    text: "#174d86",
    border: "rgba(23, 105, 194, 0.3)",
  },
  shantYtown: {
    accent: "#c43b78",
    surface: "#ffe3ef",
    text: "#782349",
    border: "rgba(196, 59, 120, 0.3)",
  },
};

export function getStageStyle(stage: string) {
  const colors = stageColors[stage] ?? stageColors["Neue Pumpe"];

  return {
    "--stage-accent": colors.accent,
    "--stage-surface": colors.surface,
    "--stage-text": colors.text,
    "--stage-border": colors.border,
  } as React.CSSProperties;
}
