const points = [
  {
    title: "Reporting that still lives in spreadsheets",
    text: "Weekly numbers take hours to assemble, break when someone leaves, and never answer the next question fast enough.",
  },
  {
    title: "Processes that should already be automated",
    text: "Data entry, file transfers, alerts, and handoffs eat calendar time that should go to decisions and delivery.",
  },
  {
    title: "Tools that do not match how the team works",
    text: "Off-the-shelf software forces workarounds. We design and ship systems around your real workflows.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky/80 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-wash blur-3xl" />

      <div className="container-shell relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Who this is for</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Built for teams that need clarity from their data — not another generic agency pitch.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            Kaldesigns focuses on three things: analysis and BI visualization you
            can act on, automation that sticks, and software engineering that
            ships. Branding and logo work are no longer part of the offer — so
            every conversation stays on systems that improve operations.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <div key={point.title} className="relative pt-2">
              <div className="pipeline-pulse mb-5 h-px w-16 bg-brand" style={{ animationDelay: `${index * 0.4}s` }} />
              <h3 className="font-display text-xl font-bold text-ink">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
