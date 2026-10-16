"use client";

import "./css/Gallery.css";

const galleryImages = [
  { src: "/images/chirugie-urolo.avif", alt: "Soins en urologie", title: "Urologie" },
  { src: "/images/chirugie-pediatre.avif", alt: "Soins en pédiatrie", title: "Pédiatrie" },
  {
    src: "/images/chirugie-gas.avif",
    alt: "Soins en gastro-entérologie",
    title: "Gastro-entérologie",
  },
  {
    src: "/images/chirugie-pneumon.avif",
    alt: "Soins en pneumologie",
    title: "Pneumologie",
  },
  {
    src: "/images/chirigue-cardiologue-1.avif",
    alt: "Soins en cardiologie",
    title: "Cardiologie",
  },
  {
    src: "/images/chirugie-ophtal.avif",
    alt: "Soins en ophtalmologie",
    title: "Ophtalmologie",
  },
  {
    src: "/images/chirigue-ortho.avif",
    alt: "Soins en orthopédie",
    title: "Orthopédie",
  },
  
];

export default function Gallery() {
  const repeatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="gallerySection" aria-label="Nos spécialités médicales">
      <div className="galleryHeader">
        <span className="galleryEyebrow">GLOMED GROUP · TUNISIE</span>

        <h2>
          Des soins spécialisés,
          <br />
          <em>un accompagnement humain</em>
        </h2>

        <p>
          Découvrez nos spécialités médicales et bénéficiez d’un
          accompagnement personnalisé pour votre parcours de soins en Tunisie.
        </p>
      </div>

      <div className="galleryMarquee">
        <div className="galleryMarqueeTrack">
          {repeatedImages.map((item, index) => (
            <article className="galleryMarqueeItem" key={`${item.title}-${index}`}>
              <div className="galleryPhoto">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  draggable="false"
                />

                <div className="galleryPhotoOverlay">
                  <span className="galleryPhotoNumber">
                    {String((index % galleryImages.length) + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}