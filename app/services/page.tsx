
import Services from "../components/Services";
import AboutCards from "../components/AboutCards"
import ServicesIntro from "../components/ServicesIntro"
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
export const metadata = {
  title: "Nos services médicaux | Glomed Group",
  description:
    "Découvrez les services d'accompagnement médical de Glomed Group en Tunisie : coordination des rendez-vous, organisation du séjour, hébergement et transferts.",
};

export default function ServicesPage() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <main className="glomed-services-page">
            {/* Présentation générale des services */}
         <ServicesIntro/>
      <Services />
      <AboutCards/>
      </main>
    <Footer/>
    </>
  );
}
