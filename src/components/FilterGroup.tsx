import type { ReactNode } from "react";

type FilterGroupProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

export function FilterGroup({ title, icon, children }: FilterGroupProps) {
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
