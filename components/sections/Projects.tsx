const projects = [
  {
    title: "Customer Churn Analysis (Currently working on)",
    description:
      "Data analytics project focused on customer churn prediction and business insights using exploratory analysis, visualization, and machine learning workflows.",

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
    ],

    github: "#",
    live: "#",
  },

  {
    title: "AbhiSocial",

    description:
      "Full-stack social media platform with authentication, posts, likes, comments, follow system, and image uploads.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],

    github: "https://github.com/bony5781/abhisocial",

    live: "https://social-media-app-35jx.onrender.com/",
  },

  {
    title: "AbhiCamp",

    description:
      "Full-stack campground/community web application with authentication, CRUD operations, reviews, and cloud-based image uploads.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Render",
    ],

    github: "https://github.com/bony5781/abhicamp",

    live: "https://abhicamp.onrender.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Section Label */}
      <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs font-semibold">
        PROJECTS
      </p>

      {/* Heading */}
      <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
        Featured Work
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
        A collection of my full-stack applications and data-driven projects
      </p>

      {/* Projects Grid */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[#0B1120]/80
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:bg-[#10182b]
            "
          >

            {/* Top Accent */}
            <div className="mb-8 h-[3px] w-12 rounded-full bg-cyan-400" />

            {/* Title */}
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-5 text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-3">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    px-4 py-2
                    text-sm text-zinc-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="mt-10 flex items-center gap-4">

              <a
                href={project.github}
                target="_blank"
                className="
                  rounded-full
                  border border-white/10
                  px-5 py-2.5
                  text-sm font-medium
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:text-cyan-400
                "
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="
                  rounded-full
                  bg-cyan-400
                  px-5 py-2.5
                  text-sm font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-cyan-300
                "
              >
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}