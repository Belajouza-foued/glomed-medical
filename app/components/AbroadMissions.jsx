"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/AbroadMissions.css";

const COUNTRIES = ["LY"  , "CH", "AT"];

const ACTION_ICONS = ["bi bi-clipboard2-pulse", "bi bi-chat-heart", "bi bi-hospital"];
const STEP_ICONS = ["bi bi-file-earmark-medical", "bi bi-people", "bi bi-airplane", "bi bi-heart-pulse"];

const translations = {
  fr: {
    label: "MISSIONS MÉDICALES À L’ÉTRANGER",
    title: "Nos médecins se déplacent",
    accent: "auprès de vos patients.",
    text: "Glomed Group ne fait pas venir les patients uniquement en Tunisie : nous envoyons aussi des médecins tunisiens examiner, consulter et opérer en Libye et dans d’autres pays.",
    actions: [
      { title: "Examiner", text: "Examens cliniques et bilans sur place, en lien avec les établissements d’accueil." },
      { title: "Consulter", text: "Consultations spécialisées au plus près des patients, sans long déplacement." },
      { title: "Opérer", text: "Interventions dans les établissements partenaires, de la préparation au suivi." },
    ],
    stepsLabel: "COMMENT SE DÉROULE UNE MISSION",
    stepsTitle: "Une mission, étape par étape",
    steps: [
      { title: "Étude de la demande", text: "Nous analysons les besoins du pays ou de l’établissement demandeur et les soins à prévoir." },
      { title: "Constitution de l’équipe", text: "Une équipe médicale est composée selon la mission, avec des professionnels adaptés à la demande." },
      { title: "Organisation du déplacement", text: "Voyage, accueil, hébergement et coordination avec l’établissement d’accueil sont préparés en amont." },
      { title: "Soins sur place et suivi", text: "Examens, consultations et interventions sont réalisés sur place, puis un suivi est organisé avec l’établissement." },
    ],
    privacy:
      "Pour des raisons de confidentialité, l’identité et les spécialités des médecins ne sont communiquées qu’aux personnes concernées, sur demande.",
    countriesTitle: "Pays d’intervention",
    moreCountries: "et d’autres pays",
    cta: "Demander une mission",
    disclaimer:
      "Les examens, consultations et interventions sont réalisés par des professionnels de santé, selon leur évaluation, la réglementation locale et la disponibilité des établissements d’accueil.",
  },

  en: {
    label: "MEDICAL MISSIONS ABROAD",
    title: "Our doctors travel",
    accent: "to your patients.",
    text: "Glomed Group doesn’t only bring patients to Tunisia: we also send Tunisian doctors to examine, consult and operate in Libya and other countries.",
    actions: [
      { title: "Examine", text: "Clinical examinations and check-ups on site, in coordination with the host facilities." },
      { title: "Consult", text: "Specialist consultations close to patients, without long journeys." },
      { title: "Operate", text: "Procedures in partner facilities, from preparation to follow-up." },
    ],
    stepsLabel: "HOW A MISSION WORKS",
    stepsTitle: "A mission, step by step",
    steps: [
      { title: "Reviewing the request", text: "We analyze the needs of the requesting country or facility and the care to be planned." },
      { title: "Building the team", text: "A medical team is put together for each mission, with professionals suited to the request." },
      { title: "Organizing the trip", text: "Travel, reception, accommodation and coordination with the host facility are prepared in advance." },
      { title: "Care on site and follow-up", text: "Examinations, consultations and procedures are carried out on site, followed by follow-up arranged with the facility." },
    ],
    privacy:
      "For confidentiality reasons, the identity and specialties of the doctors are shared only with the people concerned, on request.",
    countriesTitle: "Countries of operation",
    moreCountries: "and other countries",
    cta: "Request a mission",
    disclaimer:
      "Examinations, consultations and procedures are carried out by healthcare professionals, according to their assessment, local regulations and the availability of the host facilities.",
  },

  ar: {
    label: "بعثات طبية إلى الخارج",
    title: "أطباؤنا يسافرون",
    accent: "إلى مرضاكم.",
    text: "لا تكتفي ڨلوميد ڨروب بجلب المرضى إلى تونس: بل نرسل أيضاً أطباء تونسيين للفحص والاستشارة وإجراء العمليات في ليبيا وبلدان أخرى.",
    actions: [
      { title: "الفحص", text: "فحوص سريرية وتقييمات في عين المكان، بالتنسيق مع المؤسسات المستقبِلة." },
      { title: "الاستشارة", text: "استشارات متخصصة قرب المرضى، دون الحاجة إلى سفر طويل." },
      { title: "العمليات", text: "تدخلات في المؤسسات الشريكة، من التحضير إلى المتابعة." },
    ],
    stepsLabel: "كيف تتم البعثة",
    stepsTitle: "بعثة طبية، خطوة بخطوة",
    steps: [
      { title: "دراسة الطلب", text: "ندرس احتياجات البلد أو المؤسسة الطالبة والرعاية الواجب التخطيط لها." },
      { title: "تكوين الفريق", text: "يُكوَّن فريق طبي بحسب البعثة، من مهنيين يناسبون الطلب." },
      { title: "تنظيم السفر", text: "يتم التحضير مسبقاً للسفر والاستقبال والإقامة والتنسيق مع المؤسسة المستقبِلة." },
      { title: "الرعاية في عين المكان والمتابعة", text: "تُجرى الفحوص والاستشارات والتدخلات في عين المكان، ثم تُنظَّم المتابعة مع المؤسسة." },
    ],
    privacy:
      "لأسباب تتعلق بالسرية، لا تُقدَّم هوية الأطباء وتخصصاتهم إلا للأشخاص المعنيين، عند الطلب.",
    countriesTitle: "بلدان التدخل",
    moreCountries: "وبلدان أخرى",
    cta: "اطلب بعثة طبية",
    disclaimer:
      "تُجرى الفحوص والاستشارات والتدخلات من قبل مهنيين صحيين، بحسب تقييمهم والتشريعات المحلية وتوفر المؤسسات المستقبِلة.",
  },
it: {
  label: "MISSIONI MEDICHE ALL'ESTERO",
  title: "I nostri medici viaggiano",
  accent: "per raggiungere i vostri pazienti.",
  text: "Glomed Group non si limita ad accompagnare i pazienti in Tunisia: inviamo anche medici tunisini in Libia e in altri Paesi per effettuare visite, fornire consulenze e realizzare interventi chirurgici.",
  actions: [
    { title: "Visitare", text: "Visite cliniche e check-up sul posto, in collaborazione con le strutture sanitarie ospitanti." },
    { title: "Consigliare", text: "Consulenze specialistiche vicino ai pazienti, senza lunghi spostamenti." },
    { title: "Operare", text: "Interventi chirurgici presso strutture partner, dalla preparazione al follow-up postoperatorio." },
  ],
  stepsLabel: "COME SI SVOLGE UNA MISSIONE",
  stepsTitle: "Una missione, passo dopo passo",
  steps: [
    { title: "Esame della richiesta", text: "Analizziamo le esigenze del Paese o della struttura richiedente e il tipo di assistenza previsto." },
    { title: "Composizione dell'équipe", text: "Per ogni missione viene costituita un'équipe medica con professionisti adeguati alle esigenze." },
    { title: "Organizzazione del viaggio", text: "Il viaggio, l'accoglienza, l'alloggio e il coordinamento con la struttura ospitante vengono preparati in anticipo." },
    { title: "Assistenza sul posto e follow-up", text: "Visite, consulenze e interventi vengono effettuati sul posto; successivamente, il follow-up viene coordinato con la struttura." },
  ],
  privacy:
    "Per motivi di riservatezza, l'identità dei medici e le loro specializzazioni vengono comunicate esclusivamente alle persone interessate, su richiesta.",
  countriesTitle: "Paesi di intervento",
  moreCountries: "e altri Paesi",
  cta: "Richiedi una missione",
  disclaimer:
    "Visite, consulenze e interventi vengono effettuati da professionisti sanitari, in base alla loro valutazione, alle normative locali e alla disponibilità delle strutture ospitanti.",
},
  de: {
    label: "MEDIZINISCHE EINSÄTZE IM AUSLAND",
    title: "Unsere Ärzte reisen",
    accent: "zu Ihren Patienten.",
    text: "Glomed Group bringt Patienten nicht nur nach Tunesien: Wir entsenden auch tunesische Ärzte, die in Libyen und in weiteren Ländern untersuchen, beraten und operieren.",
    actions: [
      { title: "Untersuchen", text: "Klinische Untersuchungen und Check-ups vor Ort, in Zusammenarbeit mit den aufnehmenden Einrichtungen." },
      { title: "Beraten", text: "Fachärztliche Sprechstunden in der Nähe der Patienten – ohne lange Reise." },
      { title: "Operieren", text: "Eingriffe in Partnereinrichtungen, von der Vorbereitung bis zur Nachsorge." },
    ],
    stepsLabel: "SO LÄUFT EIN EINSATZ AB",
    stepsTitle: "Ein Einsatz, Schritt für Schritt",
    steps: [
      { title: "Prüfung der Anfrage", text: "Wir analysieren den Bedarf des anfragenden Landes oder der Einrichtung und die vorgesehene Versorgung." },
      { title: "Zusammenstellung des Teams", text: "Für jeden Einsatz wird ein medizinisches Team mit passenden Fachkräften zusammengestellt." },
      { title: "Organisation der Reise", text: "Anreise, Empfang, Unterkunft und Abstimmung mit der aufnehmenden Einrichtung werden im Voraus vorbereitet." },
      { title: "Versorgung vor Ort und Nachsorge", text: "Untersuchungen, Beratungen und Eingriffe finden vor Ort statt; anschließend wird die Nachsorge mit der Einrichtung abgestimmt." },
    ],
    privacy:
      "Aus Gründen der Vertraulichkeit werden Identität und Fachgebiete der Ärzte nur den betroffenen Personen auf Anfrage mitgeteilt.",
    countriesTitle: "Einsatzländer",
    moreCountries: "und weitere Länder",
    cta: "Einsatz anfragen",
    disclaimer:
      "Untersuchungen, Beratungen und Eingriffe werden von medizinischen Fachkräften durchgeführt – nach deren Beurteilung, den örtlichen Vorschriften und der Verfügbarkeit der aufnehmenden Einrichtungen.",
  },

es: {
  label: "MISIONES MÉDICAS EN EL EXTRANJERO",
  title: "Nuestros médicos se desplazan",
  accent: "para atender a sus pacientes.",
  text: "Glomed Group no solo facilita la llegada de pacientes a Túnez: también envía médicos tunecinos para realizar exámenes, consultas e intervenciones quirúrgicas en Libia y otros países.",
  actions: [
    { title: "Examinar", text: "Exámenes clínicos y evaluaciones médicas en el lugar, en coordinación con los centros sanitarios de acogida." },
    { title: "Consultar", text: "Consultas especializadas cerca de los pacientes, sin necesidad de realizar largos desplazamientos." },
    { title: "Operar", text: "Intervenciones en centros sanitarios asociados, desde la preparación hasta el seguimiento." },
  ],
  stepsLabel: "CÓMO SE DESARROLLA UNA MISIÓN",
  stepsTitle: "Una misión, paso a paso",
  steps: [
    { title: "Estudio de la solicitud", text: "Analizamos las necesidades del país o del centro solicitante y los servicios médicos que deben organizarse." },
    { title: "Formación del equipo", text: "Se constituye un equipo médico en función de la misión, con profesionales adecuados a las necesidades planteadas." },
    { title: "Organización del desplazamiento", text: "El viaje, la recepción, el alojamiento y la coordinación con el centro de acogida se preparan con antelación." },
    { title: "Atención médica en el lugar y seguimiento", text: "Los exámenes, las consultas y las intervenciones se realizan en el lugar, y posteriormente se organiza el seguimiento con el centro sanitario." },
  ],
  privacy:
    "Por motivos de confidencialidad, la identidad y las especialidades de los médicos solo se comunican a las personas interesadas, previa solicitud.",
  countriesTitle: "Países donde intervenimos",
  moreCountries: "y otros países",
  cta: "Solicitar una misión",
  disclaimer:
    "Los exámenes, las consultas y las intervenciones son realizados por profesionales sanitarios, según su evaluación, la normativa local y la disponibilidad de los centros de acogida.",
},



};

