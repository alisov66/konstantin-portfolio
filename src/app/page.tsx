export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-beige)] px-4 py-6 text-[var(--text-primary)] sm:px-6 lg:px-10 lg:py-8">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 lg:gap-8">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--border-primary)] pb-5 lg:pb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-secondary)] sm:text-xs">
              Portfolio 2026
            </p>
            <h1 className="mt-2 text-3xl font-semibold leading-none sm:text-4xl lg:text-5xl">
              Konstantin Alisov
            </h1>
          </div>

          <div className="max-w-[180px] text-right text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)] sm:text-base">
            Product designer
            <br />
            Bilbao · Spain
          </div>
        </header>

        <div className="grid flex-1 gap-6 lg:grid-cols-[1.1fr_1.3fr_0.6fr] lg:gap-8">
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-[var(--border-primary)] bg-[var(--bg-gray)] p-4">
              <div className="h-full rounded-[24px] border border-[var(--border-primary)] bg-[linear-gradient(135deg,var(--bg-violet)_0%,var(--bg-mint-green)_100%)]" />
            </div>

            <div className="inline-flex w-fit items-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-mint-green)] px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] sm:text-base">
              Product design • systems
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex rounded-full border border-[var(--border-primary)] bg-[var(--bg-violet)] px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] sm:text-base">
                Designing complex software
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
                Turning enterprise workflows into products people enjoy using.
              </h2>
            </div>

            <div className="max-w-xl space-y-4 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              <p>
                I design thoughtful interfaces, scalable systems, and clear product strategies for ambitious teams building complex tools.
              </p>
              <p>
                From strategy to implementation, I help turn messy workflows into calm, reliable experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Design systems",
                "Enterprise UX",
                "AI workflows",
                "Technical communication",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border-primary)] px-3 py-2 text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:items-end">
            <div className="w-full rounded-[24px] border border-[var(--border-primary)] bg-[var(--bg-gray)] p-4 text-sm leading-6 text-[var(--text-secondary)] lg:max-w-[220px]">
              I create product experiences that balance clarity, craft, and long-term scalability.
            </div>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--button-primary)] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[var(--button-primary-text)] transition-colors hover:bg-[var(--button-primary-hover)]"
            >
              View selected work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
