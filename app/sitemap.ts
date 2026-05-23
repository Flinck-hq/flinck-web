import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import {
  SITE_URL,
  getAllAudienceSlugs,
  navLinks,
} from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/download`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...navLinks
      .filter(
        (link) =>
          !["/how-it-works", "/blog", "/partners", "/download", "/policy"].includes(
            link.href,
          ),
      )
      .map((link) => ({
        url: `${SITE_URL}${link.href}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
  ];

  const audienceRoutes: MetadataRoute.Sitemap = getAllAudienceSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/for/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...audienceRoutes, ...blogRoutes];
}