const flag = (code) => `https://flagcdn.com/w80/${code.toLowerCase()}.png`;

export default function AbroadMissions() {
  const { language } = useLanguage();
  const code = String(language || "fr").toLowerCase().slice(0, 2);
  const t = translations[code] || translations.fr;
  const rtl = code === "ar";

  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  // Noms de pays traduits automatiquement (fr, en, ar, de…)
  const countryName = useMemo(() => {
    try {
      const names = new Intl.DisplayNames([code], { type: "region" });
      return (c) => names.of(c) || c;
    } catch {
      return (c) => c;
    }
  }, [code]);

  useEffect(() => {
    setReady(true);
    const node = sectionRef.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="missions-etranger"
      ref={sectionRef}
      dir={rtl ? "rtl" : undefined}
      className={`gmiss ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="gmiss-container">
        {/* ===== TITRE ===== */}
        <div className="gmiss-banner">
          <header className="gmiss-head">
            <span className="gmiss-label">{t.label}</span>
            <h2>
              {t.title} <span>{t.accent}</span>
            </h2>
            <p>{t.text}</p>
          </header>
        </div>

        {/* ===== EXAMINER / CONSULTER / OPÉRER ===== */}
        <ul className="gmiss-actions">
          {t.actions.map((action, i) => (
            <li className="gmiss-action" key={action.title} style={{ "--i": i }}>
              <span className="gmiss-action-icon">
                <i className={ACTION_ICONS[i]} aria-hidden="true" />
              </span>
              <div>
                <h3>{action.title}</h3>
                <p>{action.text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ===== DÉROULEMENT D'UNE MISSION (descriptions, aucune donnée personnelle) ===== */}
        <div className="gmiss-steps-head">
          <span className="gmiss-label">{t.stepsLabel}</span>
          <h3>{t.stepsTitle}</h3>
        </div>

        <ol className="gmiss-steps">
          {t.steps.map((step, i) => (
            <li className="gmiss-step" key={step.title} style={{ "--i": i }}>
              <div className="gmiss-step-top">
                <span className="gmiss-step-icon">
                  <i className={STEP_ICONS[i]} aria-hidden="true" />
                </span>
                <span className="gmiss-step-number">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="gmiss-step-body">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="gmiss-privacy">
          <i className="bi bi-shield-lock" aria-hidden="true" />
          <span>{t.privacy}</span>
        </p>

        {/* ===== PAYS ===== */}
        <div className="gmiss-countries">
          <p className="gmiss-countries-title">{t.countriesTitle}</p>
          <ul>
            {COUNTRIES.map((c) => (
              <li key={c}>
                <img src={flag(c)} alt="" width="32" height="22" loading="lazy" />
                {countryName(c)}
              </li>
            ))}
            <li className="gmiss-more">
              <i className="bi bi-globe2" aria-hidden="true" />
              {t.moreCountries}
            </li>
          </ul>
        </div>

        {/* ===== BAS ===== */}
        <div className="gmiss-footer">
          <p className="gmiss-disclaimer">{t.disclaimer}</p>
          <Link href="/contact" className="gmiss-button">
            {t.cta}
            <i className={`bi ${rtl ? "bi-arrow-left" : "bi-arrow-right"}`} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}