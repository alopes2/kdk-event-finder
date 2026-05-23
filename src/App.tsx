import { useEffect, useMemo, useState } from "react";
import { Sparkles, SlidersHorizontal } from "lucide-react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { events } from "./data/events";
import { DatenschutzPage } from "./components/DatenschutzPage";
import { EventsPage } from "./components/EventsPage";
import { countGroupedEvents, defaultFilters, uniqueSorted, useEventGroups } from "./utils/filters";
import { getEventLocationLabel } from "./utils/location";
import { readSavedEventIds, writeSavedEventIds } from "./utils/savedEvents";
import type { FilterState } from "./types";

export function App() {
  const location = useLocation();
  const [filters, setFilters] = useState(defaultFilters);
  const [savedEventIds, setSavedEventIds] = useState<string[]>(readSavedEventIds);
  const [filtersOpen, setFiltersOpen] = useState(false);
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

  useEffect(() => {
    if (!filtersOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFiltersOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [filtersOpen]);

  const updateFilters = (patch: Partial<FilterState>) => setFilters((current) => ({ ...current, ...patch }));
  const toggleSavedEvent = (eventId: string) => {
    setSavedEventIds((current) => (current.includes(eventId) ? current.filter((id) => id !== eventId) : [...current, eventId]));
  };
  const isDatenschutzOpen = location.pathname === "/datenschutz";

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <Link className="brand" to="/" aria-label="KdK Event Finder home">
            <Sparkles size={24} aria-hidden="true" />
            <span>KdK Event Finder</span>
          </Link>
          <span className="event-window">22-25 May 2026</span>
        </nav>
      </header>

      <main id="top" className={`main-content${isDatenschutzOpen ? " main-content--single" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <EventsPage
                filters={filters}
                visibleCount={visibleCount}
                savedCount={savedEventIds.length}
                days={days}
                types={types}
                stages={stages}
                onUpdate={updateFilters}
                onReset={() => setFilters(defaultFilters)}
                mobileOpen={filtersOpen}
                onMobileClose={() => setFiltersOpen(false)}
                eventGroups={eventGroups}
                savedEventIds={savedEventIdSet}
                onToggleSaved={toggleSavedEvent}
              />
            }
          />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isDatenschutzOpen && (
        <button
          className="filters-fab"
          type="button"
          onClick={() => setFiltersOpen(true)}
          aria-label="Open filters"
          aria-expanded={filtersOpen}
          aria-controls="filters-panel"
        >
          <SlidersHorizontal size={18} aria-hidden="true" />
          Filters
        </button>
      )}

      <footer className="site-footer">
        <p>
          @ 2026 with <span aria-label="love">❤️</span> by Andre Lopes
        </p>
        <p>
          Created independently by Andre Lopes. This app is not affiliated with, endorsed by, or officially related to the Karneval der Kulturen
          organization.
        </p>
        <p>
          <Link to="/datenschutz">Datenschutz</Link>
        </p>
      </footer>
    </div>
  );
}
