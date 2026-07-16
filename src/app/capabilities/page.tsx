import { redirect } from "next/navigation";

import { defaultCapabilityId } from "@/data/capabilities";

export default function CapabilitiesIndexPage() {
  redirect(`/capabilities/${defaultCapabilityId}`);
}
