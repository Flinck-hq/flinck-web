"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowUpRight,
  BarChart3,
  Leaf,
  MessageSquare,
  Sprout,
  Store,
} from "lucide-react";

type WaitlistFormProps = {
  submitted: boolean;
  onSubmit: (event: React.FormEvent) => void;
  email: string;
  name: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  buttonLabel: string;
  stacked?: boolean;
};

function WaitlistForm({
  submitted,
  onSubmit,
  email,
  name,
  setEmail,
  setName,
  buttonLabel,
  stacked = false,
}: WaitlistFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full ${stacked ? "max-w-lg" : "max-w-xl"} ${stacked ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}`}
    >
      <Input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="h-12 border-white/20 bg-white/5 text-white placeholder:text-white/60"
      />
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 border-white/20 bg-white/5 text-white placeholder:text-white/60"
      />
      <Button
        type="submit"
        disabled={submitted}
        className={`h-12 ${stacked ? "w-full" : "sm:col-span-2"} bg-[#4ae08f] text-[#052016] hover:bg-[#68eea4] font-semibold`}
      >
        {submitted ? "✓ Joined!" : buttonLabel}
      </Button>
    </form>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
    };

    emailjs
      .send(
        "service_askuuya",
        "template_nbn335s",
        templateParams,
        "w0Ro0MNRiIZqTEkLQ",
      )
      .then(
        () => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setTimeout(() => setSubmitted(false), 3000);
        },
        (err: unknown) => {
          console.log("FAILED...", err);
        },
      );
  };

  const quickActions = [
    {
      icon: Sprout,
      title: "Crop Guide",
      text: "Get planting recommendations",
      color: "bg-[#d8f4e2] text-[#1f7a45]",
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      text: "Get farming advice",
      color: "bg-[#d6e4ff] text-[#2959c7]",
    },
    {
      icon: Store,
      title: "Market Place",
      text: "Check current prices",
      color: "bg-[#f8edd0] text-[#ab6a05]",
    },
    {
      icon: BarChart3,
      title: "Knowledge Hub",
      text: "Read farming articles",
      color: "bg-[#eddcfa] text-[#7d2db2]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#081c12] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#07170f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(70,197,126,0.2)_0%,_transparent_60%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-8 lg:py-20">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
              <Leaf className="h-4 w-4 text-[#4ae08f]" /> Flink
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Farm smarter. Earn faster. Sell with confidence.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
              Flink gives every farmer clear guidance, verified prices, and
              instant support in one mobile-first experience.
            </p>

            <div className="mt-8">
              <WaitlistForm
                submitted={submitted}
                onSubmit={handleSubmit}
                email={email}
                name={name}
                setEmail={setEmail}
                setName={setName}
                buttonLabel="Join the Waiting List"
              />
            </div>

            {submitted && (
              <p className="mt-3 text-sm text-[#87f9b8]">
                Thanks, you are on the list.
              </p>
            )}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#4ae08f]/15 blur-2xl" />
            <img
              src="https://coprvy.com/new-hero.png"
              alt="Flink app experience"
              className="relative mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-[#0a2115] p-2 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold sm:text-3xl">Quick Actions</h2>
          <span className="text-sm text-white/60">Flink mobile modules</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-white/65">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06130d]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-16">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/55">
              Instant Global Payments
            </p>
            <h3 className="text-xl font-semibold">Wallet & Payouts</h3>
            <p className="mt-2 text-sm text-white/70">
              Receive payouts instantly for produce sold through Flink.
            </p>
            <img
              src="https://coprvy.com/bento-left.png"
              alt="Wallet UI"
              className="mt-5 w-full rounded-2xl border border-white/10"
            />
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/55">
              One Tap Contracts
            </p>
            <h3 className="text-xl font-semibold">Smart Produce Deals</h3>
            <p className="mt-2 text-sm text-white/70">
              Lock terms before delivery and protect both farmer and buyer.
            </p>
            <img
              src="https://coprvy.com/bento-middle.png"
              alt="Smart contract UI"
              className="mt-5 w-full rounded-2xl border border-white/10"
            />
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/55">
              Secure Communication
            </p>
            <h3 className="text-xl font-semibold">Farmer Messaging</h3>
            <p className="mt-2 text-sm text-white/70">
              Chat directly with agents, buyers, and extension experts.
            </p>
            <img
              src="https://coprvy.com/bento-right.png"
              alt="Communication UI"
              className="mt-5 w-full rounded-2xl border border-white/10"
            />
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#112416] p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-white/60">
              Flink Wallet
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Value Backed by Work</h3>
            <p className="mt-3 text-white/70">
              Store earnings, swap smoothly, and plan the next season with clear
              cashflow visibility.
            </p>
            <img
              src="https://coprvy.com/coin.png"
              alt="Flink coin visual"
              className="mt-6 h-56 w-full rounded-2xl object-cover"
            />
          </article>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f1e34] p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-white/60">
              Flink Card
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Spend in Real Life</h3>
            <p className="mt-3 text-white/70">
              Convert farm income into daily spending with a card-friendly payout
              experience.
            </p>
            <img
              src="https://coprvy.com/card.png"
              alt="Flink card visual"
              className="mt-6 h-56 w-full rounded-2xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10">
        <img
          src="https://coprvy.com/horizont-background.webp"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#041108]/80" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.16em] text-[#9ee9bf]">
              Early Access
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Be first to experience the new Flink farming platform.
            </h2>
            <p className="mt-4 text-white/70">
              Join farmers already preparing for better harvest decisions and
              faster market access.
            </p>

            <div className="mt-8">
              <WaitlistForm
                submitted={submitted}
                onSubmit={handleSubmit}
                email={email}
                name={name}
                setEmail={setEmail}
                setName={setName}
                buttonLabel="Get Early Access"
                stacked
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-white/65 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>Flink. Built for farmers.</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-white hover:text-[#9ee9bf]"
        >
          Contact the team <ArrowUpRight className="h-4 w-4" />
        </a>
      </footer>
    </main>
  );
}
