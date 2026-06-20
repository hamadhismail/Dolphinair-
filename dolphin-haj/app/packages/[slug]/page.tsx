import { Metadata } from "next";
import { notFound } from "next/navigation";
import { packages } from "@/lib/constants";
import { PackageDetailContent } from "./PackageDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.id === slug);

  if (!pkg) {
    return { title: "Package Not Found – Dolphin Haj" };
  }

  return {
    title: `${pkg.title} – Dolphin Haj`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.id === slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailContent pkg={pkg} />;
}
