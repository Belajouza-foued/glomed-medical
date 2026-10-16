import Link from "next/link";
import "./cardiologie.css";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export const metadata = {
  title: "Cardiologie en Tunisie | Glomed Group",
  description:
    "Maladies cardiovasculaires, examens et traitements : Glomed Group vous accompagne dans l’organisation de votre parcours cardiologique en Tunisie.",
};

const diseases = [
  {
    number: "01",
    title: "Maladie coronarienne",
    category: "Artères du cœur",
    description:
      "Les artères qui alimentent le muscle cardiaque se rétrécissent, notamment à cause de plaques d’athérome. Elle peut provoquer des douleurs thoraciques, un essoufflement ou, dans les cas graves, un infarctus.",
    symptoms: ["Douleur ou oppression dans la poitrine", "Essoufflement à l’effort", "Fatigue inhabituelle"],
    treatment:
      "Médicaments, angioplastie avec pose de stent ou pontage coronarien, selon la gravité.",
  },
  {
    number: "02",
    title: "Troubles du rythme cardiaque",
    category: "Activité électrique",
    description:
      "Les battements du cœur sont trop rapides, trop lents ou irréguliers. Certaines arythmies sont bénignes, d’autres demandent une évaluation approfondie pour prévenir les complications.",
    symptoms: ["Palpitations ou battements irréguliers", "Vertiges ou malaise", "Essoufflement ou fatigue"],
    treatment:
      "Médicaments, ablation ou implantation d’un dispositif médical, selon le type d’arythmie.",
  },
  {
    number: "03",
    title: "Insuffisance cardiaque",
    category: "Fonction du cœur",
    description:
      "Le cœur ne parvient plus à répondre efficacement aux besoins de l’organisme. Elle peut être liée à une maladie coronarienne, une hypertension ou une atteinte du muscle cardiaque.",
    symptoms: ["Essoufflement, notamment allongé", "Gonflement des jambes ou chevilles", "Fatigue, baisse d’endurance"],
    treatment:
      "Médicaments, surveillance régulière et, dans certains cas, dispositifs ou interventions spécialisés.",
  },
  {
    number: "04",
    title: "Maladies des valves cardiaques",
    category: "Valves du cœur",
    description:
      "Les valves guident le sang dans le bon sens à travers le cœur. Lorsqu’une valve est rétrécie ou ne se ferme plus correctement, le fonctionnement cardiaque peut être perturbé.",
    symptoms: ["Essoufflement à l’effort", "Fatigue inhabituelle", "Vertiges ou douleurs thoraciques"],
    treatment:
      "Surveillance, traitement médical ou réparation / remplacement valvulaire selon la valve concernée.",
  },
  {
    number: "05",
    title: "Hypertension artérielle",
    category: "Pression sanguine",
    description:
      "Élévation persistante de la pression artérielle. Elle peut rester silencieuse longtemps tout en augmentant le risque de maladie cardiovasculaire, d’AVC et d’atteinte rénale.",
    symptoms: ["Souvent aucun symptôme", "Parfois maux de tête ou vertiges", "Contrôles réguliers nécessaires"],
    treatment:
      "Changements du mode de vie, suivi de la tension et, si nécessaire, traitement prescrit par un professionnel de santé.",
  },
  {
    number: "06",
    title: "Maladies des artères périphériques",
    category: "Circulation sanguine",
    description:
      "Les artères qui irriguent notamment les jambes se rétrécissent, ce qui limite l’apport de sang aux muscles et provoque des douleurs pendant la marche.",
    symptoms: ["Douleur dans les jambes à la marche", "Pieds froids, cicatrisation difficile", "Distance de marche réduite"],
    treatment:
      "Prévention, médicaments et, dans certains cas, procédure pour améliorer la circulation.",
  },
];

const examinations = [
  { title: "Consultation cardiologique", description: "Étude des symptômes, antécédents, traitements et facteurs de risque pour définir les examens utiles." },
  { title: "Électrocardiogramme (ECG)", description: "Enregistrement de l’activité électrique du cœur pour repérer troubles du rythme ou signes de maladie." },
  { title: "Échographie cardiaque", description: "Observation par ultrasons des structures du cœur, des valves et de la capacité de pompage." },
  { title: "Examens complémentaires", description: "Prise de sang, test d’effort, enregistrement prolongé du rythme ou imagerie spécialisée selon le cas." },
];

