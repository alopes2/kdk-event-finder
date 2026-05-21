import type { EventType } from "../data/events";

export function getEventLocationLabel(event: Pick<EventType, "stage" | "subStage">) {
  return event.subStage ? `${event.stage} / ${event.subStage}` : event.stage;
}
