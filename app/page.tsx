import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Topbar from "./components/Topbar"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
const services = [
  {
    number: "01",
    title: "Chirurgie esthétique",
    text: "Un accompagnement personnalisé pour organiser votre parcours avec des professionnels partenaires.",
    tag: "Esthétique & chirurgie",
  },
  {
    number: "02",
    title: "Greffe de cheveux",
    text: "Nous vous aidons à organiser vos rendez-vous et votre séjour en Tunisie.",
    tag: "Capillaire",
  },
  {
    number: "03",
    title: "Médecine esthétique",
    text: "Découvrez les possibilités de soins et bénéficiez d'une orientation adaptée à votre demande.",
    tag: "Soins esthétiques",
  },
  {
    number: "04",
    title: "Autres spécialités",
    text: "Une demande médicale spécifique ? Contactez-nous pour étudier les possibilités d'accompagnement.",
    tag: "Votre projet santé",
  },
];

const steps = [
  {
    number: "01",
    title: "Parlez-nous de votre projet",
    text: "Expliquez-nous votre besoin grâce à notre formulaire de contact.",
  },
  {
    number: "02",
    title: "Préparons votre séjour",
    text: "Nous vous accompagnons dans l'organisation et la coordination des étapes.",
  },
  {
    number: "03",
    title: "Voyagez sereinement",
    text: "Anticipez les transferts, l'hébergement et les rendez-vous prévus avec vos partenaires.",
  },
];

export default function Home() {
  return (
    <>
    <Topbar/>
    <Navbar />
    <main>
         <Hero/>
      <Services/>
      <Gallery/>
      <About/>
      <Testimonials/>
           <Contact/>
     

       
    </main>
    <Footer />
    </>
  );
}
