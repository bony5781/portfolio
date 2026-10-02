export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Section Label */}
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-medium">
        ABOUT
      </p>

      {/* Heading */}
      <h2 className="mt-5 text-4xl font-bold tracking-tight">
        About Me
      </h2>

      {/* Content */}
      <div className="mt-10 max-w-4xl space-y-6 text-zinc-400 text-lg leading-relaxed">
        <p>
          I am a Master of Computer Applications (MCA) graduate specializing in 
          Data Analytics, with 1.5+ years of combined experience across cloud 
          production support, technical operations, and backend development at 
          Accenture and Amazon.
        </p>

        <p>
          My background spans managing high-availability Azure cloud infrastructure, 
          handling L2/L3 incident resolution on ServiceNow, and building scalable 
          full-stack applications using Java, Python, SQL, and modern web technologies. 
          I am also GATE 2026 (Computer Science) qualified and Microsoft Certified in 
          Azure Fundamentals (AZ-900).
        </p>

        <p>
          I am an <strong className="text-zinc-200 font-semibold">Immediate Joiner (0-Day Notice)</strong> actively 
          seeking opportunities across Software Engineering, Cloud Operations, NOC, 
          and Technical Support roles.
        </p>
      </div>
    </section>
  );
}
