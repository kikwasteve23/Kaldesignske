const engagements = [
  {
    label: "Operations reporting",
    outcome:
      "Replace fragile weekly spreadsheet packs with a scheduled pipeline and a dashboard leadership trusts.",
  },
  {
    label: "Workflow automation",
    outcome:
      "Connect forms, files, APIs, and notifications so handoffs stop depending on copy-paste and memory.",
  },
  {
    label: "Internal product build",
    outcome:
      "Design and ship a focused web tool or data service that matches how your team actually works day to day.",
  },
];

const EngagementsSection = () => {
  return (
    <section
      id="work"
      className="section-pad relative overflow-hidden bg-[linear-gradient(160deg,var(--sand)_0%,var(--paper)_45%,var(--mint)_100%)]"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(31,107,74,0.16),transparent_60%)]" />

      <div className="container-shell relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Typical engagements</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Outcomes we optimize for — not inflated case-study theater.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            We keep proof honest. If you need references or a walkthrough of
            similar work, ask on the discovery call and we will share what
            fits under NDA.
          </p>
        </div>

        <div className="mt-14 space-y-0 border-t border-ink/15">
          {engagements.map((item) => (
            <div
              key={item.label}
              className="grid gap-3 border-b border-ink/15 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10"
            >
              <h3 className="font-display text-2xl font-bold text-ink">{item.label}</h3>
              <p className="text-lg leading-relaxed text-ink-soft">{item.outcome}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-ink px-7 py-8 text-white sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="font-display text-2xl font-bold sm:text-3xl">
              Ready to cut a manual process this month?
            </p>
            <p className="mt-2 text-white/70">
              Tell us the workflow that hurts. We will reply with a next step.
            </p>
          </div>
          <a href="#contact" className="cta-primary shrink-0">
            Book discovery
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementsSection;
