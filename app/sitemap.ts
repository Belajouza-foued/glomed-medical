
import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const specialties = [
  "orthopedie",
  "cardiologie",
  "pneumologie",
  "urologie",
  "pediatrie",
  "gastro-enterologie",
  "ophtalmologie",
  "gynecologie",
  "oncologie",
  "hematologie",
  "orl",
  "chirurgieGenerale",
  "chirurgieVasculaire",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      url: baseUrl,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
  ];

  const specialtyPages = specialties.map((slug) => ({
    url: `${baseUrl}/chirurgie/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...specialtyPages].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}
