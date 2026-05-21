export type FilterState = {
  days: string[];
  types: string[];
  stages: string[];
  query: string;
  startTime: string;
  endTime: string;
  savedOnly: boolean;
};

export type DayOption = {
  day: string;
  date: string;
  order: number;
};

export type EventGroups = Record<string, Record<string, import("./data/events").EventType[]>>;
