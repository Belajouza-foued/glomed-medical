import Link from "next/link";
import About from "../components/About";
import AboutCards from "../components/AboutCards";
import DoctorsAbroad from "../components/DoctorsAbroad"
import "./about-page.css";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroProject from "../components/IntroProject"
import AboutStory from "../components/AboutStory";
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
      <AboutStory/>

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