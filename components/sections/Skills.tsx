const skillGroups = [
  {
    title: "Backend & Core Engineering",
    description:
      "Building reliable backend systems, REST APIs, and application architectures with a strong focus on core computer science fundamentals and data structures.",
    skills: [
      "Java",
      "Python",
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQL",
      "MongoDB",
      "JWT",
    ],
  },
  {
    title: "Cloud Ops & Technical Support",
    description:
      "Hands-on experience in production cloud monitoring, Azure virtual infrastructure, L2/L3 incident resolution, and enterprise IT operations.",
    skills: [
      "Azure (AZ-900)",
      "ServiceNow",
      "Control-M",
      "L2/L3 Support",
      "Incident Management",
      "NOC Operations",
      "SLA Management",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, clean, and modern user interfaces focused on performance, accessibility, and component-driven architecture.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Tools & Analytics",
    description:
      "Utilizing modern developer tools, version control workflows, and data analysis packages for fast debugging and workflow automation.",
    skills: [
      "Git",
      "GitHub",
      "Pandas",
      "Postman",
      "VS Code",
      "Linux Fundamentals",
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
        My technical background spans backend software engineering, cloud 
        infrastructure monitoring, technical support operations, and modern 
        full-stack development.
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
