const savedEventsStorageKey = "kdk-event-finder.saved-events";

export function readSavedEventIds() {
  try {
    const stored = window.localStorage.getItem(savedEventsStorageKey);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === "string") : [];
  } catch {
    return [];
  }
}

export function writeSavedEventIds(eventIds: string[]) {
  window.localStorage.setItem(savedEventsStorageKey, JSON.stringify(eventIds));
}
