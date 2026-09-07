const steps = [
  {
    step: "01",
    title: "Discovery call",
    text: "We map the bottleneck: where data lives, what decisions stall, and which tasks should never be manual again.",
  },
  {
    step: "02",
    title: "Scoped proposal",
    text: "You get a clear scope, timeline, and success criteria — analysis sprint, automation build, or software delivery.",
  },
  {
    step: "03",
    title: "Build & validate",
    text: "We ship in short cycles with working outputs: notebooks, pipelines, dashboards, or app releases you can test.",
  },
  {
    step: "04",
    title: "Handoff & support",
    text: "Documentation, training, and an optional maintenance window so the system stays useful after launch.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-pad bg-ink text-white">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow !text-[#9dceb8]">How we work</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A simple path from messy data to a working system.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            No endless strategy decks. We move from the real constraint to a
            scoped build you can use.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute left-12 right-0 top-5 hidden h-px bg-gradient-to-r from-[#3f8f6a] to-transparent xl:block" />
              )}
              <div className="font-display text-sm font-bold tracking-[0.2em] text-[#7fbf9a]">
                {item.step}
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
