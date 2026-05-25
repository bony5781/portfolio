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
          I am an MCA student specializing in Data Analytics with
          experience in cloud production support, backend development,
          and scalable software systems.
        </p>

        <p>
          My interests include backend engineering, distributed systems,
          software architecture, and data-driven applications. I enjoy
          building practical full-stack applications while continuing to
          strengthen my computer science fundamentals.
        </p>
      </div>
    </section>
  );
}