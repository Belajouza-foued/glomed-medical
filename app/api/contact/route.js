
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Vérifier la configuration
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_TO_EMAIL ||
      !process.env.RESEND_FROM_EMAIL
    ) {
      console.error("Missing email configuration");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Récupérer les données du formulaire
    const data = await request.json();
// Protection Honeypot : détecter les robots
if (
  typeof data.website === "string" &&
  data.website.trim() !== ""
) {
  // Réponse normale pour ne pas informer le robot
  return NextResponse.json(
    { success: true },
    { status: 200 }
  );
}
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      consent,
      language,
    } = data;

    // Vérifier les champs obligatoires
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !message?.trim() ||
      consent !== true
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Limiter la longueur des données
    if (
      firstName.length > 100 ||
      lastName.length > 100 ||
      phone.length > 40 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Some fields are too long." },
        { status: 400 }
      );
    }

    // Préparer le contenu de l'email
    const emailContent = `
Nouvelle demande depuis le site Glomed Medical

Prénom : ${firstName}
Nom : ${lastName}
Email : ${email}
Téléphone / WhatsApp : ${phone}

Langue du formulaire : ${language || "fr"}

Message :
${message}

Consentement : accepté
    `;

    // Envoyer l'email avec Resend
    const { data: result, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande Glomed - ${firstName} ${lastName}`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your request." },
        { status: 500 }
      );
    }

    console.log("Contact email sent:", result?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been sent successfully.",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
