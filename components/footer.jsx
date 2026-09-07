import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">KALDESIGNS</p>
            <p className="mt-4 max-w-sm leading-relaxed text-white/65">
              Data analysis, automation, and software engineering for teams that
              need reliable systems — not a catch-all agency menu.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/kikwasteve23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kalungu-steve-a056b6149"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Services</h3>
            <ul className="mt-4 space-y-3 text-white/65">
              <li>
                <a href="#services" className="hover:text-white">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Data Science & Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Software Engineering
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Contact</h3>
            <ul className="mt-4 space-y-4 text-white/65">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0" />
                Ruiru, Kiambu, Kenya
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+254745751939" className="hover:text-white">
                  +254 745 751 939
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:stevenkikwa@gmail.com" className="hover:text-white">
                  stevenkikwa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Kaldesigns. All rights reserved.</p>
          <p>Analysis · Automation · Software</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
