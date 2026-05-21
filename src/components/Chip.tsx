import type { ReactNode } from "react";

type ChipProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

export function Chip({ active, onClick, children }: ChipProps) {
  return (
    <button className={active ? "chip chip--active" : "chip"} type="button" aria-pressed={active} onClick={onClick}>
      {children}
    </button>
  );
}
