import type { HTMLAttributes } from "react";

import { tokens } from "@/styles/tokens";

import TabButton from "./TabButton";

export interface TabGroupTab {
  id: string;
  label: string;
}

export interface TabGroupProps extends HTMLAttributes<HTMLDivElement> {
  tabs: TabGroupTab[];
  value: string;
  onValueChange: (value: string) => void;
}

export default function TabGroup({
  tabs,
  value,
  onValueChange,
  className,
  style,
  ...props
}: TabGroupProps) {
  return (
    <div
      {...props}
      className={["flex items-start", className].filter(Boolean).join(" ")}
      role="tablist"
      style={{ gap: tokens.spacing.base[2], ...style }}
    >
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          selected={tab.id === value}
          onClick={() => onValueChange(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </div>
  );
}
