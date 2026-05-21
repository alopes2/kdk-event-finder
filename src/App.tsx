import { useEffect, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { events } from "./data/events";
import { EventResults } from "./components/EventResults";
import { FiltersPanel } from "./components/FiltersPanel";
import { countGroupedEvents, defaultFilters, uniqueSorted, useEventGroups } from "./utils/filters";
import { getEventLocationLabel } from "./utils/location";
import { readSavedEventIds, writeSavedEventIds } from "./utils/savedEvents";
import type { FilterState } from "./types";

export function App() {
  const [filters, setFilters] = useState(defaultFilters);
  const [savedEventIds, setSavedEventIds] = useState<string[]>(readSavedEventIds);
  const savedEventIdSet = useMemo(() => new Set(savedEventIds), [savedEventIds]);
  const eventGroups = useEventGroups(filters, savedEventIdSet);
  const days = useMemo(
    () =>
      [...new Map(events.map((event) => [event.day, { day: event.day, date: event.date, order: event.dayOrder }])).values()].sort(
        (a, b) => a.order - b.order,
      ),
    [],
  );
  const types = useMemo(() => uniqueSorted(events.flatMap((event) => event.types)), []);
  const stages = useMemo(() => uniqueSorted(events.map((event) => getEventLocationLabel(event))), []);
  const visibleCount = countGroupedEvents(eventGroups);

  useEffect(() => {
    writeSavedEventIds(savedEventIds);
  }, [savedEventIds]);

  const updateFilters = (patch: Partial<FilterState>) => setFilters((current) => ({ ...current, ...patch }));
  const toggleSavedEvent = (eventId: string) => {
    setSavedEventIds((current) => (current.includes(eventId) ? current.filter((id) => id !== eventId) : [...current, eventId]));
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="KdK Event Finder home">
            <Sparkles size={24} aria-hidden="true" />
            <span>KdK Event Finder</span>
          </a>
          <span className="event-window">22-25 May 2026</span>
        </nav>
      </header>

      <main id="top" className="main-content">
        <FiltersPanel
          filters={filters}
          visibleCount={visibleCount}
          savedCount={savedEventIds.length}
          days={days}
          types={types}
          stages={stages}
          onUpdate={updateFilters}
          onReset={() => setFilters(defaultFilters)}
        />

        <EventResults eventGroups={eventGroups} visibleCount={visibleCount} savedEventIds={savedEventIdSet} onToggleSaved={toggleSavedEvent} />
      </main>

      <footer className="site-footer">
        <p>
          @ 2026 with <span aria-label="love">❤️</span> by Andre Lopes
        </p>
        <p>
          Created independently by Andre Lopes. This app is not affiliated with, endorsed by, or officially related to the Karneval der Kulturen
          organization.
        </p>
      </footer>
    </div>
  );
}
