import { Heart } from "lucide-react";
import type { EventType } from "../data/events";
import { getStageStyle } from "../utils/stageColors";

type EventCardProps = {
  event: EventType;
  saved: boolean;
  onToggleSaved: (eventId: string) => void;
};

export function EventCard({ event, saved, onToggleSaved }: EventCardProps) {
  return (
    <article className="event-card" style={getStageStyle(event.stage)}>
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
        <span className="stage-chip-group" aria-label={event.subStage ? `${event.stage} greater than ${event.subStage}` : event.stage}>
          <span className="stage-chip">{event.stage}</span>
          {event.subStage ? (
            <>
              <span className="stage-separator" aria-hidden="true">
                &gt;
              </span>
              <span className="stage-chip stage-chip--sub">{event.subStage}</span>
            </>
          ) : null}
        </span>
        {event.endTime ? <span>{event.time}-{event.endTime}</span> : <span>{event.time}</span>}
      </div>
      <h3>{event.name}</h3>
      {event.sourceText ? <p className="event-card__subtext">{event.sourceText}</p> : null}
      {event.description ? <p className="event-card__description">{event.description}</p> : null}
      <div className="type-list" aria-label={`Types for ${event.name}`}>
        {event.types.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </div>
    </article>
  );
}
