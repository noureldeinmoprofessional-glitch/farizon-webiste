import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { vehicles } from "@/lib/vehicles";

const LABELS: Record<string, string> = {
  vehicles: "Vehicles",
  "why-farizon": "Why Farizon",
  technology: "Technology",
  "fleet-economics": "Fleet Economics",
  about: "About",
  "after-sales": "After-Sales",
  legal: "Legal & Policies",
};

function titleCase(s: string) {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function resolve(slug: string[]) {
  const labels = slug.map((seg) => {
    const vehicle = vehicles.find((v) => v.id === seg);
    if (vehicle) return vehicle.name;
    return LABELS[seg] ?? titleCase(seg);
  });
  return { title: labels[labels.length - 1] ?? "Page", breadcrumb: labels };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { title } = resolve(slug ?? []);
  return { title };
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { title, breadcrumb } = resolve(slug ?? []);
  return <PlaceholderPage title={title} breadcrumb={breadcrumb} />;
}
