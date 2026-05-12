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
  Wallet,
  TrendingUp,
  Users,
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
    value: "Real-time Intelligence",
    label:
      "Integrated weather alerts, crop health monitoring, and precision farming guidance.",
  },
  {
    value: "Market Velocity",
    label:
      "Direct-to-buyer marketplace with boosted visibility and rapid negotiation tools.",
  },
  {
    value: "Trusted Network",
    label:
      "Verified farmer identities and reputation systems that ensure secure and credible trade.",
  },
];

export const proofStats: ProofStat[] = [
  {
    value: "Actionable Weather",
    label:
      "Precision forecasting that provides specific planting and harvesting windows.",
    note: "Reduce crop loss and optimize field timing.",
  },
  {
    value: "Boosted Sales",
    label:
      "Marketplace listings with priority visibility for high-demand agricultural products.",
    note: "Connect with buyers 3x faster than traditional methods.",
  },
  {
    value: "Verified Trust",
    label:
      "Secure profiles and transaction history that build long-term trade credibility.",
    note: "Eliminate buyer hesitation and secure better deals.",
  },
  {
    value: "Smart Advisory",
    label:
      "Contextual AI assistance for pest control, soil management, and market pricing.",
    note: "Data-driven decisions for every stage of the season.",
  },
];

export const pillars: FeatureCard[] = [
  {
    icon: CloudRainWind,
    eyebrow: "Precision",
    title: "Intelligence-Led Farming",
    description:
      "Hyper-local weather data and crop-specific guidance help you act at the perfect moment to maximize yield.",
  },
  {
    icon: Store,
    eyebrow: "Commerce",
    title: "Unified Agricultural Marketplace",
    description:
      "List, promote, and sell your produce directly to a network of verified buyers with zero middlemen friction.",
  },
  {
    icon: Users,
    eyebrow: "Community",
    title: "Verified Trade Ecosystem",
    description:
      "Build a professional reputation with a verified identity that facilitates secure and repeated business interactions.",
  },
  {
    icon: Wallet,
    eyebrow: "Growth",
    title: "Financial Operating Layer",
    description:
      "Manage payments, track marketplace performance, and access premium tools to scale your agricultural operations.",
  },
];

export const capabilities: FeatureCard[] = [
  {
    icon: MapPinned,
    title: "Location-Specific Alerts",
    copy: "Get notified about weather shifts and market demands specifically relevant to your exact farm location.",
  },
  {
    icon: Sprout,
    title: "Crop Management",
    copy: "Access detailed guidance for planting, protection, and harvesting based on real-time environmental data.",
  },
  {
    icon: ShoppingBasket,
    title: "Direct Marketplace Access",
    copy: "Showcase your produce to a broad audience of buyers with clear pricing and high-visibility listing options.",
  },
  {
    icon: MessageSquareMore,
    title: "Integrated Negotiation",
    copy: "Chat directly with buyers and sellers within the app to finalize deals and coordinate logistics securely.",
  },
  {
    icon: BellRing,
    title: "Critical Notifications",
    copy: "Never miss a planting window, a buyer offer, or a market opportunity with our intelligent alert system.",
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    copy: "Monitor your listing views, buyer engagement, and sales trends to refine your market strategy.",
  },
];

export const storyCards: StoryCard[] = [
  {
    title: "Analyze",
    text: "Review field conditions and weather forecasts to determine the optimal actions for the day.",
    accent: "bg-[#d9f99d] text-[#25410f]",
  },
  {
    title: "Connect",
    text: "List produce and engage with buyers through our secure, high-visibility marketplace interface.",
    accent: "bg-[#f6d08d] text-[#5a3510]",
  },
  {
    title: "Grow",
    text: "Build a verified track record and use data-driven insights to scale your farming business.",
    accent: "bg-[#c7e5ff] text-[#153756]",
  },
];

export const platformModules: FeatureCard[] = [
  {
    icon: Sparkles,
    eyebrow: "Assistance",
    title: "Contextual AI Advisory",
    description:
      "Receive expert guidance on crop health and market trends directly within your daily operational workflow.",
  },
  {
    icon: BarChart3,
    eyebrow: "Data",
    title: "Operational Analytics",
    description:
      "Track every aspect of your farm's performance and marketplace reach with detailed, easy-to-read data.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Security",
    title: "Reputation Management",
    description:
      "Maintain a verified profile that serves as your professional resume in the agricultural trade network.",
  },
  {
    icon: ArrowUpRight,
    eyebrow: "Velocity",
    title: "Optimized Trade Loops",
    description:
      "Reduce the time between harvesting and selling with tools designed for maximum market efficiency.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amina Yusuf",
    role: "Commercial Vegetable Farmer",
    quote:
      "Flink provides the exact data I need to manage my harvests effectively. The marketplace visibility has significantly increased my monthly sales.",
  },
  {
    name: "Daniel Kofi",
    role: "Institutional Produce Buyer",
    quote:
      "The verified identity system on Flink has completely changed how I source produce. I can trade with confidence and speed.",
  },
  {
    name: "Esther Njeri",
    role: "Agricultural Cooperative Manager",
    quote:
      "Integrating weather alerts with marketplace access in one app is a game-changer for our members' productivity.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How does Flink verify users?",
    answer:
      "We use a multi-step verification process that includes identity checks and reputation tracking to ensure all participants are credible and professional.",
  },
  {
    question: "Can I manage multiple crops on Flink?",
    answer:
      "Yes. Flink is designed to support diverse agricultural operations, providing specific guidance and marketplace categories for a wide range of crops.",
  },
  {
    question: "How do weather alerts work?",
    answer:
      "We use hyper-local meteorological data to send you specific, actionable notifications about planting, protection, and harvesting windows based on your farm's location.",
  },
  {
    question: "Is there a cost to use the marketplace?",
    answer:
      "Basic listings are free. We offer premium visibility and analytics tools for operators who want to accelerate their growth and reach more buyers.",
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
  {
    src: "/hero-mockup.png",
    alt: "Flink 3D app mockup showing weather alerts and crop health",
    tone: "from-[#2756db]/12 via-[#1f7a45]/10 to-[#ffffff]",
  },
  {
    src: "/farmer-lifestyle.png",
    alt: "African farmer using Flink on a smartphone in a maize field",
    tone: "from-[#f4fbe7] via-[#eef4ff] to-white",
  },
  {
    src: "/marketplace-vibe.png",
    alt: "Vibrant marketplace with fresh cassava and maize",
    tone: "from-[#fff3dd] via-[#eef4ff] to-white",
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
  "Monitor and Assess Conditions",
  "List and Promote Inventory",
  "Negotiate and Secure Deals",
  "Settle and Scale Operations",
];
