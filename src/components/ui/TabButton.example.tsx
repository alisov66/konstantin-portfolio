import TabButton from "./TabButton";
import { tokens } from "@/styles/tokens";

export default function TabButtonExample() {
  return (
    <div
      aria-label="Tab button states"
      className="flex items-center"
      role="tablist"
      style={{ gap: tokens.spacing.base[4] }}
    >
      <TabButton>Label</TabButton>
      <TabButton>Label</TabButton>
      <TabButton selected>Label</TabButton>
    </div>
  );
}
