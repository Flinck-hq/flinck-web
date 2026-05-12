import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  BellRing,
  CloudRainWind,
  MapPinned,
  MessageSquareMore,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Store,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const SITE_URL = "https://getflink.pro";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.k09dtechnologies.flink";

export type Highlight = {
  value: string;
  label: string;
};

export type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description?: string;
  copy?: string;
  eyebrow?: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  tone: string;
};

export type ProofStat = {
  value: string;
  label: string;
  note: string;
};

export type StoryCard = {
  title: string;
  text: string;
  accent: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const highlights: Highlight[] = [
  {
    value: "One command layer",
    label:
      "Weather, farming guidance, marketplace, wallet, messaging and reputation in one product.",
  },
  {
    value: "Built for field speed",
    label:
      "Designed for fast action on mobile, not slow admin-heavy interfaces.",
  },
  {
    value: "Africa-aware",
    label:
      "Local crop decisions, farmer identity, regional trade and buyer discovery all fit the same workflow.",
  },
];

export const proofStats: ProofStat[] = [
  {
    value: "Weather → action",
    label:
      "Flink turns forecast signals into timing guidance, not passive charts.",
    note: "Plan planting, selling and response faster.",
  },
  {
    value: "Marketplace visibility",
    label:
      "Products are shaped for discovery, promotion and direct buyer response.",
    note: "List, boost and convert in one motion.",
  },
  {
    value: "Identity + trust",
    label:
      "Profiles, premium status and verified cues reduce friction in trade.",
    note: "Trust should be visible, not guessed.",
  },
  {
    value: "AI support",
    label:
      "From weather insight to crop guidance and next-step prompts, assistance stays contextual.",
    note: "Advice should feel built into the workflow.",
  },
];

export const pillars: FeatureCard[] = [
  {
    icon: CloudRainWind,
    eyebrow: "Signal",
    title: "Weather intelligence that leads to action",
    description:
      "Farmers should not need three apps and a lucky guess to decide when to plant, wait, protect, or push supply.",
  },
  {
    icon: Store,
    eyebrow: "Commerce",
    title: "A marketplace designed to move products, not just display them",
    description:
      "From product cards to boosted visibility and direct chat, the selling loop stays tight and mobile-native.",
  },
  {
    icon: Users,
    eyebrow: "Network",
    title: "A social graph for agriculture, not generic posting",
    description:
      "Content, comments, connections and farmer identity all reinforce trust, discovery and repeat activity.",
  },
  {
    icon: Wallet,
    eyebrow: "Execution",
    title: "Payments, premium, boosts and momentum in the same product surface",
    description:
      "When insight, trust and transaction live together, retention becomes a product outcome instead of a marketing wish.",
  },
];

export const capabilities: FeatureCard[] = [
  {
    icon: MapPinned,
    title: "Location-aware weather",
    copy: "Forecast data is shaped around where the farmer actually operates, so advice feels timely and grounded.",
  },
  {
    icon: Sprout,
    title: "Crop-specific guidance",
    copy: "Planting windows, crop matching and farm management nudges help users return for decisions, not just browsing.",
  },
  {
    icon: ShoppingBasket,
    title: "Buyer-ready product listing",
    copy: "Product pages are built for confidence, clear pricing, promoted reach and easy conversation with sellers.",
  },
  {
    icon: MessageSquareMore,
    title: "Live communication",
    copy: "Fast messaging turns discovery into negotiation without forcing users off-platform.",
  },
  {
    icon: BellRing,
    title: "Re-engagement loops",
    copy: "Weather alerts, unread messages, boost expiry reminders and account progress prompts all bring people back with reason.",
  },
  {
    icon: TrendingUp,
    title: "Growth surfaces",
    copy: "Premium, boosted visibility and analytics create a stronger value ladder for serious operators.",
  },
];

export const storyCards: StoryCard[] = [
  {
    title: "Before sunrise",
    text: "A farmer opens Flink to check field conditions, crop timing and what needs attention today.",
    accent: "bg-[#d9f99d] text-[#25410f]",
  },
  {
    title: "Midday selling",
    text: "Inventory becomes a polished listing with visibility, chat and product credibility already built in.",
    accent: "bg-[#f6d08d] text-[#5a3510]",
  },
  {
    title: "Evening follow-up",
    text: "Messages, alerts, comments and weather nudges pull the user back with context, not empty notifications.",
    accent: "bg-[#c7e5ff] text-[#153756]",
  },
];

export const platformModules: FeatureCard[] = [
  {
    icon: Sparkles,
    eyebrow: "Assistant",
    title: "AI advisory and premium guidance",
    description:
      "Advice feels embedded inside the operating flow instead of being a detached chatbot island.",
  },
  {
    icon: BarChart3,
    eyebrow: "Analytics",
    title: "Signals that show what is working",
    description:
      "Performance, listing visibility and account momentum can grow into a more serious operator dashboard over time.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Trust",
    title: "Identity that reduces buyer hesitation",
    description:
      "Verified cues, premium status and consistent profile structure help the market feel safer and more credible.",
  },
  {
    icon: ArrowUpRight,
    eyebrow: "Velocity",
    title: "A cleaner path from interest to response",
    description:
      "Less friction in discovery, more reasons to respond, and tighter loops between demand and action.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amina Yusuf",
    role: "Vegetable farmer",
    quote:
      "What I want from a farming app is simple: tell me what matters now, help me sell faster, and keep everything in one place. Flink feels closest to that.",
  },
  {
    name: "Daniel Kofi",
    role: "Produce buyer",
    quote:
      "The trust layer matters. When listings, chat and identity feel stronger, I waste less time chasing uncertain suppliers.",
  },
  {
    name: "Esther Njeri",
    role: "Agri operator",
    quote:
      "The best part is not one feature. It is how weather, product discovery and messages connect into one workflow.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Who is Flink built for?",
    answer:
      "Flink is built for farmers, produce sellers, buyers and ecosystem operators who need practical decisions, product visibility and faster trade loops in one mobile-first experience.",
  },
  {
    question: "Is Flink only a marketplace?",
    answer:
      "No. The marketplace is one layer. Flink also brings weather-informed action, crop guidance, content, identity, messaging and premium growth tools together.",
  },
  {
    question: "Why make the website more detailed?",
    answer:
      "Because Flink is not a tiny single-feature app. The website should communicate depth, trust and product maturity with more storytelling, structure and motion.",
  },
  {
    question: "Can this level of polish scale further?",
    answer:
      "Yes. This pass uses your current stack. If you want richer motion after this, adding Framer Motion later would let us deepen transitions and scroll choreography.",
  },
];

export const screenshots: Screenshot[] = [
  {
    src: "/home.jpg",
    alt: "Flink home dashboard showing wallet, quick actions, and weather insights",
    tone: "from-[#1f7a45]/18 via-[#d6f277]/12 to-[#ffffff]",
  },
  {
    src: "/profile.jpg",
    alt: "Flink profile screen showing farmer identity, wallet card, and app navigation",
    tone: "from-[#163d2a]/12 via-[#d9a441]/14 to-[#fff7e8]",
  },
];

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/workflow", label: "Workflow" },
  { href: "/download", label: "Download" },
  { href: "/policy", label: "Policy" },
];

export const flows: string[] = [
  "Assess conditions & plan",
  "Create listings & discover inventory",
  "Coordinate offers & negotiate",
  "Complete transactions & settle",
];
