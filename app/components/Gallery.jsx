
"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import "./css/Gallery.css";

const galleryImages = [
  {
    src: "/images/chirugie-urolo.avif",
    titleKey: "galleryUrology",
    altKey: "galleryAltUrology",
    slug: "urologie",
  },
  {
    src: "/images/chirugie-pediatre.avif",
    titleKey: "galleryPediatrics",
    altKey: "galleryAltPediatrics",
    slug: "pediatrie",
  },
  {
    src: "/images/chirugie-gas.avif",
    titleKey: "galleryGastro",
    altKey: "galleryAltGastro",
    slug: "gastro-enterologie",
  },
  {
    src: "/images/chirugie-pneumon.avif",
    titleKey: "galleryPneumology",
    altKey: "galleryAltPneumology",
    slug: "pneumologie",
  },
  {
    src: "/images/chirigue-cardiologue-1.avif",
    titleKey: "galleryCardiology",
    altKey: "galleryAltCardiology",
    slug: "cardiologie",
  },
  {
    src: "/images/chirugie-ophtal.avif",
    titleKey: "galleryOphthalmology",
    altKey: "galleryAltOphthalmology",
    slug: "ophtalmologie",
  },
  {
    src: "/images/chirigue-ortho.avif",
    titleKey: "galleryOrthopedics",
    altKey: "galleryAltOrthopedics",
    slug: "orthopedie",
  },
  {
    src: "/images/gynecologie-1.jpeg",
    titleKey: "galleryGynecology",
    altKey: "galleryAltGynecology",
    slug: "gynecologie",
  },
];

export default function Gallery() {
  const { t, dir } = useLanguage();

  const repeatedImages = [...galleryImages, ...galleryImages];

  return (
    <section
      className="gallerySection"
      dir={dir}
      aria-label={t("galleryLabel")}
    >
      <div className="galleryHeader">
        <span className="galleryEyebrow">
          {t("galleryEyebrow")}
        </span>

        <h2>
          {t("galleryTitle")}
          <br />
          <em>{t("galleryAccent")}</em>
        </h2>

        <p>{t("galleryDescription")}</p>
      </div>

      <div className="galleryMarquee">
        <div className="galleryMarqueeTrack">
          {repeatedImages.map((item, index) => (
            <article
              className="galleryMarqueeItem"
              key={`${item.slug}-${index}`}
            >
              <Link
                href={`/chirurgie/${item.slug}`}
                className="galleryCardLink"
                aria-label={`${t("galleryDiscover")} ${t(item.titleKey)}`}
              >
                <div className="galleryPhoto">
                  <img
                    src={item.src}
                    alt={t(item.altKey)}
                    loading="lazy"
                    draggable="false"
                  />

                  <div className="galleryPhotoOverlay">
                    <span className="galleryPhotoNumber">
                      {String(
                        (index % galleryImages.length) + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3>{t(item.titleKey)}</h3>
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
