import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Building2,
  Landmark,
  Heart,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { SPONSOR_EMAIL, SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Sponsor Flinck and support the open digital infrastructure for smallholder farmers. We work with leading global organizations, banks, and agribusinesses.",
  alternates: { canonical: `${SITE_URL}/sponsors` },
};

const sponsorTiers = [
  {
    icon: Award,
    title: "Ecosystem Sponsors",
    body: "Foundations, global NGOs, and regional development programs seeking to scale trade, traceability, and farm-level visibility.",
  },
  {
    icon: Landmark,
    title: "Financial Sponsors",
    body: "Banks and ag-fintech leaders enabling wallet integrations, credit scoring rails, and trade-backed micro-lending programs.",
  },
  {
    icon: Building2,
    title: "Agribusiness & Enterprise",
    body: "Major procurement operations, input suppliers, and logistics providers enabling fair market access and stable supply channels.",
  },
  {
    icon: Heart,
    title: "Community & Impact",
    body: "Philanthropists, climate tech advocates, and impact funds sponsoring verified green-farming and sustainable soil guidance.",
  },
];

export default function SponsorsPage() {
  return (
    <PageShell>
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
        {/* Soft atmospheric background blur in Vercel style */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[40rem] w-[40rem] rounded-full bg-[#163d2a]/5 blur-[120px]" />
          <div className="h-[30rem] w-[30rem] rounded-full bg-[#d6f277]/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#163d2a]/10 bg-white/50 px-4 py-1.5 text-sm font-medium text-[#163d2a] backdrop-blur-sm">
              <Heart className="h-4 w-4 fill-current text-red-500 animate-pulse" />
              Flinck Sponsorship Program
            </div>
            <h1 className="mt-8 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Sponsor the open digital infrastructure for agriculture.
            </h1>
            <p className="mt-8 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
              Flinck empowers smallholder farmers with open access to local weather intelligence, direct-to-buyer marketplaces, and verified trade identities. We do not sell user data. Instead, we rely on sponsors to fund our ecosystem's growth.
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2">
            {sponsorTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.title}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-slate-900/6 bg-white/70 p-10 shadow-[0_20px_50px_rgba(15,23,42,0.03)] backdrop-blur transition-all hover:bg-white hover:shadow-[0_30px_70px_rgba(15,23,42,0.06)]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff8e7] text-[#163d2a] shadow-inner transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                    {tier.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {tier.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 rounded-[3rem] bg-[#101b16] px-8 py-16 text-white text-center sm:px-12 relative overflow-hidden">
            {/* Visual background lines in card */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white" />
              <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white" />
              <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl font-semibold tracking-tight">Become a Sponsor</h2>
              <p className="mt-6 text-lg text-white/75 leading-8">
                Your support directly finances localized crop intelligence models, offline-first app engineering, and fee-free trade access for thousands of farming communities.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-16 w-full sm:w-auto rounded-full bg-[#d6f277] px-10 text-lg font-semibold text-slate-950 hover:bg-[#c9eb61] shadow-lg"
                >
                  <a href={`mailto:${SPONSOR_EMAIL}?subject=Flinck%20Sponsorship%20Inquiry`}>
                    Email our sponsorship team
                  </a>
                </Button>
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-white/60">
                <Mail className="h-4 w-4 text-[#d6f277]" />
                {SPONSOR_EMAIL}
              </p>
            </div>
          </div>

          <p className="mt-16 text-center text-sm text-slate-500">
            Are you a farmer or buyer?{" "}
            <Link
              href="/download"
              className="font-medium text-[#163d2a] hover:text-[#256041] transition-colors underline decoration-2 underline-offset-4"
            >
              Download the Flinck App
            </Link>{" "}
            or view our{" "}
            <Link 
              href="/how-it-works" 
              className="font-medium text-[#163d2a] hover:text-[#256041] transition-colors underline decoration-2 underline-offset-4"
            >
              system workflow
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