const treatments = [
  { title: "Traitement médical", description: "Médicaments pour contrôler la tension, réduire certains risques, traiter les troubles du rythme ou soulager les symptômes." },
  { title: "Angioplastie et stent", description: "Dilatation d’une artère rétrécie par cathéter, avec pose éventuelle d’un stent pour la maintenir ouverte." },
  { title: "Troubles du rythme", description: "Médicaments, ablation par cathéter ou dispositif implantable comme un stimulateur cardiaque." },
  { title: "Chirurgie cardiaque", description: "Pontage coronarien ou intervention sur une valve, choisis par l’équipe médicale après évaluation du dossier." },
];

const journey = [
  { number: "01", title: "Transmission du dossier", description: "Vous nous envoyez comptes rendus et résultats d’examens, orientés ensuite vers les interlocuteurs concernés." },
  { number: "02", title: "Étude et avis médical", description: "L’équipe médicale précise les examens nécessaires et les prises en charge possibles. Toute décision médicale lui appartient." },
  { number: "03", title: "Organisation du séjour", description: "Après confirmation par l’établissement, nous aidons à coordonner rendez-vous et aspects pratiques." },
  { number: "04", title: "Soins et suivi", description: "Les soins sont réalisés par l’équipe médicale, qui définit aussi les recommandations de sortie et le suivi." },
];

