import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "stevenkikwa@gmail.com";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendWithWeb3Forms({ name, email, subject, message }) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return null;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      subject: `[Kaldesigns] ${subject}`,
      message,
      from_name: "Kaldesigns Website",
      replyto: email,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Web3Forms rejected the submission.");
  }

  return { provider: "web3forms" };
}

async function sendWithGmail({ name, email, subject, message }) {
  const user = process.env.GMAIL_USER || TO_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!pass) return null;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Kaldesigns Website" <${user}>`,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Kaldesigns] ${subject}`,
    text: [
      `New inquiry from the Kaldesigns website`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      ``,
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #0a1f33;">
        <h2 style="color:#03548b;margin:0 0 12px;">New Kaldesigns inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p style="white-space:pre-wrap;margin-top:16px;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  return { provider: "gmail" };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "Website inquiry").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const payload = { name, email, subject, message };

    const web3 = await sendWithWeb3Forms(payload);
    if (web3) {
      return NextResponse.json({ ok: true, ...web3 });
    }

    const gmail = await sendWithGmail(payload);
    if (gmail) {
      return NextResponse.json({ ok: true, ...gmail });
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery is not configured yet. Set WEB3FORMS_ACCESS_KEY or GMAIL_APP_PASSWORD.",
        fallback: "formsubmit",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error.message || "Could not send your message. Please try WhatsApp or email directly.",
      },
      { status: 500 }
    );
  }
}
