"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/MedicalImaging.css";

/*
  Partie non traduite de chaque examen : icône et type d'examen.
  Les textes sont dans `translations`, dans le MÊME ORDRE.
  type : "none" = sans irradiation | "xray" = rayons X | "nuclear" = médecine nucléaire
  Icônes : Bootstrap Icons (bi bi-...). Change-les ici si tu préfères d'autres icônes.
*/
const EXAMS = [
  { icon: "bi bi-vinyl", type: "xray" },             // Scanner (TDM)
  { icon: "bi bi-magnet", type: "none" },            // IRM
  { icon: "bi bi-radioactive", type: "xray" },       // Radiographie standard
  { icon: "bi bi-soundwave", type: "none" },         // Échographie
  { icon: "bi bi-droplet-half", type: "none" },      // Doppler
  { icon: "bi bi-gender-female", type: "xray" },     // Mammographie
  { icon: "bi bi-brightness-high", type: "nuclear" },// Scintigraphie / TEP
  { icon: "bi bi-bounding-box", type: "xray" },      // Ostéodensitométrie
  { icon: "bi bi-emoji-smile", type: "xray" },       // Radiographie dentaire
];

const translations = {
  fr: {
    label: "IMAGERIE MÉDICALE",
    title: "Tous vos examens d’imagerie,",
    accent: "organisés pour vous.",
    text: "Scanner, IRM, radiologie, échographie… Glomed Group coordonne vos examens d’imagerie auprès de centres partenaires, sur prescription du médecin.",
    filters: { all: "Tous", none: "Sans irradiation", xray: "Rayons X", nuclear: "Médecine nucléaire" },
    types: { none: "Sans irradiation", xray: "Rayons X", nuclear: "Médecine nucléaire" },
    exams: [
      { title: "Scanner (TDM)", text: "Images en coupes très précises grâce aux rayons X. Rapide, il est souvent utilisé en urgence.", uses: ["Thorax", "Abdomen", "Cerveau"] },
      { title: "IRM", text: "Images détaillées obtenues avec un champ magnétique, sans rayons X.", uses: ["Cerveau", "Rachis", "Articulations"] },
      { title: "Radiologie standard", text: "La radiographie classique, pour visualiser les os, les poumons et les articulations.", uses: ["Fractures", "Poumons", "Articulations"] },
      { title: "Échographie", text: "Examen par ultrasons, sans irradiation, pour observer les organes en temps réel.", uses: ["Abdomen", "Cœur", "Grossesse"] },
      { title: "Doppler", text: "Étude de la circulation du sang dans les artères et les veines, par ultrasons.", uses: ["Artères", "Veines", "Jambes"] },
      { title: "Mammographie", text: "Radiographie des seins, utilisée notamment pour le dépistage.", uses: ["Dépistage", "Seins", "Suivi"] },
      { title: "Scintigraphie et TEP", text: "Examens utilisant un traceur radioactif pour étudier le fonctionnement des organes.", uses: ["Os", "Cœur", "Cancers"] },
      { title: "Ostéodensitométrie", text: "Mesure de la densité des os avec une faible dose de rayons X.", uses: ["Ostéoporose", "Os", "Suivi"] },
      { title: "Radiographie dentaire", text: "Images des dents et des mâchoires, utiles avant des soins ou des implants.", uses: ["Dents", "Mâchoires", "Implants"] },
    ],
    note: "L’examen adapté, sa préparation (jeûne, produit de contraste, etc.) et son interprétation sont déterminés par le médecin et le centre d’imagerie.",
    cta: "Organiser mes examens",
  },

  en: {
    label: "MEDICAL IMAGING",
    title: "All your imaging exams,",
    accent: "organized for you.",
    text: "CT scan, MRI, X-ray, ultrasound… Glomed Group coordinates your imaging exams with partner centers, on a doctor’s prescription.",
    filters: { all: "All", none: "No radiation", xray: "X-rays", nuclear: "Nuclear medicine" },
    types: { none: "No radiation", xray: "X-rays", nuclear: "Nuclear medicine" },
    exams: [
      { title: "CT scan", text: "Very precise cross-sectional images using X-rays. Fast, and often used in emergencies.", uses: ["Chest", "Abdomen", "Brain"] },
      { title: "MRI", text: "Detailed images produced with a magnetic field, without X-rays.", uses: ["Brain", "Spine", "Joints"] },
      { title: "Standard X-ray", text: "Classic radiography to view bones, lungs and joints.", uses: ["Fractures", "Lungs", "Joints"] },
      { title: "Ultrasound", text: "An ultrasound exam, without radiation, to watch organs in real time.", uses: ["Abdomen", "Heart", "Pregnancy"] },
      { title: "Doppler", text: "Ultrasound study of blood flow in the arteries and veins.", uses: ["Arteries", "Veins", "Legs"] },
      { title: "Mammography", text: "X-ray imaging of the breasts, used in particular for screening.", uses: ["Screening", "Breasts", "Follow-up"] },
      { title: "Scintigraphy and PET scan", text: "Exams using a radioactive tracer to study how organs work.", uses: ["Bones", "Heart", "Cancers"] },
      { title: "Bone densitometry", text: "Measures bone density using a low dose of X-rays.", uses: ["Osteoporosis", "Bones", "Follow-up"] },
      { title: "Dental X-ray", text: "Images of the teeth and jaws, useful before dental care or implants.", uses: ["Teeth", "Jaws", "Implants"] },
    ],
    note: "The appropriate exam, its preparation (fasting, contrast agent, etc.) and its interpretation are determined by the doctor and the imaging center.",
    cta: "Organize my exams",
  },

  ar: {
    label: "التصوير الطبي",
    title: "جميع فحوص التصوير الخاصة بكم،",
    accent: "منظمة من أجلكم.",
    text: "فحص مقطعي، رنين مغناطيسي، أشعة سينية، إيكوغرافي… تنسّق ڨلوميد ڨروب فحوص التصوير الخاصة بكم لدى مراكز شريكة، بناءً على وصفة الطبيب.",
    filters: { all: "الكل", none: "دون إشعاع", xray: "أشعة سينية", nuclear: "الطب النووي" },
    types: { none: "دون إشعاع", xray: "أشعة سينية", nuclear: "الطب النووي" },
    exams: [
      { title: "الفحص المقطعي (سكانير)", text: "صور مقطعية دقيقة جداً باستعمال الأشعة السينية. سريع، ويُستعمل كثيراً في الحالات الطارئة.", uses: ["الصدر", "البطن", "الدماغ"] },
      { title: "الرنين المغناطيسي (IRM)", text: "صور مفصلة تُنتج بمجال مغناطيسي، دون أشعة سينية.", uses: ["الدماغ", "العمود الفقري", "المفاصل"] },
      { title: "التصوير بالأشعة السينية", text: "التصوير الإشعاعي الكلاسيكي لرؤية العظام والرئتين والمفاصل.", uses: ["الكسور", "الرئتان", "المفاصل"] },
      { title: "الإيكوغرافي (الموجات فوق الصوتية)", text: "فحص بالموجات فوق الصوتية، دون إشعاع، لمشاهدة الأعضاء في الوقت الحقيقي.", uses: ["البطن", "القلب", "الحمل"] },
      { title: "الدوبلر", text: "دراسة جريان الدم في الشرايين والأوردة بالموجات فوق الصوتية.", uses: ["الشرايين", "الأوردة", "الساقان"] },
      { title: "تصوير الثدي (ماموغرافي)", text: "تصوير إشعاعي للثدي، يُستعمل خاصة للكشف المبكر.", uses: ["الكشف المبكر", "الثديان", "المتابعة"] },
      { title: "التصوير الومضاني والـPET scan", text: "فحوص تستعمل مادة مشعة متعقبة لدراسة عمل الأعضاء.", uses: ["العظام", "القلب", "السرطان"] },
      { title: "قياس كثافة العظام", text: "قياس كثافة العظام بجرعة منخفضة من الأشعة السينية.", uses: ["هشاشة العظام", "العظام", "المتابعة"] },
      { title: "تصوير الأسنان بالأشعة", text: "صور للأسنان والفكين، مفيدة قبل علاج الأسنان أو زرعها.", uses: ["الأسنان", "الفكان", "الزرعات"] },
    ],
    note: "يحدد الطبيب ومركز التصوير الفحص المناسب وطريقة تحضيره (الصيام، مادة التباين…) وتفسير نتائجه.",
    cta: "نظّم فحوصي",
  },

it: {
  label: "DIAGNOSTICA PER IMMAGINI",
  title: "Tutti i tuoi esami diagnostici per immagini,",
  accent: "organizzati per te.",
  text: "TAC, risonanza magnetica, radiologia, ecografia… Glomed Group coordina i tuoi esami diagnostici presso centri convenzionati, su prescrizione medica.",
  filters: { all: "Tutti", none: "Senza radiazioni", xray: "Raggi X", nuclear: "Medicina nucleare" },
  types: { none: "Senza radiazioni", xray: "Raggi X", nuclear: "Medicina nucleare" },
  exams: [
    { title: "TAC (Tomografia computerizzata)", text: "Immagini in sezione molto precise ottenute mediante raggi X. È un esame rapido, spesso utilizzato nelle situazioni di emergenza.", uses: ["Torace", "Addome", "Cervello"] },
    { title: "Risonanza magnetica (RM)", text: "Immagini dettagliate ottenute mediante un campo magnetico, senza utilizzare raggi X.", uses: ["Cervello", "Colonna vertebrale", "Articolazioni"] },
    { title: "Radiologia tradizionale", text: "Radiografia classica che permette di visualizzare le ossa, i polmoni e le articolazioni.", uses: ["Fratture", "Polmoni", "Articolazioni"] },
    { title: "Ecografia", text: "Esame eseguito mediante ultrasuoni, senza radiazioni, che permette di osservare gli organi in tempo reale.", uses: ["Addome", "Cuore", "Gravidanza"] },
    { title: "Eco-Doppler", text: "Esame della circolazione sanguigna nelle arterie e nelle vene mediante ultrasuoni.", uses: ["Arterie", "Vene", "Gambe"] },
    { title: "Mammografia", text: "Radiografia delle mammelle, utilizzata soprattutto per la diagnosi precoce.", uses: ["Screening", "Mammelle", "Controllo"] },
    { title: "Scintigrafia e PET", text: "Esami che utilizzano un tracciante radioattivo per studiare il funzionamento degli organi.", uses: ["Ossa", "Cuore", "Tumori"] },
    { title: "MOC (Densitometria ossea)", text: "Misurazione della densità ossea mediante una bassa dose di raggi X.", uses: ["Osteoporosi", "Ossa", "Controllo"] },
    { title: "Radiografia dentale", text: "Immagini dei denti e delle mascelle, utili prima di trattamenti odontoiatrici o dell'inserimento di impianti.", uses: ["Denti", "Mascelle", "Impianti"] },
  ],
  note: "L'esame più adatto, la relativa preparazione (digiuno, mezzo di contrasto, ecc.) e la sua interpretazione vengono stabiliti dal medico e dal centro di diagnostica per immagini.",
  cta: "Organizzare i miei esami",
},

  de: {
    label: "BILDGEBUNG",
    title: "Alle Ihre bildgebenden Untersuchungen,",
    accent: "für Sie organisiert.",
    text: "CT, MRT, Röntgen, Ultraschall … Glomed Group koordiniert Ihre bildgebenden Untersuchungen mit Partnerzentren – auf ärztliche Verordnung.",
    filters: { all: "Alle", none: "Ohne Strahlung", xray: "Röntgen", nuclear: "Nuklearmedizin" },
    types: { none: "Ohne Strahlung", xray: "Röntgen", nuclear: "Nuklearmedizin" },
    exams: [
      { title: "Computertomographie (CT)", text: "Sehr präzise Schnittbilder mithilfe von Röntgenstrahlen. Schnell und häufig in Notfällen im Einsatz.", uses: ["Brustkorb", "Bauch", "Gehirn"] },
      { title: "MRT", text: "Detaillierte Bilder mit einem Magnetfeld, ohne Röntgenstrahlen.", uses: ["Gehirn", "Wirbelsäule", "Gelenke"] },
      { title: "Röntgen", text: "Klassische Röntgenaufnahme zur Darstellung von Knochen, Lunge und Gelenken.", uses: ["Brüche", "Lunge", "Gelenke"] },
      { title: "Ultraschall", text: "Untersuchung mit Ultraschall, ohne Strahlung, um Organe in Echtzeit zu beobachten.", uses: ["Bauch", "Herz", "Schwangerschaft"] },
      { title: "Doppler", text: "Ultraschalluntersuchung des Blutflusses in Arterien und Venen.", uses: ["Arterien", "Venen", "Beine"] },
      { title: "Mammographie", text: "Röntgenaufnahme der Brust, insbesondere zur Früherkennung.", uses: ["Früherkennung", "Brust", "Kontrolle"] },
      { title: "Szintigraphie und PET", text: "Untersuchungen mit einem radioaktiven Tracer, um die Funktion von Organen zu untersuchen.", uses: ["Knochen", "Herz", "Krebs"] },
      { title: "Knochendichtemessung", text: "Messung der Knochendichte mit einer niedrigen Röntgendosis.", uses: ["Osteoporose", "Knochen", "Kontrolle"] },
      { title: "Zahnröntgen", text: "Aufnahmen von Zähnen und Kiefern, hilfreich vor Zahnbehandlungen oder Implantaten.", uses: ["Zähne", "Kiefer", "Implantate"] },
    ],
    note: "Die geeignete Untersuchung, ihre Vorbereitung (Nüchternheit, Kontrastmittel usw.) und ihre Auswertung werden vom Arzt und vom Bildgebungszentrum festgelegt.",
    cta: "Untersuchungen organisieren",
  },

es: {
  label: "DIAGNÓSTICO POR IMAGEN",
  title: "Todas tus pruebas de diagnóstico por imagen,",
  accent: "organizadas para ti.",
  text: "TAC, resonancia magnética, radiología, ecografía… Glomed Group coordina tus pruebas de diagnóstico por imagen en centros asociados, siempre bajo prescripción médica.",
  filters: { all: "Todas", none: "Sin radiación", xray: "Rayos X", nuclear: "Medicina nuclear" },
  types: { none: "Sin radiación", xray: "Rayos X", nuclear: "Medicina nuclear" },
  exams: [
    { title: "TAC (Tomografía computarizada)", text: "Imágenes transversales de gran precisión obtenidas mediante rayos X. Es una prueba rápida, utilizada con frecuencia en situaciones de urgencia.", uses: ["Tórax", "Abdomen", "Cerebro"] },
    { title: "Resonancia magnética (RM)", text: "Imágenes detalladas obtenidas mediante un campo magnético, sin utilizar rayos X.", uses: ["Cerebro", "Columna vertebral", "Articulaciones"] },
    { title: "Radiología convencional", text: "Radiografía clásica que permite visualizar los huesos, los pulmones y las articulaciones.", uses: ["Fracturas", "Pulmones", "Articulaciones"] },
    { title: "Ecografía", text: "Prueba mediante ultrasonidos, sin radiación, que permite observar los órganos en tiempo real.", uses: ["Abdomen", "Corazón", "Embarazo"] },
    { title: "Doppler", text: "Estudio de la circulación sanguínea en las arterias y las venas mediante ultrasonidos.", uses: ["Arterias", "Venas", "Piernas"] },
    { title: "Mamografía", text: "Radiografía de las mamas, utilizada especialmente para la detección precoz.", uses: ["Detección precoz", "Mamas", "Seguimiento"] },
    { title: "Gammagrafía y PET", text: "Pruebas que utilizan un marcador radiactivo para estudiar el funcionamiento de los órganos.", uses: ["Huesos", "Corazón", "Cáncer"] },
    { title: "Densitometría ósea", text: "Medición de la densidad de los huesos mediante una dosis baja de rayos X.", uses: ["Osteoporosis", "Huesos", "Seguimiento"] },
    { title: "Radiografía dental", text: "Imágenes de los dientes y los maxilares, útiles antes de realizar tratamientos o colocar implantes.", uses: ["Dientes", "Maxilares", "Implantes"] },
  ],
  note: "La prueba adecuada, su preparación (ayuno, medio de contraste, etc.) y su interpretación serán determinadas por el médico y el centro de diagnóstico por imagen.",
  cta: "Organizar mis pruebas",
},

};

