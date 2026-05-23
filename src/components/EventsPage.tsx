import type { DayOption, EventGroups, FilterState } from "../types";
import { EventResults } from "./EventResults";
import { FiltersPanel } from "./FiltersPanel";

type EventsPageProps = {
  filters: FilterState;
  visibleCount: number;
  savedCount: number;
  days: DayOption[];
  types: string[];
  stages: string[];
  onUpdate: (patch: Partial<FilterState>) => void;
  onReset: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
  eventGroups: EventGroups;
  savedEventIds: Set<string>;
  onToggleSaved: (eventId: string) => void;
};

export function EventsPage({
  filters,
  visibleCount,
  savedCount,
  days,
  types,
  stages,
  onUpdate,
  onReset,
  mobileOpen,
  onMobileClose,
  eventGroups,
  savedEventIds,
  onToggleSaved,
}: EventsPageProps) {
  return (
    <>
      <FiltersPanel
        filters={filters}
        visibleCount={visibleCount}
        savedCount={savedCount}
        days={days}
        types={types}
        stages={stages}
        onUpdate={onUpdate}
        onReset={onReset}
        mobileOpen={mobileOpen}
        onMobileClose={onMobileClose}
      />

      <EventResults eventGroups={eventGroups} visibleCount={visibleCount} savedEventIds={savedEventIds} onToggleSaved={onToggleSaved} />
    </>
  );
}
