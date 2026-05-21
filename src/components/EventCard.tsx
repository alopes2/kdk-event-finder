import { Heart } from "lucide-react";
import type { EventType } from "../data/events";

type EventCardProps = {
  event: EventType;
  saved: boolean;
  onToggleSaved: (eventId: string) => void;
};

export function EventCard({ event, saved, onToggleSaved }: EventCardProps) {
  return (
    <article className="event-card">
      <button
        className={saved ? "save-button save-button--active" : "save-button"}
        type="button"
        onClick={() => onToggleSaved(event.id)}
        aria-label={saved ? `Remove ${event.name} from saved events` : `Save ${event.name}`}
        aria-pressed={saved}
      >
        <Heart size={18} fill="currentColor" aria-hidden="true" />
      </button>
      <div className="event-card__topline">
        <span className="stage-chip">{event.stage}</span>
        {event.endTime ? <span>{event.time}-{event.endTime}</span> : <span>{event.time}</span>}
      </div>
      <h3>{event.name}</h3>
      <p>{event.artist}</p>
      <div className="type-list" aria-label={`Types for ${event.name}`}>
        {event.types.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </div>
    </article>
  );
}
