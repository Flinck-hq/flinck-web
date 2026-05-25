export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  readMinutes: number;
  coverImage?: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-flinck",
    title: "What Is Flinck? The Agricultural Social Marketplace Explained",
    description:
      "How Flinck connects farmers, buyers, businesses, banks, government, and sponsors in one trusted ag network.",
    publishedAt: "2026-03-01",
    author: "Flinck Team",
    category: "Product",
    readMinutes: 6,
    coverImage: "/farmer-lifestyle.png",
    body: [
      "Flinck is an agricultural social marketplace built for everyone in the value chain—not only farmers. It combines community, commerce, and trust so produce can move from field to buyer with less friction and more transparency.",
      "Farmers use Flinck to share updates, list harvests, access weather guidance, and build a verified reputation. Buyers and consumers discover produce, negotiate in-app, and coordinate logistics. Businesses and manufacturers source at scale with clearer supplier identity.",
      "Banks and fintech sponsors can lean on verified profiles and trade signals for smarter lending and payment flows. Government and development programs gain better visibility into regional supply. Agricultural sponsors see deal flow grounded in real marketplace activity.",
      "Unlike a single-purpose farm app, Flinck is designed as a network: social discovery plus marketplace execution plus sponsored trust layers that grow with each successful trade.",
    ],
  },
  {
    slug: "building-trust-in-ag-trade",
    title: "Why Verification Matters in Agricultural Marketplaces",
    description:
      "Trust tiers, reputation, and secure negotiation reduce risk for farmers, buyers, and ecosystem sponsors.",
    publishedAt: "2026-03-10",
    author: "Flinck Team",
    category: "Trust",
    readMinutes: 5,
    coverImage: "/trust-badge.png",
    body: [
      "Agricultural trade still relies heavily on informal relationships. That works until scale, distance, or regulation enters the picture. Flinck addresses this with verified identities, trade history, and in-app negotiation tied to real listings.",
      "For farmers, verification unlocks better placement and buyer confidence. For institutional buyers, it means fewer unknown counterparties. For banks and government programs, it supports audit-friendly records without replacing your existing systems on day one.",
      "Trust on Flinck is progressive: start with basic listings, complete verification when you are ready, and grow reputation through completed trades and community engagement.",
    ],
  },
  {
    slug: "sponsorships-banks-government-investors",
    title: "Sponsoring Flinck: Banks, Government, and Ag Ecosystem",
    description:
      "How institutions plug into Flinck for procurement visibility, program reach, and investment intelligence via sponsorships.",
    publishedAt: "2026-03-18",
    author: "Flinck Team",
    category: "Sponsors",
    readMinutes: 7,
    coverImage: "/marketplace-vibe.png",
    body: [
      "Flinck is building sponsorship lanes for organizations that need agricultural market infrastructure—not another disconnected pilot app.",
      "Banks and fintech teams can explore wallet flows, KYC-aligned profiles, and trade-backed signals. Government and NGO sponsors can improve last-mile program delivery and traceability. Agribusiness sponsors and cooperatives can monitor regional activity and supplier quality.",
      "If you represent a bank, ministry, development agency, or ag investment fund, reach out through our Sponsors page. We will align on data scope, compliance, and rollout geography before any sponsorship begins.",
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
