export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-beige)] px-6 py-10 text-[var(--text-primary)] md:px-10">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-2 border-b border-[var(--border-primary)] pb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Portfolio 2026
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            New draft coming soon.
          </h1>
          <p className="max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
            The previous content has been cleared so the new page can be built cleanly on top of the refreshed design system.
          </p>
        </header>

        <div className="rounded-[32px] border border-[var(--border-primary)] bg-[var(--bg-gray)] p-8">
          <p className="text-base text-[var(--text-secondary)]">
            Send the new draft whenever you’re ready and I’ll turn it into the production page structure.
          </p>
        </div>
      </section>
    </main>
  );
}
