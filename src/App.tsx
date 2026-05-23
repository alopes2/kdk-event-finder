import { useEffect, useMemo, useState } from "react";
import { Sparkles, SlidersHorizontal } from "lucide-react";
import { events } from "./data/events";
import { EventResults } from "./components/EventResults";
import { FiltersPanel } from "./components/FiltersPanel";
import { countGroupedEvents, defaultFilters, uniqueSorted, useEventGroups } from "./utils/filters";
import { getEventLocationLabel } from "./utils/location";
import { readSavedEventIds, writeSavedEventIds } from "./utils/savedEvents";
import type { FilterState } from "./types";

export function App() {
  const datenschutzHash = "#datenschutz";
  const [filters, setFilters] = useState(defaultFilters);
  const [savedEventIds, setSavedEventIds] = useState<string[]>(readSavedEventIds);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(() => window.location.hash === datenschutzHash);
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
    const handleHashChange = () => setIsDatenschutzOpen(window.location.hash === datenschutzHash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [datenschutzHash]);

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

      <main id="top" className={`main-content${isDatenschutzOpen ? " main-content--single" : ""}`}>
        {isDatenschutzOpen ? (
          <section className="legal-page" aria-labelledby="datenschutz-title">
            <h1 id="datenschutz-title">Datenschutzerklärung</h1>
            <p>Diese Website nutzt Umami Analytics, um die Nutzung der Seite in aggregierter Form auszuwerten.</p>

            <h2>Zweck und Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung erfolgt zur Verbesserung der Website und Nutzererfahrung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>

            <h2>Welche Daten verarbeitet werden</h2>
            <p>
              Es werden keine Tracking-Cookies gesetzt. Erfasst werden technische Nutzungsdaten wie aufgerufene Seiten, Referrer,
              Browsertyp, Gerätetyp und Zeitstempel. IP-Adressen werden nicht dauerhaft in personenbezogener Form gespeichert.
            </p>

            <h2>Empfänger der Daten</h2>
            <p>
              Der Dienst wird über Umami Cloud betrieben (<a href="https://umami.is" target="_blank" rel="noreferrer">umami.is</a>).
            </p>

            <h2>Speicherdauer</h2>
            <p>Die Daten werden nur so lange gespeichert, wie es für statistische Auswertungen erforderlich ist.</p>

            <h2>Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch gegen die
              Verarbeitung im Rahmen der gesetzlichen Vorgaben.
            </p>

            <p>
              <a href="#top">Zurück zur Startseite</a>
            </p>
          </section>
        ) : (
          <>
            <FiltersPanel
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
            />

            <EventResults eventGroups={eventGroups} visibleCount={visibleCount} savedEventIds={savedEventIdSet} onToggleSaved={toggleSavedEvent} />
          </>
        )}
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
          <a href={datenschutzHash}>Datenschutz</a>
        </p>
      </footer>
    </div>
  );
}