const FILTER_KEYS = ["all", "none", "xray", "nuclear"];

export default function MedicalImaging() {
  const { language, dir } = useLanguage();
  const code = String(language || "fr").toLowerCase().slice(0, 2);
  const t = translations[code] || translations.fr;
  const rtl = code === "ar";

  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("all");

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
      { threshold: 0.08 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shown = EXAMS.map((exam, index) => ({ ...exam, index })).filter(
    (exam) => filter === "all" || exam.type === filter
  );

  return (
    <section
      id="imagerie"
      ref={sectionRef}
      dir={dir || (rtl ? "rtl" : undefined)}
      className={`gimg ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""}`}
    >
      <div className="gimg-container">
        {/* ===== TITRE ===== */}
        <div className="gimg-banner">
          <header className="gimg-head">
            <span className="gimg-label">{t.label}</span>
            <h2>
              {t.title} <span>{t.accent}</span>
            </h2>
            <p>{t.text}</p>
          </header>
        </div>

        {/* ===== FILTRES ===== */}
        <div className="gimg-filters" role="group" aria-label={t.label}>
          {FILTER_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              className={`gimg-filter ${filter === key ? "is-active" : ""}`}
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {t.filters[key]}
            </button>
          ))}
        </div>

        {/* ===== EXAMENS ===== */}
        <ul className="gimg-grid">
          {shown.map((exam, i) => {
            const item = t.exams[exam.index];
            return (
              <li className={`gimg-card gimg-type-${exam.type}`} key={exam.index} style={{ "--i": i }}>
                <div className="gimg-card-top">
                  <span className="gimg-icon">
                    <i className={exam.icon} aria-hidden="true" />
                  </span>
                  <span className="gimg-badge">{t.types[exam.type]}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <ul className="gimg-uses">
                  {item.uses.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        {/* ===== BAS ===== */}
        <div className="gimg-footer">
          <p className="gimg-note">
            <i className="bi bi-info-circle" aria-hidden="true" />
            <span>{t.note}</span>
          </p>
          <Link href="/contact" className="gimg-button">
            {t.cta}
            <i className={`bi ${rtl ? "bi-arrow-left" : "bi-arrow-right"}`} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}