"use client";

import { useState } from "react";

import TabGroup, { type TabGroupTab } from "./TabGroup";

const tabs: TabGroupTab[] = [
  { id: "overview", label: "Overview" },
  { id: "work", label: "Work" },
  { id: "notes", label: "Notes" },
];

export default function TabGroupExample() {
  const [value, setValue] = useState(tabs[0].id);

  return (
    <TabGroup tabs={tabs} value={value} onValueChange={setValue} />
  );
}
