export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-beige)] px-4 py-5 text-[var(--text-primary)] sm:px-6 lg:px-10 lg:py-8">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col gap-5 lg:gap-7">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--border-primary)] pb-4 lg:pb-5">
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

        <div className="grid flex-1 gap-5 lg:grid-cols-[0.95fr_1.25fr_0.65fr] lg:gap-6">
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[var(--border-primary)] bg-[var(--bg-gray)] p-3 sm:p-4">
              <div className="relative h-full overflow-hidden rounded-[22px] border border-[var(--border-primary)] bg-[linear-gradient(135deg,var(--bg-violet)_0%,var(--bg-mint-green)_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_35%)]" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="rounded-full border border-[var(--border-primary)] bg-[var(--bg-gray)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Selected work
                  </span>
                  <span className="text-4xl font-semibold leading-none sm:text-5xl">
                    2026
                  </span>
                </div>
              </div>
            </div>

            <div className="inline-flex w-fit items-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-mint-green)] px-3.5 py-2 text-sm font-medium uppercase tracking-[0.16em] sm:px-4 sm:text-base">
              Product design • systems
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex rounded-full border border-[var(--border-primary)] bg-[var(--bg-violet)] px-3.5 py-2 text-sm font-medium uppercase tracking-[0.16em] sm:px-4 sm:text-base">
                Designing complex software
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-[4.8rem] lg:leading-[0.9]">
                Turning enterprise workflows into products people enjoy using.
              </h2>
            </div>

            <div className="max-w-xl space-y-3 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              <p>
                I design interfaces, systems, and product strategy for ambitious teams building complex tools.
              </p>
              <p>
                From discovery to implementation, I help turn messy workflows into calm and reliable experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {[
                "Design systems",
                "Enterprise UX",
                "AI workflows",
                "Technical communication",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border-primary)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:items-end">
            <div className="w-full rounded-[24px] border border-[var(--border-primary)] bg-[var(--bg-gray)] p-4 text-sm leading-6 text-[var(--text-secondary)] lg:max-w-[210px]">
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
