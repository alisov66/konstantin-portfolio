export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-8">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Product Designer · Bilbao, Spain
          </p>

          <h1 className="max-w-5xl text-7xl font-semibold leading-none">
            Designing products,
            <br />
            systems, and workflows
            <br />
            people actually enjoy using.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
            I design enterprise software, data-rich interfaces,
            design systems, and AI-assisted experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
