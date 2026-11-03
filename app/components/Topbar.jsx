
"use client";

import "./css/Topbar.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function Topbar() {
  const { t, dir } = useLanguage();

  return (
    <div className="glomed-topbar" dir={dir}>
      <div className="glomed-topbar-inner">

        <div className="glomed-topbar-brand">
          <i className="bi bi-heart-pulse" aria-hidden="true" />
          <span>{t("topbarService")}</span>
        </div>

        <div className="glomed-topbar-info">

          <span className="glomed-topbar-item">
            <i className="bi bi-geo-alt" aria-hidden="true" />
            {t("topbarLocation")}
          </span>

          <a
            href="mailto:groupglomed@gmail.com"
            className="glomed-topbar-item"
            aria-label={t("topbarEmail")}
          >
            <i className="bi bi-envelope" aria-hidden="true" />
            <span>groupglomed@gmail.com</span>
          </a>

          <a
            href="tel:+21693767950"
            className="glomed-topbar-item"
            aria-label={t("topbarPhone")}
          >
            <i className="bi bi-telephone" aria-hidden="true" />
            <span dir="ltr">+216 93 767 950</span>
          </a>

          <div className="glomed-topbar-socials">
            <a
              href="https://www.facebook.com/VOTRE-PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/VOTRE-COMPTE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/216XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
