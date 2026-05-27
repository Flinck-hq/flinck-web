import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import {
  getAllAudienceSlugs,
  getAudience,
  SITE_URL,
} from "@/lib/site-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllAudienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return { title: "Not found" };

  let imagePath = "/platform-dashboard.png";
  if (slug === "farmers") imagePath = "/farmer-lifestyle.png";
  else if (slug === "buyers" || slug === "businesses") imagePath = "/marketplace-vibe.png";

  const imageUrl = `${SITE_URL}${imagePath}`;

  // SEO optimizations
  let seoTitle = `${audience.title} | Flinck Agricultural Marketplace`;
  let seoDescription = audience.description;

  if (slug === "farmers") {
    seoTitle = "Where Can I Sell My Farm Produce Online? | Flinck for Farmers";
    seoDescription = "Are you a farmer wondering: where can I sell my farm produce online? Join Flinck, the leading agricultural marketplace, and sell directly to buyers with zero middleman fees.";
  } else if (slug === "buyers") {
    seoTitle = "Where Can I Buy Farm Produce Direct? | Flinck for Buyers";
    seoDescription = "Wondering where to buy agricultural products and fresh farm produce direct from local farmers? Flinck offers progress-verified digital commerce.";
  } else if (slug === "businesses") {
    seoTitle = "Wholesale Agricultural Marketplace | Procure Farm Produce at Scale";
    seoDescription = "Access high-quality agricultural goods and crops from verified operators. Streamline your agribusiness and food manufacturing supply chain with Flinck.";
  }

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: `${SITE_URL}/for/${slug}` },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `${SITE_URL}/for/${slug}`,
      images: [{ url: imageUrl, alt: audience.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  const Icon = audience.icon;
  const isExternal = audience.ctaHref.startsWith("http");

  return (
    <PageShell>
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-slate-950"
          >
            ← Back to home
          </Link>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#163d2a] text-white">
            <Icon className="h-7 w-7" />
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
            {audience.tagline}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {audience.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {audience.description}
          </p>

          <ul className="mt-10 space-y-4">
            {audience.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-slate-700">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#1f7a45]" />
                <span className="leading-7">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-[#163d2a] px-8 text-white hover:bg-[#10281d]"
            >
              {isExternal ? (
                <a
                  href={audience.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {audience.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <Link href={audience.ctaHref}>
                  {audience.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
