"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  AlertCircle,
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
  const [redirectUrl, setRedirectUrl] = useState(
    "https://kaldesigns.vercel.app/?sent=1#contact"
  );
  const [sentBanner, setSentBanner] = useState(false);

  useEffect(() => {
    const origin = window.location.origin;
    setRedirectUrl(`${origin}/?sent=1#contact`);

    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setSentBanner(true);
      // Clean the query without losing the hash section.
      window.history.replaceState({}, "", `${origin}/#contact`);
    }
  }, []);

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

            {sentBanner && (
              <div className="mt-5 flex items-start gap-2 rounded-xl border border-brand/20 bg-sky px-4 py-3 text-sm text-brand-deep">
                <Check className="mt-0.5 shrink-0" size={16} />
                <span>
                  Message sent to stevenkikwa@gmail.com. We typically reply
                  within one business day.
                </span>
              </div>
            )}

            {/*
              Native POST avoids Cloudflare/CORS issues with fetch on the free plan.
              Web3Forms redirects back via the hidden `redirect` field.
            */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-6 space-y-5"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="from_name" value="Kaldesigns Website" />
              <input type="hidden" name="redirect" value={redirectUrl} />
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
                  className="field"
                  defaultValue={subjects[0]}
                  required
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={`[Kaldesigns] ${subject}`}>
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
                  rows={6}
                  className="field resize-y"
                  placeholder="What is broken today? Which tools do you use (Power BI, Tableau, Spark, warehouses…)? Any timeline?"
                  required
                />
              </div>

              <button type="submit" className="cta-primary w-full sm:w-auto">
                Send message
                <Send size={18} />
              </button>

              {!sentBanner && (
                <p className="flex items-start gap-2 text-xs text-[var(--muted)]">
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  Submissions go to stevenkikwa@gmail.com via Web3Forms. Check spam
                  if you are testing the form yourself.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
