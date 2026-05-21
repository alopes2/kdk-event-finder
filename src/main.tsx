import { StrictMode, useMemo, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { CalendarDays, Clock, MapPin, Music2, RotateCcw, Search, Sparkles } from "lucide-react";
import { events, type EventType } from "./data/events";
import "./styles.css";

type FilterState = {
  days: string[];
  types: string[];
  stages: string[];
  query: string;
  startTime: string;
  endTime: string;
};

const defaultFilters: FilterState = {
  days: [],
  types: [],
  stages: [],
  query: "",
  startTime: "12:00",
  endTime: "23:30",
};

const timeOptions = Array.from({ length: 28 }, (_, index) => {
  const hour = 10 + Math.floor(index / 2);
  const minute = index % 2 === 0 ? "00" : "30";
  return `${String(hour).padStart(2, "0")}:${minute}`;
});

function timeToIndex(time: string) {
  return Math.max(0, timeOptions.indexOf(time));
}

function uniqueSorted(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

function useEventGroups(filters: FilterState) {
  return useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    const filtered = events.filter((event) => {
      const matchesDay = filters.days.length === 0 || filters.days.includes(event.day);
      const matchesStage = filters.stages.length === 0 || filters.stages.includes(event.stage);
      const matchesType = filters.types.length === 0 || filters.types.some((type) => event.types.includes(type));
      const matchesTime = event.time >= filters.startTime && event.time <= filters.endTime;
      const matchesQuery =
        !query ||
        event.name.toLowerCase().includes(query) ||
        event.artist.toLowerCase().includes(query) ||
        event.stage.toLowerCase().includes(query);

      return matchesDay && matchesStage && matchesType && matchesTime && matchesQuery;
    });

    return filtered.reduce<Record<string, Record<string, EventType[]>>>((dayGroups, event) => {
      const dayKey = `${event.day}, ${event.date}`;
      dayGroups[dayKey] ??= {};
      dayGroups[dayKey][event.time] ??= [];
      dayGroups[dayKey][event.time].push(event);
      return dayGroups;
    }, {});
  }, [filters]);
}

function App() {
  const [filters, setFilters] = useState(defaultFilters);
  const eventGroups = useEventGroups(filters);
  const days = useMemo(
    () =>
      [...new Map(events.map((event) => [event.day, { day: event.day, date: event.date, order: event.dayOrder }])).values()].sort(
        (a, b) => a.order - b.order,
      ),
    [],
  );
  const types = useMemo(() => uniqueSorted(events.flatMap((event) => event.types)), []);
  const stages = useMemo(() => uniqueSorted(events.map((event) => event.stage)), []);
  const visibleCount = Object.values(eventGroups).reduce(
    (total, timeGroups) => total + Object.values(timeGroups).reduce((sum, group) => sum + group.length, 0),
    0,
  );

  const update = (patch: Partial<FilterState>) => setFilters((current) => ({ ...current, ...patch }));
  const updateStartTime = (index: number) => {
    const nextIndex = Math.min(index, timeToIndex(filters.endTime));
    update({ startTime: timeOptions[nextIndex] });
  };
  const updateEndTime = (index: number) => {
    const nextIndex = Math.max(index, timeToIndex(filters.startTime));
    update({ endTime: timeOptions[nextIndex] });
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
        <section className="intro">
          <p className="eyebrow">Karneval der Kulturen, Berlin</p>
          <h1>Find your next stage without losing the rhythm.</h1>
          <p className="intro-copy">
            Browse the street festival by day, sound, time, and stage. Pick several stages to compare what is happening at the same time.
          </p>
        </section>

        <section className="filters" aria-label="Event filters">
          <div className="filters__sticky">
            <div className="filter-head">
              <div>
                <p className="eyebrow">Filters</p>
                <h2>{visibleCount} events</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => setFilters(defaultFilters)} aria-label="Reset filters">
                <RotateCcw size={18} aria-hidden="true" />
              </button>
            </div>

            <label className="search-field">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Search by name</span>
              <input
                type="search"
                value={filters.query}
                onChange={(event) => update({ query: event.target.value })}
                placeholder="Search name, artist, or stage"
              />
            </label>
          </div>

          <div className="filters__scroll">
            <FilterGroup title="Day" icon={<CalendarDays size={18} aria-hidden="true" />}>
              {days.map((item) => (
                <Chip
                  key={item.day}
                  active={filters.days.includes(item.day)}
                  onClick={() => update({ days: toggleValue(filters.days, item.day) })}
                >
                  {item.day} {item.date}
                </Chip>
              ))}
            </FilterGroup>

            <FilterGroup title="Type" icon={<Music2 size={18} aria-hidden="true" />}>
              {types.map((type) => (
                <Chip key={type} active={filters.types.includes(type)} onClick={() => update({ types: toggleValue(filters.types, type) })}>
                  {type}
                </Chip>
              ))}
            </FilterGroup>

            <FilterGroup title="Time" icon={<Clock size={18} aria-hidden="true" />}>
              <div className="time-controls">
                <label>
                  <span>From {filters.startTime}</span>
                  <input
                    type="range"
                    min="0"
                    max={timeOptions.length - 1}
                    step="1"
                    value={timeToIndex(filters.startTime)}
                    onChange={(event) => updateStartTime(Number(event.target.value))}
                    aria-label="Start time"
                  />
                </label>
                <label>
                  <span>To {filters.endTime}</span>
                  <input
                    type="range"
                    min="0"
                    max={timeOptions.length - 1}
                    step="1"
                    value={timeToIndex(filters.endTime)}
                    onChange={(event) => updateEndTime(Number(event.target.value))}
                    aria-label="End time"
                  />
                </label>
              </div>
            </FilterGroup>

            <FilterGroup title="Stage" icon={<MapPin size={18} aria-hidden="true" />}>
              {stages.map((stage) => (
                <Chip key={stage} active={filters.stages.includes(stage)} onClick={() => update({ stages: toggleValue(filters.stages, stage) })}>
                  {stage}
                </Chip>
              ))}
            </FilterGroup>
          </div>
        </section>

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
                          <article className="event-card" key={event.id}>
                            <div className="event-card__topline">
                              <span>{event.stage}</span>
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
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              ))
            )}
          </div>
        </section>
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

function FilterGroup({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div className="filter-group">
      <h3>
        {icon}
        {title}
      </h3>
      <div className="chip-row">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button className={active ? "chip chip--active" : "chip"} type="button" aria-pressed={active} onClick={onClick}>
      {children}
    </button>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
