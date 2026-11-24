
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://glomed-medical.vercel.app";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Glomed Group",
    url: siteUrl,
    logo: `${siteUrl}/assets/logo/logo-glomed-vert-jaune.png`,
    description:
      "Glomed Group accompagne les patients internationaux dans l'organisation de leur séjour médical en Tunisie.",
    email: "groupglomed@gmail.com",
    telephone: "+216 93 767 950",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+216 93 767 950",
      contactType: "customer service",
      availableLanguage: [
        "French",
        "English",
        "Arabic",
        "Italian",
        "German",
        "Spanish",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Tunisia",
    },
    knowsAbout: [
      "Medical tourism",
      "Orthopedics",
      "Cardiology",
      "Pneumology",
      "Urology",
      "Oncology",
      "Hematology",
      "General surgery",
      "Vascular surgery",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
