"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/Contact.css";

const translations = {
  fr: {
    eyebrow: "CONTACTEZ-NOUS",
    title: "Votre santé,",
    accent: "notre priorité.",
    description:
      "Vous envisagez un séjour médical en Tunisie ? Notre équipe vous accompagne dans l’organisation de votre parcours, avec écoute, professionnalisme et attention.",
    trust: "Un accompagnement personnalisé",
    formTitle: "Votre parcours de santé",
    formDescription:
      "Remplissez ce formulaire. Notre équipe vous contactera prochainement.",
    firstName: "Prénom *",
    firstNamePh: "Votre prénom",
    lastName: "Nom *",
    lastNamePh: "Votre nom",
    email: "Adresse e-mail *",
    phone: "Téléphone / WhatsApp *",
    message: "Votre message *",
    messagePlaceholder: "Comment pouvons-nous vous accompagner ?",
    consent:
      "J’accepte l’utilisation de mes coordonnées pour recevoir une réponse à ma demande et j’ai pris connaissance de la politique de confidentialité. *",
    submit: "Envoyer ma demande",
    sending: "Envoi en cours...",
    success:
      "Votre demande a bien été envoyée. Notre équipe vous contactera prochainement.",
    error:
      "L’envoi a échoué. Veuillez réessayer ou nous contacter directement.",
    note:
      "Vos informations sont utilisées pour traiter votre demande. N’envoyez pas de documents médicaux confidentiels via ce formulaire.",
    validation:
      "Veuillez vérifier les champs obligatoires et accepter la politique de confidentialité.",
    footerCaption: "GESTION DES SERVICES MÉDICAUX · TUNISIE",
  },

  en: {
    eyebrow: "CONTACT US",
    title: "Your health,",
    accent: "our priority.",
    description:
      "Planning a medical stay in Tunisia? Our team will help you organize your journey with care, professionalism and personal attention.",
    trust: "Personalized assistance",
    formTitle: "Tell us about your project",
    formDescription:
      "Complete this form and our team will contact you soon.",
    firstName: "First name *",
    firstNamePh: "Your first name",
    lastName: "Last name *",
    lastNamePh: "Your last name",
    email: "Email address *",
    phone: "Phone / WhatsApp *",
    message: "Your message *",
    messagePlaceholder: "How can we assist you?",
    consent:
      "I agree that my contact details may be used to respond to my request, and I have read the privacy policy. *",
    submit: "Send my request",
    sending: "Sending...",
    success:
      "Your request has been sent successfully. Our team will contact you soon.",
    error:
      "Your request could not be sent. Please try again or contact us directly.",
    note:
      "Your information is used to process your request. Do not send confidential medical documents through this form.",
    validation:
      "Please check all required fields and accept the privacy policy.",
    footerCaption: "MEDICAL SERVICES MANAGEMENT · TUNISIA",
  },

  ar: {
    eyebrow: "اتصل بنا",
    title: "صحتكم،",
    accent: "أولويتنا.",
    description:
      "هل تفكرون في تنظيم رحلة علاجية إلى تونس؟ يرافقكم فريقنا في تنظيم رحلتكم بكل اهتمام واحترافية وعناية.",
    trust: "مرافقة شخصية تناسب احتياجاتكم",
    formTitle: "رحلتكم العلاجية",
    formDescription:
      "يرجى ملء هذا النموذج، وسيتواصل معكم فريقنا في أقرب وقت.",
    firstName: "الاسم الشخصي *",
    firstNamePh: "أدخل اسمك الشخصي",
    lastName: "اسم العائلة *",
    lastNamePh: "أدخل اسم العائلة",
    email: "البريد الإلكتروني *",
    phone: "الهاتف / واتساب *",
    message: "رسالتكم *",
    messagePlaceholder: "كيف يمكننا مساعدتكم؟",
    consent:
      "أوافق على استخدام بيانات الاتصال الخاصة بي للرد على طلبي، وأؤكد اطلاعي على سياسة الخصوصية. *",
    submit: "إرسال طلبي",
    sending: "جارٍ الإرسال...",
    success:
      "تم إرسال طلبكم بنجاح. سيتواصل معكم فريقنا قريباً.",
    error:
      "تعذر إرسال طلبكم. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.",
    note:
      "تُستخدم معلوماتكم لمعالجة طلبكم. يرجى عدم إرسال وثائق طبية سرية عبر هذا النموذج.",
    validation:
      "يرجى التحقق من جميع الحقول المطلوبة والموافقة على سياسة الخصوصية.",
    footerCaption: "إدارة الخدمات الطبية · تونس",
  },
};

