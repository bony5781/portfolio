const experiences = [
  {
    company: "Accenture",
    role: "Packaged Application Development Associate",
    description:
      "Worked in Azure production support handling application monitoring, incident resolution, and enterprise workflow management using tools like ServiceNow and Control-M.",
    tech: [
      "Azure",
      "ServiceNow",
      "Control-M",
      "Enterprise Support",
    ],
  },
  {
    company: "Cameraji",
    role: "Full Stack Web Developer Intern",
    description:
      "Developed and maintained frontend and backend features for web applications while working with modern full-stack development workflows.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    company: "Amazon Development Centre",
    role: "Technical Support Associate",
    description:
      "Managed operational ticketing queues, system troubleshooting, and root-cause analysis for high-volume workflows while strictly meeting global SLA targets.",
    tech: [
      "Incident Management",
      "Troubleshooting",
      "Queue Operations",
      "SLA Tracking",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Section Label */}
      <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs font-semibold">
        EXPERIENCE
      </p>

      {/* Heading */}
      <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
        Professional Experience
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
        Experience across cloud production support, enterprise operations,
        technical incident management, and full-stack web development workflows.
      </p>

      {/* Experience Cards */}
      <div className="mt-16 space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="
              rounded-3xl
              border border-white/10
              bg-[#0B1120]/80
              p-8
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-[#10182b]
            "
          >
            {/* Company */}
            <h3 className="text-2xl font-semibold tracking-tight">
              {exp.company}
            </h3>

            {/* Role */}
            <p className="mt-2 text-cyan-400 font-medium">
              {exp.role}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-4xl text-zinc-400 leading-relaxed">
              {exp.description}
            </p>

            {/* Tech Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {exp.tech.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    px-4 py-2
                    text-sm text-zinc-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
