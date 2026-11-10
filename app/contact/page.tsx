import Contact from "../components/Contact";
import "./contact-page.css";
import Navbar from "../components/Navbar";
import ContactSteps from "../components/ContactSteps"
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ContactInfos from "../components/ContactInfos";
export const metadata = {
  title: "Contact | Glomed Group",
  description:
    "Contactez Glomed Group pour organiser votre séjour médical en Tunisie. Notre équipe vous répond et vous accompagne dans les prochaines étapes.",
};

const INFOS = [
  { icon: "bi bi-telephone", label: "Téléphone", value: "+216 93 767 950", href: "tel:+21693767950" },
  { icon: "bi bi-whatsapp", label: "WhatsApp", value: "Écrire sur WhatsApp", href: "https://wa.me/21693767950", external: true },
  { icon: "bi bi-envelope", label: "E-mail", value: "contact@glomed-group.com", href: "mailto:contact@glomed-group.com" },
  { icon: "bi bi-geo-alt", label: "Adresse", value: "Tunis, Tunisie" },
];

const STEPS = [
  { number: "01", title: "Vous nous écrivez", text: "Décrivez votre projet et laissez-nous vos coordonnées." },
  { number: "02", title: "Nous vous répondons", text: "Notre équipe étudie votre demande et vous recontacte." },
  { number: "03", title: "Nous organisons", text: "Après confirmation par l’établissement, nous coordonnons votre séjour." },
];

export default function ContactPage() {
  return (
    <>
     <Topbar/>
        <Navbar/>
    <main className="cpage">
     <ContactInfos/>
      {/* Formulaire (ton composant) */}
      <Contact />
      {/* Coordonnées directes */}
      

      {/* Et ensuite ? */}
      <ContactSteps/>
    </main>
     <Footer/>
    </>
  );
}