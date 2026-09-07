"use client";

import { useState } from "react";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="nav-blur border-b border-[var(--line)]">
        <div className="container-shell flex items-center justify-between py-3.5">
          <a href="#hero" className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            KALDESIGNS
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
            <a href="#contact" className="cta-primary !py-2.5 !px-4 text-sm">
              Start a project
            </a>
          </div>

          <button
            className="rounded-full border border-[var(--line)] p-2 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[var(--line)] bg-paper md:hidden">
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
        )}
      </nav>
    </header>
  );
};

export default Navbar;
