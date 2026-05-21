import { Sparkles } from "lucide-react";
import type { EventGroups } from "../types";
import { EventCard } from "./EventCard";

type EventResultsProps = {
  eventGroups: EventGroups;
  visibleCount: number;
  savedEventIds: Set<string>;
  onToggleSaved: (eventId: string) => void;
};

export function EventResults({ eventGroups, visibleCount, savedEventIds, onToggleSaved }: EventResultsProps) {
  return (
    <section className="results" aria-label="Events">
      <div className="results__content">
        {visibleCount === 0 ? (
          <div className="empty-state">
            <Sparkles size={32} aria-hidden="true" />
            <h2>No events match these filters.</h2>
            <p>Try widening the time range or choosing fewer stages.</p>
          </div>
        ) : (
          Object.entries(eventGroups).map(([day, timeGroups]) => (
            <section className="day-group" key={day}>
              <h2>{day}</h2>
              {Object.entries(timeGroups).map(([time, group]) => (
                <div className="time-group" key={`${day}-${time}`}>
                  <div className="time-stamp">{time}</div>
                  <div className="event-grid">
                    {group.map((event) => (
                      <EventCard key={event.id} event={event} saved={savedEventIds.has(event.id)} onToggleSaved={onToggleSaved} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))
        )}
      </div>
    </section>
  );
}
