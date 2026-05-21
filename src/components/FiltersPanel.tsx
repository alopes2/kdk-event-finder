import { CalendarDays, Clock, Heart, MapPin, Music2, RotateCcw, Search } from "lucide-react";
import type { DayOption, FilterState } from "../types";
import { timeOptions, timeToIndex, toggleValue } from "../utils/filters";
import { Chip } from "./Chip";
import { FilterGroup } from "./FilterGroup";

type FiltersPanelProps = {
  filters: FilterState;
  visibleCount: number;
  savedCount: number;
  days: DayOption[];
  types: string[];
  stages: string[];
  onUpdate: (patch: Partial<FilterState>) => void;
  onReset: () => void;
};

export function FiltersPanel({ filters, visibleCount, savedCount, days, types, stages, onUpdate, onReset }: FiltersPanelProps) {
  const updateStartTime = (index: number) => {
    const nextIndex = Math.min(index, timeToIndex(filters.endTime));
    onUpdate({ startTime: timeOptions[nextIndex] });
  };

  const updateEndTime = (index: number) => {
    const nextIndex = Math.max(index, timeToIndex(filters.startTime));
    onUpdate({ endTime: timeOptions[nextIndex] });
  };

  return (
    <section className="filters" aria-label="Event filters">
      <div className="filters__sticky">
        <div className="filter-head">
          <div>
            <p className="eyebrow">Filters</p>
            <h2>{visibleCount} events</h2>
          </div>
          <button className="icon-button" type="button" onClick={onReset} aria-label="Reset filters">
            <RotateCcw size={18} aria-hidden="true" />
          </button>
        </div>

        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search by name</span>
          <input
            type="search"
            value={filters.query}
            onChange={(event) => onUpdate({ query: event.target.value })}
            placeholder="Search name, artist, or stage"
          />
        </label>
      </div>

      <div className="filters__scroll">
        <FilterGroup title="Saved" icon={<Heart size={18} aria-hidden="true" />}>
          <Chip active={filters.savedOnly} onClick={() => onUpdate({ savedOnly: !filters.savedOnly })}>
            Saved events {savedCount}
          </Chip>
        </FilterGroup>

        <FilterGroup title="Day" icon={<CalendarDays size={18} aria-hidden="true" />}>
          {days.map((item) => (
            <Chip key={item.day} active={filters.days.includes(item.day)} onClick={() => onUpdate({ days: toggleValue(filters.days, item.day) })}>
              {item.day} {item.date}
            </Chip>
          ))}
        </FilterGroup>

        <FilterGroup title="Type" icon={<Music2 size={18} aria-hidden="true" />}>
          {types.map((type) => (
            <Chip key={type} active={filters.types.includes(type)} onClick={() => onUpdate({ types: toggleValue(filters.types, type) })}>
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
            <Chip key={stage} active={filters.stages.includes(stage)} onClick={() => onUpdate({ stages: toggleValue(filters.stages, stage) })}>
              {stage}
            </Chip>
          ))}
        </FilterGroup>
      </div>
    </section>
  );
}
