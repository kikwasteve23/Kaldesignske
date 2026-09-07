import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Steven Kikwa",
    role: "Founder · Data Science & Automation",
    description:
      "Leads analysis and automation engagements — from cleaning messy sources to shipping pipelines, models, and decision-ready reporting.",
    image: "/assets/kalungu.jpg",
    linkedin: "https://www.linkedin.com/in/kalungu-steve-a056b6149",
    github: "https://github.com/kikwasteve23",
  },
  {
    name: "Julius Charles",
    role: "Software Engineer",
    description:
      "Builds the product layer around your data: reliable web apps, integrations, and interfaces teams can operate without friction.",
    image: "/assets/charles.jpg",
    linkedin: "https://www.linkedin.com/in/julius-charles-24b91b89/",
    github: "https://github.com/janedoe",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-pad bg-paper">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Team</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Small team. Direct ownership.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            You work with the people building the system — not a rotating
            account layer.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article key={member.name} className="grid gap-6 sm:grid-cols-[9.5rem_1fr] sm:items-start">
              <div className="relative h-40 w-40 overflow-hidden rounded-[1.4rem] sm:h-[9.5rem] sm:w-[9.5rem]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">{member.name}</h3>
                <p className="mt-1 font-semibold text-forest">{member.role}</p>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">{member.description}</p>
                <div className="mt-5 flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-forest hover:text-forest"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-forest hover:text-forest"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
