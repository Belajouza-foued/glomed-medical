import Link from "next/link";
import About from "../components/About";
import AboutCards from "../components/AboutCards";
import DoctorsAbroad from "../components/DoctorsAbroad"
import "./about-page.css";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroProject from "../components/IntroProject"
export const metadata = {
  title: "À propos | Glomed Group",
  description:
    "Glomed Group est une agence de gestion et de coordination des services liés au séjour médical en Tunisie. Découvrez notre mission, nos valeurs et nos engagements.",
};

export default function AboutPage() {
  return (
    <>
    <Topbar/>
      <Navbar/>
    <main className="apage">
      {/* HERO */}
      <section className="apage-hero">
        <div className="apage-container apage-hero-content">
          <nav className="apage-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">À propos</span>
          </nav>

          <p className="apage-eyebrow">GLOMED GROUP · À PROPOS</p>

          <h1>
            Une équipe à l’écoute
            <span> de votre soin médical.</span>
          </h1>

          <p className="apage-hero-text">
            Découvrez qui nous sommes, ce qui guide notre travail et la façon
            dont nous vous accompagnons avant, pendant et après votre séjour en
            Tunisie.
          </p>
        </div>
      </section>

      {/* TON COMPOSANT ABOUT (image + accordéon) */}
      <About />
      <DoctorsAbroad/>

      {/* SERVICES GLOMED EN CARTES AVEC IMAGES */}
      <AboutCards />
      {/* APPEL À L'ACTION */}
      <IntroProject/>
    </main>
    <Footer/>
    </>
  );
}