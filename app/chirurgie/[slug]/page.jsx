
import { Suspense } from "react";
import { notFound } from "next/navigation";

import TopBar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { specialites } from "../../data/specialites";
import SpecialiteContent from "./SpecialiteContent";

import "./Specialite.css";

export function generateStaticParams() {
  return Object.keys(specialites).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const specialite = specialites[slug];

  if (!specialite) {
    return {
      title: "Spécialité médicale | Glomed Group",
    };
  }

  const data = specialite.fr || specialite;

  return {
    title: `${data.title || slug} | Glomed Group`,
    description:
      data.description ||
      "Découvrez nos spécialités médicales chez Glomed Group en Tunisie.",
  };
}

// Composant asynchrone : récupération du slug
async function SpecialitePageContent({ params }) {
  const { slug } = await params;
  const specialite = specialites[slug];

  if (!specialite) {
    notFound();
  }

  return <SpecialiteContent specialite={specialite} />;
}

// Page principale
export default function SpecialitePage({ params }) {
  return (
    <>
      <TopBar />
      <Navbar />

      <Suspense fallback={<div className="specialite-loading">Chargement...</div>}>
        <SpecialitePageContent params={params} />
      </Suspense>

      <Footer />
    </>
  );
}
