
"use client";

import "./css/WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "21693767950";

  const message = encodeURIComponent(
    "Bonjour Glomed Group, je souhaite obtenir des informations concernant un séjour médical en Tunisie."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Glomed Group sur WhatsApp"
      title="Contacter Glomed Group sur WhatsApp"
      className="glomed-whatsapp"
    >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M12.04 2a9.8 9.8 0 0 0-8.37 14.9L2.3 22l5.23-1.37A9.8 9.8 0 1 0 12.04 2Zm0 17.8a8 8 0 0 1-4.08-1.12l-.29-.17-3.1.81.83-3.02-.19-.31A8 8 0 1 1 12.04 19.8Zm4.39-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
</svg>
      <span className="glomed-whatsapp-tooltip">
        Contactez-nous sur WhatsApp
      </span>
    </a>
  );
}
