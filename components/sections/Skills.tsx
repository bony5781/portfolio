const skillGroups = [
  {
    title: "Backend Engineering",

    description:
      "I enjoy building backend systems, authentication workflows, APIs, and scalable application architectures with a focus on clean engineering principles.",

    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
    ],
  },

  {
    title: "Frontend Development",

    description:
      "I like creating responsive and modern user interfaces while focusing on usability, clean layouts, and component-driven development.",

    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
    ],
  },

  {
    title: "Cloud & Enterprise Systems",

    description:
      "My experience at Accenture introduced me to Azure production support, monitoring systems, incident handling, and enterprise workflows.",

    skills: [
      "Azure",
      "ServiceNow",
      "Control-M",
      "Monitoring",
    ],
  },

  {
    title: "Learning & Problem Solving",

    description:
      "I continuously explore software engineering fundamentals, analytics workflows, developer tooling, and problem solving through projects and self-learning.",

    skills: [
      "Python",
      "Git",
      "GitHub",
      "Pandas",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Section Label */}
      <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs font-semibold">
        SKILLS
      </p>

      {/* Heading */}
      <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
        What I Work With
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
        My interests revolve around backend engineering, scalable web
        applications, cloud systems, and practical software development
        workflows.
      </p>

      {/* Skills Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

        {skillGroups.map((group) => (
          <div
            key={group.title}
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

            {/* Accent */}
            <div className="mb-8 h-[3px] w-12 rounded-full bg-cyan-400" />

            {/* Title */}
            <h3 className="text-2xl font-semibold tracking-tight">
              {group.title}
            </h3>

            {/* Description */}
            <p className="mt-5 text-zinc-400 leading-relaxed">
              {group.description}
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">

              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    px-4 py-2
                    text-sm text-zinc-300
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}