"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay can fail on some browsers; still show poster frame.
      }
    };
    play();
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1f6b4a_0%,transparent_42%),linear-gradient(135deg,#0b1711_0%,#163226_55%,#0f1c18_100%)] transition-opacity duration-700 ${
            ready ? "opacity-40" : "opacity-100"
          }`}
        />
        <video
          ref={videoRef}
          className={`hero-glow h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-55" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/data.webp"
          onLoadedData={() => setReady(true)}
          aria-hidden="true"
        >
          <source src="/assets/images/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130e]/92 via-[#0d1f18]/72 to-[#102018]/45" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07130e] to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-end pb-16 pt-28 sm:items-center sm:pb-24">
        <div className="container-shell w-full">
          <div className="max-w-3xl">
            <p className="reveal font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              KALDESIGNS
            </p>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Data analysis, automation, and software that remove manual work.
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              We help operators, founders, and product teams turn scattered
              spreadsheets into reliable pipelines, dashboards, and custom tools.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="cta-primary">
                Discuss your project
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="cta-secondary">
                See what we build
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
