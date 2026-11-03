
"use client";

import Link from "next/link";
import "./css/Gallery.css";

const galleryImages = [
  {
    src: "/images/chirugie-urolo.avif",
    alt: "Soins en urologie",
    title: "Urologie",
    slug: "urologie",
  },
  {
    src: "/images/chirugie-pediatre.avif",
    alt: "Soins en pédiatrie",
    title: "Pédiatrie",
    slug: "pediatrie",
  },
  {
    src: "/images/chirugie-gas.avif",
    alt: "Soins en gastro-entérologie",
    title: "Gastro-entérologie",
    slug: "gastro-enterologie",
  },
  {
    src: "/images/chirugie-pneumon.avif",
    alt: "Soins en pneumologie",
    title: "Pneumologie",
    slug: "pneumologie",
  },
  {
    src: "/images/chirigue-cardiologue-1.avif",
    alt: "Soins en cardiologie",
    title: "Cardiologie",
    slug: "cardiologie",
  },
  {
    src: "/images/chirugie-ophtal.avif",
    alt: "Soins en ophtalmologie",
    title: "Ophtalmologie",
    slug: "ophtalmologie",
  },
  {
    src: "/images/chirigue-ortho.avif",
    alt: "Soins en orthopédie",
    title: "Orthopédie",
    slug: "orthopedie",
  },
    {
    src: "/images/gynecologie-1.jpeg",
    alt: "Soins en orthopédie",
    title: "Gynecologie",
    slug: "gynecologie",
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
              <Link
                href={`/chirurgie/${item.slug}`}
                className="galleryCardLink"
                aria-label={`Découvrir la spécialité ${item.title}`}
              >
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
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
