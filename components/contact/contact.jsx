"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  AlertCircle,
  Loader,
} from "lucide-react";

const subjects = [
  "Data analysis / BI / visualization",
  "Automation / data pipeline",
  "Software engineering build",
  "Not sure — need advice",
];

// Web3Forms access keys are public client keys by design.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "f6cb8448-2540-4a53-af8f-144dbc27920d";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      isSubmitting: true,
      submitted: false,
      success: false,
      message: "",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `[Kaldesigns] ${formData.subject}`,
          message: formData.message,
          from_name: "Kaldesigns Website",
          replyto: formData.email,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) {
        throw new Error(
          data.message || "Could not send your message. Please try WhatsApp."
        );
      }

      setFormStatus({
        isSubmitting: false,
        submitted: true,
        success: true,
        message:
          "Message sent to stevenkikwa@gmail.com. We typically reply within one business day.",
      });
      setFormData({
        name: "",
        email: "",
        subject: subjects[0],
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Optional server-side Gmail path if configured
      try {
        const apiResponse = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const apiData = await apiResponse.json().catch(() => ({}));
        if (apiResponse.ok && apiData.ok) {
          setFormStatus({
            isSubmitting: false,
            submitted: true,
            success: true,
            message:
              "Message sent to stevenkikwa@gmail.com. We typically reply within one business day.",
          });
          setFormData({
            name: "",
            email: "",
            subject: subjects[0],
            message: "",
          });
          return;
        }
      } catch {
        // ignore secondary failure
      }

      setFormStatus({
        isSubmitting: false,
        submitted: true,
        success: false,
        message:
          error.message ||
          "Something went wrong. Email stevenkikwa@gmail.com or WhatsApp us instead.",
      });
    }
  };

  const openWhatsApp = () => {
    const phone = "254745751939";
    const message =
      "Hi Kaldesigns — I'd like to discuss a data analysis / automation / software project.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="section-pad bg-mist">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Tell us the workflow you want fixed.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            Share the problem, the tools you already use, and any deadline.
            Prefer chat? WhatsApp is usually fastest.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <a
                href="mailto:stevenkikwa@gmail.com"
                className="flex items-start gap-4 text-ink transition-colors hover:text-brand"
              >
                <span className="mt-0.5 rounded-xl bg-white p-3 shadow-sm">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Email
                  </span>
                  <span className="text-lg font-medium">stevenkikwa@gmail.com</span>
                </span>
              </a>

              <a
                href="tel:+254745751939"
                className="flex items-start gap-4 text-ink transition-colors hover:text-brand"
              >
                <span className="mt-0.5 rounded-xl bg-white p-3 shadow-sm">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Phone
                  </span>
                  <span className="text-lg font-medium">+254 745 751 939</span>
                </span>
              </a>

              <div className="flex items-start gap-4 text-ink">
                <span className="mt-0.5 rounded-xl bg-white p-3 shadow-sm">
                  <MapPin size={18} />
                </span>
                <div>
                  <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Location
                  </span>
                  <p className="text-lg font-medium">Ruiru, Kiambu · Kenya</p>
                  <p className="mt-1 text-[var(--muted)]">
                    Remote-friendly across East Africa and beyond.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[0.7rem] bg-[#1faf58] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#18964a] sm:w-auto"
            >
              Chat on WhatsApp
            </button>

            <div className="overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-white">
              <iframe
                title="Kaldesigns location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.347421747054!2d36.9522833871635!3d-1.1460650763899571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fc87e3ab26d%3A0xe4bbf0ec95cc4e3a!2sRuiru!5e0!3m2!1sen!2ske!4v1710462235271!5m2!1sen!2ske"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-[1.6rem] bg-white p-6 shadow-[0_20px_50px_rgba(10,31,51,0.06)] sm:p-8">
            <h3 className="font-display text-2xl font-bold text-ink">
              Send a project brief
            </h3>

            {formStatus.submitted && (
              <div
                className={`mt-5 flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${
                  formStatus.success
                    ? "border border-brand/20 bg-sky text-brand-deep"
                    : "border border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {formStatus.success ? (
                  <Check className="mt-0.5 shrink-0" size={16} />
                ) : (
                  <AlertCircle className="mt-0.5 shrink-0" size={16} />
                )}
                <span>{formStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="field"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="field"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-ink">
                  What do you need?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="field"
                  required
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="field resize-y"
                  placeholder="What is broken today? Which tools do you use (Power BI, Tableau, Spark, warehouses…)? Any timeline?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className="cta-primary w-full sm:w-auto"
              >
                {formStatus.isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
