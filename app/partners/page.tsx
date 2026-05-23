import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Building2, Landmark, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { PARTNER_EMAIL, SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Flinck—banks, government, agribusiness, and investors building agricultural marketplace infrastructure.",
  alternates: { canonical: `${SITE_URL}/partners` },
};

const partnerTypes = [
  {
    icon: Landmark,
    title: "Banks & fintech",
    body: "Wallet flows, KYC-aligned profiles, and trade-backed signals for ag lending and payments.",
  },
  {
    icon: ShieldCheck,
    title: "Government & NGOs",
    body: "Program reach, traceability, and regional supply visibility grounded in marketplace activity.",
  },
  {
    icon: Building2,
    title: "Agribusiness",
    body: "Procurement at scale, verified suppliers, and logistics coordination for your supply chain.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    body: "Deal flow, operator quality, and regional momentum for agribusiness and impact portfolios.",
  },
];

export default function PartnersPage() {
  return (
    <PageShell>
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              Partnerships
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Build the agricultural economy with Flinck.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work with institutions that need trusted market infrastructure—not
              another disconnected pilot. Tell us your geography, compliance
              needs, and integration goals.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {partnerTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/90 p-8"
                >
                  <Icon className="h-8 w-8 text-[#163d2a]" />
                  <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-[3rem] bg-[#163d2a] px-8 py-12 text-white sm:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold">Start a conversation</h2>
                <p className="mt-4 text-white/75">
                  Email us with your organization, region, and what you want to
                  achieve. We typically respond within two business days.
                </p>
                <p className="mt-4 flex items-center gap-2 font-medium text-[#d6f277]">
                  <Mail className="h-5 w-5" />
                  {PARTNER_EMAIL}
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="h-14 shrink-0 rounded-full bg-[#d6f277] px-8 text-slate-950 hover:bg-[#c9eb61]"
              >
                <a href={`mailto:${PARTNER_EMAIL}?subject=Flinck%20Partnership`}>
                  Email partnerships
                </a>
              </Button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-slate-600">
            Farmers and buyers can{" "}
            <Link href="/download" className="font-medium text-[#163d2a] underline">
              download the app
            </Link>{" "}
            or read our{" "}
            <Link href="/blog" className="font-medium text-[#163d2a] underline">
              blog
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
