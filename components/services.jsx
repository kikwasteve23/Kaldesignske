import {
  BarChart3,
  Workflow,
  Code2,
  Database,
  Bot,
  Layers,
  Presentation,
} from "lucide-react";

const pillars = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    summary:
      "Turn raw operational and product data into decision-ready analysis, BI dashboards, and big-data visualizations stakeholders can trust.",
    items: [
      "BI dashboards in Power BI, Tableau, Looker & Metabase",
      "Big data exploration with Spark, warehouses & lakehouses",
      "KPI design, SQL analysis, and Python reporting",
      "Executive-ready visuals and narrative insights",
    ],
  },
  {
    icon: Workflow,
    title: "Data Science & Automation",
    summary:
      "Automate the repeatable work: pipelines, alerts, scoring, and models that keep running without babysitting.",
    items: [
      "ETL / ELT and scheduled pipelines",
      "Process automation across tools & files",
      "Predictive models where they pay off",
      "Monitoring, alerts, and handoff docs",
    ],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    summary:
      "Ship internal tools, APIs, and web applications that fit your workflow instead of forcing another SaaS detour.",
    items: [
      "Custom web apps & admin tools",
      "API integrations and data services",
      "Reliable backends for analytics products",
      "Maintenance plans after launch",
    ],
  },
];

const stack = [
  { icon: Presentation, label: "Power BI · Tableau · Looker" },
  { icon: Database, label: "SQL · Spark · Warehouses" },
  { icon: Bot, label: "Python · Automation · APIs" },
  { icon: Layers, label: "Next.js · React · Cloud" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-pad bg-[linear-gradient(180deg,var(--mist)_0%,var(--paper)_100%)]">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Three offers. No diluted menu.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            Every engagement maps to analysis, automation, or engineering — so
            scope stays clear and delivery stays accountable.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="border-t border-ink/15 pt-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{pillar.summary}</p>
                <ul className="mt-6 space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3 border-y border-[var(--line)] py-6">
          {stack.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft"
              >
                <Icon size={16} className="text-brand" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