export default function CardiologiePage() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <main className="cardio-page">
      {/* HERO avec image de fond */}
      <section className="cardio-hero">
        <div className="cardio-container cardio-hero-content">
          <p className="cardio-eyebrow">GLOMED GROUP · CARDIOLOGIE</p>

          <h1>
            Votre santé cardiaque,
            <span> une prise en charge réfléchie.</span>
          </h1>

          <p className="cardio-hero-description">
            La cardiologie s’occupe du cœur et des vaisseaux sanguins : prévention,
            diagnostic, traitement et suivi. Glomed Group vous accompagne dans
            l’organisation de votre parcours médical en Tunisie, selon les
            possibilités confirmées auprès des établissements partenaires.
          </p>

          <div className="cardio-actions">
            <Link href="/#contact" className="cardio-button cardio-button-primary">
              Organiser mon parcours <span aria-hidden="true">↗</span>
            </Link>
            <a href="#maladies" className="cardio-button cardio-button-outline">
              Découvrir les maladies
            </a>
          </div>

          <p className="cardio-hero-note">
            Information médicale générale et accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="cardio-section cardio-intro">
        <div className="cardio-container cardio-intro-grid">
          <div>
            <p className="cardio-kicker">COMPRENDRE POUR MIEUX AGIR</p>
            <h2>
              La cardiologie, au service <span>de votre cœur.</span>
            </h2>
            <div className="icon-cardio">
            <img src="/assets/logo/cardiology.png" alt="" className="icon-cardio-1"></img>
          </div>
          </div>
          <div className="cardio-intro-copy">
            <p>
              Une évaluation adaptée permet de comprendre les symptômes,
              d’identifier les facteurs de risque et de déterminer la prise en
              charge la plus appropriée : surveillance, médicaments,
              intervention spécialisée ou chirurgie.
            </p>
            <p>
              Le parcours dépend toujours de l’état de santé de la personne et de
              l’avis des professionnels qui étudient son dossier.
            </p>
          </div>
        </div>
      </section>

      {/* MALADIES : liste déroulante */}
      <section className="cardio-section cardio-diseases" id="maladies">
        <div className="cardio-container">
          <div className="cardio-heading">
            <p className="cardio-kicker">LES PRINCIPALES PATHOLOGIES</p>
            <h2>
              Comprendre les maladies <span>cardiovasculaires</span>
            </h2>
            <p>
              Les symptômes présentés sont indicatifs et ne permettent pas, à
              eux seuls, d’établir un diagnostic.
            </p>
          </div>

          <div className="cardio-accordion">
            {diseases.map((d) => (
              <details key={d.number} className="cardio-disease">
                <summary>
                  <span className="cardio-disease-number">{d.number}</span>
                  <span className="cardio-disease-title">
                    {d.title}
                    <small>{d.category}</small>
                  </span>
                </summary>
                <div className="cardio-disease-body">
                  <p>{d.description}</p>
                  <div className="cardio-disease-cols">
                    <div>
                      <h4>Manifestations possibles</h4>
                      <ul>
                        {d.symptoms.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Prise en charge</h4>
                      <p>{d.treatment}</p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <p className="cardio-disclaimer">
            Certaines maladies cardiovasculaires évoluent sans symptômes : un
            suivi médical régulier est important en présence de facteurs de
            risque.
          </p>
        </div>
      </section>

      {/* EXAMENS + TRAITEMENTS : deux colonnes, sans cartes */}
      <section className="cardio-section cardio-duo" id="examens">
        <div className="cardio-container cardio-duo-grid">
          <div id="traitements-examens">
            <p className="cardio-kicker">ÉVALUER ET DIAGNOSTIQUER</p>
            <h2>
              Les examens <span>cardiologiques</span>
            </h2>
            <p className="cardio-duo-intro">
              Choisis selon vos symptômes et vos antécédents : tous ne sont pas
              nécessaires pour chaque patient.
            </p>
            <ol className="cardio-steps">
              {examinations.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <p>{e.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div id="traitements">
            <p className="cardio-kicker">DES SOLUTIONS ADAPTÉES</p>
            <h2>
              Les traitements <span>envisageables</span>
            </h2>
            <p className="cardio-duo-intro">
              Le choix dépend de la maladie, de sa sévérité et du bilan, après
              une évaluation individuelle par l’équipe médicale.
            </p>
            <ol className="cardio-steps cardio-steps-alpha">
              {treatments.map((t) => (
                <li key={t.title}>
                  <strong>{t.title}</strong>
                  <p>{t.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="cardio-container">
          <p className="cardio-note">
            <strong>À savoir :</strong> un pontage ou une intervention sur une
            valve ne sont proposés que si l’évaluation médicale les juge
            appropriés. Le spécialiste explique bénéfices, risques,
            alternatives et suites opératoires.
          </p>
        </div>
      </section>

      {/* PARCOURS + CTA sur image de fond */}
      <section className="cardio-journey" id="parcours">
        <div className="cardio-container">
          <div className="cardio-heading cardio-heading-light">
            <p className="cardio-kicker">VOTRE PARCOURS AVEC GLOMED GROUP</p>
            <h2>
              Un accompagnement <span>à chaque étape</span>
            </h2>
            <p>
              Après confirmation de la disponibilité et de la prise en charge
              par l’établissement concerné.
            </p>
          </div>

          <ol className="cardio-journey-list">
            {journey.map((s) => (
              <li key={s.number}>
                <span>{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>

          <div className="cardio-cta">
            <h2>
              Un projet de parcours cardiologique <span>en Tunisie ?</span>
            </h2>
            <div className="cardio-actions">
              <Link href="/#contact" className="cardio-button cardio-button-primary">
                Contacter Glomed Group <span aria-hidden="true">↗</span>
              </Link>
              <a
                href="https://wa.me/21693767950"
                className="cardio-button cardio-button-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cardio-section cardio-faq">
        <div className="cardio-container cardio-faq-grid">
          <div>
            <p className="cardio-kicker">INFORMATIONS PRATIQUES</p>
            <h2>
              Vos questions <span>fréquentes</span>
            </h2>
            <Link href="/#contact" className="cardio-text-link">
              Poser une question <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="cardio-faq-list">
            <details>
              <summary>Quand faut-il consulter un cardiologue ?</summary>
              <p>En cas de symptômes persistants, de facteurs de risque cardiovasculaire ou sur recommandation d’un médecin.</p>
            </details>
            <details>
              <summary>Une opération du cœur est-elle toujours nécessaire ?</summary>
              <p>Non. Beaucoup de maladies cardiaques sont prises en charge par un suivi, le mode de vie et des médicaments. Une intervention n’est envisagée que si les spécialistes la jugent nécessaire.</p>
            </details>
            <details>
              <summary>Quels documents préparer ?</summary>
              <p>Comptes rendus de consultation, ECG ou imagerie, analyses récentes, liste des traitements et antécédents pertinents. L’équipe précisera ce dont elle a besoin.</p>
            </details>
            <details>
              <summary>Glomed Group réalise-t-il les interventions ?</summary>
              <p>Non : Glomed Group accompagne l’organisation du parcours. Diagnostics, prescriptions et interventions sont réalisés par les professionnels de santé des établissements concernés, et la disponibilité d’un traitement doit être confirmée avant toute organisation.</p>
            </details>
          </div>
        </div>
      </section>

      <div className="cardio-warning">
        <div className="cardio-container">
          <strong>Urgence médicale :</strong> douleur thoracique brutale ou
          intense, essoufflement sévère, perte de connaissance ou signes
          d’infarctus nécessitent une aide d’urgence immédiate. Ne retardez pas
          les soins pour envoyer un formulaire ou organiser un séjour.
        </div>
      </div>
    </main>
    <Footer/>  
        </>
  );
}