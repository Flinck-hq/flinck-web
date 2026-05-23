import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CloudRainWind,
  Landmark,
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
  Wheat,
  BellRing,
} from "lucide-react";

export const SITE_URL = "https://getflinck.pro";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.k09dtechnologies.flink";
export const PARTNER_EMAIL = "partners@flinck.ag";
export const SUPPORT_EMAIL = "hello@flinck.ag";

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

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Audience = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const heroCopy = {
  eyebrow: "Agricultural social marketplace for everyone in the chain",
  title: "Where agriculture connects, trades, and grows.",
  subtitle:
    "Flinck brings farmers, consumers, businesses, manufacturers, banks, government, and ag investors into one trusted network—social discovery, marketplace execution, and verified trade in a single platform.",
  primaryCta: "Get the Flinck app",
  secondaryCta: "Explore how it works",
};

export const audiences: Audience[] = [
  {
    slug: "farmers",
    title: "Farmers & producers",
    tagline: "Sell, learn, and build reputation",
    description:
      "List harvests, follow market signals, get weather guidance, and grow a verified profile buyers trust.",
    icon: Wheat,
    bullets: [
      "Direct listings with in-app negotiation",
      "Hyper-local weather and crop guidance",
      "Reputation that travels with every trade",
    ],
    ctaLabel: "Download for Android",
    ctaHref: PLAY_STORE_URL,
  },
  {
    slug: "buyers",
    title: "Buyers & consumers",
    tagline: "Discover and purchase with confidence",
    description:
      "Find produce and ag products from verified sellers, compare offers, and coordinate fulfillment in one place.",
    icon: ShoppingBasket,
    bullets: [
      "Search by crop, region, and seller trust",
      "Secure messaging before you commit",
      "Transparent pricing and order history",
    ],
    ctaLabel: "Start buying on Flinck",
    ctaHref: PLAY_STORE_URL,
  },
  {
    slug: "businesses",
    title: "Businesses & manufacturers",
    tagline: "Procure at scale with clarity",
    description:
      "Source from a network of verified suppliers, manage recurring procurement, and reduce middleman friction.",
    icon: Building2,
    bullets: [
      "Bulk and contract-friendly listings",
      "Supplier verification and trade history",
      "Logistics coordination in-app",
    ],
    ctaLabel: "Request a business demo",
    ctaHref: "/partners",
  },
  {
    slug: "banks",
    title: "Banks & fintech",
    tagline: "Trade-backed financial signals",
    description:
      "Explore wallet flows, identity-aligned profiles, and marketplace activity that supports smarter ag finance.",
    icon: Landmark,
    bullets: [
      "Verified user and business profiles",
      "Transaction and wallet activity context",
      "Partnership-ready compliance discussions",
    ],
    ctaLabel: "Partner with Flinck",
    ctaHref: "/partners",
  },
  {
    slug: "government",
    title: "Government & programs",
    tagline: "Reach and visibility at scale",
    description:
      "Support subsidies, traceability, and regional supply programs with data grounded in real marketplace activity.",
    icon: ShieldCheck,
    bullets: [
      "Regional supply and demand visibility",
      "Program outreach through the network",
      "Audit-friendly trade records",
    ],
    ctaLabel: "Talk to our policy team",
    ctaHref: "/partners",
  },
  {
    slug: "investors",
    title: "Agricultural investors",
    tagline: "Deal flow with ground truth",
    description:
      "See operator quality, regional momentum, and trade patterns that inform agribusiness and impact investing.",
    icon: TrendingUp,
    bullets: [
      "Marketplace-derived activity signals",
      "Operator and cooperative visibility",
      "Pilot and portfolio partnership options",
    ],
    ctaLabel: "Explore investment partnerships",
    ctaHref: "/partners",
  },
];

export const highlights: Highlight[] = [
  {
    value: "Social network",
    label:
      "Profiles, community, and shared insights—not only listings in a catalog.",
  },
  {
    value: "Marketplace",
    label:
      "List produce, negotiate, and complete trades with verified counterparties.",
  },
  {
    value: "Trust layer",
    label:
      "Verification, reputation, and records institutions and buyers can rely on.",
  },
];

export const proofStats: ProofStat[] = [
  {
    value: "Field intelligence",
    label: "Weather and crop guidance tied to your location and season.",
    note: "Plan planting, protection, and harvest with actionable signals.",
  },
  {
    value: "Open commerce",
    label: "List and discover ag products with direct buyer–seller negotiation.",
    note: "Reduce middlemen where the network supports direct trade.",
  },
  {
    value: "Verified identity",
    label: "Profiles and trust cues that strengthen every transaction.",
    note: "Build credibility that buyers, banks, and programs recognize.",
  },
  {
    value: "Institutional ready",
    label: "Partnership paths for banks, government, and investors.",
    note: "Scale beyond peer-to-peer when your organization is ready.",
  },
];

