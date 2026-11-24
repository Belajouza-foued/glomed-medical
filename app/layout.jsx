
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import StructuredData from "./components/StructuredData" 
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://glomed-medical.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Glomed Group | Tourisme médical en Tunisie",
    template: "%s | Glomed Group",
  },

  description:
    "Glomed Group organise votre séjour médical en Tunisie : consultations spécialisées, chirurgie, examens médicaux, hébergement et transferts.",

  keywords: [
    "Glomed Group",
    "tourisme médical Tunisie",
    "séjour médical en Tunisie",
    "agence de tourisme médical",
    "soins médicaux Tunisie",
    "chirurgie en Tunisie",
    "cliniques en Tunisie",
    "orthopédie Tunisie",
    "cardiologie Tunisie",
    "oncologie Tunisie",
    "medical tourism Tunisia",
    "medical travel Tunisia",
    "healthcare Tunisia",
  ],

  authors: [{ name: "Glomed Group" }],
  creator: "Glomed Group",
  publisher: "Glomed Group",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "/",
    siteName: "Glomed Group",
    title: "Glomed Group | Tourisme médical en Tunisie",
    description:
      "Votre accompagnement médical en Tunisie : consultations, interventions, hébergement et transferts avec Glomed Group.",
    images: [
      {
        url: "/assets/logo/logo-glomed-vert-jaune.png",
        alt: "Glomed Group - Tourisme médical en Tunisie",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Glomed Group | Tourisme médical en Tunisie",
    description:
      "Organisez votre séjour médical en Tunisie avec Glomed Group.",
    images: ["/assets/logo/logo-glomed-vert-jaune.png"],
  },

  alternates: {
    canonical: "/",
  },

  category: "Medical Tourism",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      dir="ltr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