export default function Contact() {
  const { language, dir } = useLanguage();

  const t = translations[language] || translations.fr;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("validation");
      return;
    }

    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      language,
    };

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="glomed-contact"
      id="contact"
      dir={dir}
    >
      <div className="glomed-contact-main">

        {/* COLONNE GAUCHE : IMAGE ET PRÉSENTATION */}
        <div className="glomed-contact-intro">
          <div className="glomed-contact-intro-overlay" />

          <div className="glomed-contact-intro-content">

            <div className="glomed-contact-top">
              <span className="glomed-contact-eyebrow">
                {t.eyebrow}
              </span>

              <span className="glomed-contact-small-line" />
            </div>

            <div className="glomed-contact-main-copy">
              <h1>
                {t.title}
                <span>{t.accent}</span>
              </h1>

              <p className="glomed-contact-description">
                {t.description}
              </p>

              <div className="glomed-contact-trust">
                <span className="glomed-contact-trust-icon">
                  <i className="bi bi-check2" aria-hidden="true" />
                </span>

                <span>{t.trust}</span>
              </div>
            </div>

            <div className="glomed-contact-image-footer">
              <span className="glomed-contact-image-line" />

              <span>GLOMED GROUP</span>

              <span className="glomed-contact-footer-caption">
                {t.footerCaption}
              </span>
            </div>

          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE */}
        <div className="glomed-contact-form-panel">

          <div className="glomed-contact-form-heading">
            <span className="glomed-contact-section-label">
              GLOMED GROUP
            </span>

            <h2>{t.formTitle}</h2>

            <p>{t.formDescription}</p>
          </div>

          <form
            className="glomed-contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="glomed-contact-grid">

              <div className="glomed-field">
                <label htmlFor="contact-firstName">
                  {t.firstName}
                </label>

                <input
                  id="contact-firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder={t.firstNamePh}
                  required
                />
              </div>

              <div className="glomed-field">
                <label htmlFor="contact-lastName">
                  {t.lastName}
                </label>

                <input
                  id="contact-lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder={t.lastNamePh}
                  required
                />
              </div>

              <div className="glomed-field">
                <label htmlFor="contact-email">
                  {t.email}
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="exemple@email.com"
                  required
                />
              </div>

              <div className="glomed-field">
                <label htmlFor="contact-phone">
                  {t.phone}
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+216 ..."
                  required
                />
              </div>

              <div className="glomed-field glomed-field-full">
                <label htmlFor="contact-message">
                  {t.message}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder={t.messagePlaceholder}
                  required
                />
              </div>

            </div>

            <label className="glomed-consent">
              <input
                type="checkbox"
                name="consent"
                required
              />

              <span>{t.consent}</span>
            </label>

            <p className="glomed-contact-note">
              {t.note}
            </p>

            {status === "validation" && (
              <p className="glomed-form-status error" role="alert">
                {t.validation}
              </p>
            )}

            {status === "success" && (
              <p className="glomed-form-status success" role="status">
                {t.success}
              </p>
            )}

            {status === "error" && (
              <p className="glomed-form-status error" role="alert">
                {t.error}
              </p>
            )}

            <button
              type="submit"
              className="glomed-contact-submit"
              disabled={loading}
            >
              {loading ? t.sending : t.submit}

              {!loading && (
                <span aria-hidden="true"> →</span>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}