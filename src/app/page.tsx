export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECEAE5] text-[#111111]">
      <section className="mx-auto flex min-h-screen max-w-[1600px] flex-col px-8 py-8 md:px-16">

        {/* Top row */}

        <div className="flex items-start justify-between">
          <div className="flex gap-8">
            <div>
              <h1 className="text-5xl leading-none tracking-tight">
                Konstantin
                <br />
                Alisov
              </h1>
            </div>

            <div className="max-w-[120px] text-xs uppercase tracking-wider">
              Product
              <br />
              Design
              <br />
              Systems
              <br />
              Portfolio
            </div>
          </div>

          <div className="bg-[#E9DFC6] px-4 py-2 text-right text-sm">
            Bilbao, Spain
            <br />
            2026
          </div>
        </div>

        {/* Main content */}

        <div className="mt-20 grid flex-1 grid-cols-12 gap-10">

          {/* Left */}

          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[4/5] w-full border border-black bg-gradient-to-br from-zinc-300 via-zinc-100 to-zinc-300" />

            <div className="-mt-4 ml-12 inline-block bg-[#E9DFC6] px-4 py-2 text-3xl font-bold">
              Product Designer →
            </div>
          </div>

          {/* Center */}

          <div className="col-span-12 md:col-span-5">

            <div className="inline-block bg-[#B6AEFF] px-4 py-2">
              <div className="text-7xl leading-none">
                Designing
              </div>
            </div>

            <br />

            <div className="mt-2 inline-block bg-[#B6AEFF] px-4 py-2">
              <div className="text-7xl leading-none">
                Complex
              </div>
            </div>

            <br />

            <div className="mt-2 inline-block bg-[#B6AEFF] px-4 py-2">
              <div className="text-7xl leading-none">
                Software
              </div>
            </div>

            <div className="mt-10 max-w-xl text-4xl leading-tight">
              →
              Turning enterprise workflows,
              design systems, and AI-powered tools
              into products people actually enjoy using.
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <div className="border border-black px-3 py-1">
                Platforma
              </div>

              <div className="border border-black px-3 py-1">
                Design Systems
              </div>

              <div className="border border-black px-3 py-1">
                Enterprise UX
              </div>

              <div className="border border-black px-3 py-1">
                AI Prototyping
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="col-span-12 md:col-span-2 flex flex-col justify-between">

            <pre className="text-xs leading-none">
{`
┌─────────────┐
│ ○       ○   │
│     ▿       │
└─────────────┘
`}
            </pre>

            <a
              href="#work"
              className="inline-block bg-[#56E5CF] px-4 py-3 text-xl"
            >
              [ View Work → ]
            </a>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-8 flex justify-between border-t border-black pt-4 text-sm">
          <span>Product Designer</span>
          <span>Bilbao · Spain</span>
        </div>
      </section>
    </main>
  );
}