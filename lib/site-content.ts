import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  MapPinned,
  MessageSquareMore,
  ShoppingBasket,
  Sparkles,
  Sprout,
  TrendingUp,
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
};

export type Screenshot = {
  src: string;
  alt: string;
  tone: string;
};

export const highlights: Highlight[] = [
  {
    value: "One app",
    label: "Weather, crop guidance, market access, wallet and community tools",
  },
  {
    value: "Mobile first",
    label: "Built for fast decisions in the field, not dashboards nobody uses",
  },
  {
    value: "Farmer ready",
    label: "Designed for real producers, buyers and modern agri-commerce flows",
  },
];

export const pillars: FeatureCard[] = [
  {
    icon: Sparkles,
    title: "Decision Intelligence",
    description:
      "Turn weather, crop context and local conditions into clearer planting and selling decisions.",
  },
  {
    icon: ShoppingBasket,
    title: "Marketplace That Converts",
    description:
      "List produce, manage product details, connect with buyers and move faster from inventory to income.",
  },
  {
    icon: Wallet,
    title: "Built-In Transactions",
    description:
      "Keep payments, balance visibility and sales momentum close to the rest of the workflow.",
  },
  {
    icon: MessageSquareMore,
    title: "AI + Community Support",
    description:
      "Give farmers a smart assistant and a content layer that helps knowledge spread, not stall.",
  },
];

export const capabilities: FeatureCard[] = [
  {
    icon: MapPinned,
    title: "Location-aware weather",
    copy: "Relevant forecasts and practical signals instead of generic weather noise.",
  },
  {
    icon: Sprout,
    title: "Crop recommendations",
    copy: "Guide users on what to plant and how to reduce guesswork around timing.",
  },
  {
    icon: TrendingUp,
    title: "Market visibility",
    copy: "Help farmers understand pricing, demand and where to push inventory next.",
  },
  {
    icon: BarChart3,
    title: "Operator clarity",
    copy: "Bring products, orders, content and profile performance into one clean flow.",
  },
];

export const flows = [
  "Check conditions before planting or harvesting.",
  "List produce with images, pricing and descriptions that buyers can trust.",
  "Move from discovery to order without sending users across disconnected tools.",
];

export const screenshots: Screenshot[] = [
  {
    src: "/home.jpg",
    alt: "Flink home dashboard showing wallet, quick actions, and weather insights",
    tone: "from-[#1f7a45]/18 to-[#d6f277]/10",
  },
  {
    src: "/profile.jpg",
    alt: "Flink profile screen showing farmer identity, wallet card, and app navigation",
    tone: "from-[#163d2a]/10 to-[#d9a441]/16",
  },
];

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/workflow", label: "Workflow" },
  { href: "/download", label: "Download" },
  { href: "/policy", label: "Policy" },
];
