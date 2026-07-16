export const capabilities = [
  {
    id: "complex-workflow-design",
    label: "Complex workflow design",
    summary:
      "Adaptive analytical workspaces for complex scientific workflows.",
  },
  {
    id: "design-systems",
    label: "Design systems",
    summary:
      "Shared foundations, reusable patterns, and scalable product UI.",
  },
  {
    id: "documentation-collaboration",
    label: "Documentation & collaboration",
    summary:
      "Clear product knowledge systems that help teams move together.",
  },
  {
    id: "product-design-at-scale",
    label: "Product design at scale",
    summary:
      "Navigation models and platform structures for growing products.",
  },
  {
    id: "mobile-experiences",
    label: "Mobile experiences",
    summary:
      "Focused mobile flows for operational and decision-heavy work.",
  },
] as const;

export type CapabilityId = (typeof capabilities)[number]["id"];

export const defaultCapabilityId = capabilities[0].id;

export function getCapabilityById(id: string) {
  return capabilities.find((capability) => capability.id === id);
}