export const pillars: FeatureCard[] = [
  {
    icon: Users,
    eyebrow: "Social",
    title: "Community & discovery",
    description:
      "Follow operators, share updates, and learn from a network built for agriculture—not generic social noise.",
  },
  {
    icon: Store,
    eyebrow: "Commerce",
    title: "Unified marketplace",
    description:
      "List, promote, and sell with tools for individuals, cooperatives, and institutional procurement.",
  },
  {
    icon: CloudRainWind,
    eyebrow: "Intelligence",
    title: "Precision for the field",
    description:
      "Location-aware weather and crop guidance so decisions on the farm match conditions in the market.",
  },
  {
    icon: Wallet,
    eyebrow: "Finance",
    title: "Payments & growth",
    description:
      "Wallet flows, performance visibility, and partnership lanes for banks and ag finance.",
  },
];

export const capabilities: FeatureCard[] = [
  {
    icon: MapPinned,
    title: "Location-specific alerts",
    copy: "Weather and market signals relevant to your farm or operating region.",
  },
  {
    icon: Sprout,
    title: "Crop management",
    copy: "Guidance for planting, protection, and harvest across diverse operations.",
  },
  {
    icon: ShoppingBasket,
    title: "Marketplace listings",
    copy: "Showcase produce and ag products with clear pricing and discovery tools.",
  },
  {
    icon: MessageSquareMore,
    title: "In-app negotiation",
    copy: "Chat with buyers and sellers to agree terms and coordinate delivery.",
  },
  {
    icon: BellRing,
    title: "Critical notifications",
    copy: "Offers, weather windows, and market opportunities you should not miss.",
  },
  {
    icon: TrendingUp,
    title: "Performance insights",
    copy: "Engagement and sales trends to refine how you show up in the network.",
  },
];

export const platformModules: FeatureCard[] = [
  {
    icon: Sparkles,
    eyebrow: "Guidance",
    title: "Contextual advisory",
    description:
      "Crop health and market context inside the workflows you already use daily.",
  },
  {
    icon: BarChart3,
    eyebrow: "Data",
    title: "Operational analytics",
    description:
      "Visibility into listings, reach, and trade activity across your operation.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Trust",
    title: "Reputation management",
    description:
      "A verified profile that works like a professional record in the ag economy.",
  },
  {
    icon: ArrowUpRight,
    eyebrow: "Scale",
    title: "Efficient trade loops",
    description:
      "Shorter paths from harvest to buyer with coordination built into the app.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amina Yusuf",
    role: "Commercial vegetable farmer",
    quote:
      "Flinck gives me weather context and buyer reach in one place. My listings get serious inquiries—not random messages.",
  },
  {
    name: "Daniel Kofi",
    role: "Institutional produce buyer",
    quote:
      "Verified profiles changed how we source. We negotiate faster because trust is visible before we commit.",
  },
  {
    name: "Esther Njeri",
    role: "Agricultural cooperative manager",
    quote:
      "Our members finally have a network that respects both field work and market access. It feels built for cooperatives.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Who is Flinck for?",
    answer:
      "Flinck is for everyone in agriculture: farmers, consumers, businesses, manufacturers, banks, government programs, and agricultural investors. Each group gets tools matched to how they buy, sell, finance, or govern ag trade.",
  },
  {
    question: "How does Flinck verify users?",
    answer:
      "We use progressive verification—identity checks, trade history, and reputation signals—so trust grows with real activity on the platform.",
  },
  {
    question: "Is Flinck only a marketplace?",
    answer:
      "No. It is a social marketplace: community and discovery plus listings, negotiation, payments, and partnership paths for institutions.",
  },
  {
    question: "How do banks or government partner?",
    answer:
      "Visit our Partners page or email partners@flinck.ag. We scope data sharing, compliance, and rollout geography before any integration.",
  },
  {
    question: "Is the app available on iOS?",
    answer:
      "Flinck is available on Android today via Google Play. iOS availability will be announced on this site when ready.",
  },
  {
    question: "What does it cost to list produce?",
    answer:
      "Basic listings are free. Premium visibility and analytics are available for operators who want to accelerate reach.",
  },
];

export const screenshots: Screenshot[] = [
  {
    src: "/home.jpg",
    alt: "Flinck home dashboard with wallet, quick actions, and weather insights",
    tone: "from-[#1f7a45]/18 via-[#d6f277]/12 to-[#ffffff]",
  },
  {
    src: "/profile.jpg",
    alt: "Flinck profile screen showing identity, wallet, and navigation",
    tone: "from-[#163d2a]/12 via-[#d9a441]/14 to-[#fff7e8]",
  },
  {
    src: "/hero-mockup.png",
    alt: "Flinck app mockup with weather and crop health",
    tone: "from-[#2756db]/12 via-[#1f7a45]/10 to-[#ffffff]",
  },
  {
    src: "/farmer-lifestyle.png",
    alt: "Farmer using Flinck in the field",
    tone: "from-[#f4fbe7] via-[#eef4ff] to-white",
  },
];

export const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "Partners" },
  { href: "/download", label: "Download" },
  { href: "/policy", label: "Privacy" },
];

export const flows: string[] = [
  "Connect in the network",
  "List and discover inventory",
  "Negotiate and secure deals",
  "Settle, grow reputation, and scale",
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}

export function getAllAudienceSlugs(): string[] {
  return audiences.map((a) => a.slug);
}
