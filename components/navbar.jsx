"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Focus" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      <nav className="nav-blur relative z-[61] border-b border-[var(--line)]">
        <div className="container-shell flex items-center justify-between py-3.5">
          <a
            href="#hero"
            className="relative z-[62] flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <img
              src="/assets/logo.jpg"
              alt="Kaldesigns logo"
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
            <span className="font-brand text-xl font-bold tracking-[0.06em] text-ink sm:text-2xl">
              KALDESIGNS
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="cta-primary !px-4 !py-2.5 text-sm">
              Start a project
            </a>
          </div>

          <button
            type="button"
            className="relative z-[62] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-paper text-ink pointer-events-auto md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`border-t border-[var(--line)] bg-paper md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="container-shell flex flex-col gap-4 py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="cta-primary w-full"
              onClick={() => setOpen(false)}
            >
              Start a project
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
