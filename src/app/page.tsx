import HeroNavigation from "@/components/ui/HeroNavigation";

const imgPic = "https://www.figma.com/api/mcp/asset/a05ed144-e408-496b-95f9-139863977c00";

const heroItems = [
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "cv", label: "Download CV" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-beige)] px-6 py-10 text-[var(--text-primary)] sm:px-8 lg:px-12 lg:py-12">
      <section className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center gap-8 px-2 py-8 sm:gap-10 lg:gap-12">
        <div className="flex w-full flex-col items-center gap-4">
          <HeroNavigation className="w-full" items={heroItems} />

          <div className="flex flex-col items-center gap-3">
            <div className="size-[80px] overflow-hidden rounded-full border border-[var(--border-primary)] bg-[var(--bg-gray)]">
              <img
                alt="Konstantin Alisov"
                className="h-full w-full object-cover"
                src={imgPic}
              />
            </div>

            <div className="text-center">
              <h1 className="text-[28px] font-semibold leading-[36px] text-[var(--text-primary)]">
                Konstantin Alisov
              </h1>
              <p className="text-[20px] leading-[28px] text-[var(--text-secondary)]">
                Product designer
              </p>
            </div>
          </div>
        </div>

        <div className="flex max-w-[860px] flex-col items-center gap-5 text-center">
          <h2 className="text-[56px] font-medium leading-[64px] sm:text-[72px] sm:leading-[80px] lg:text-[80px] lg:leading-[88px]">
            Designing clarity
            <br />
            in complex systems
          </h2>

          <p className="text-[20px] leading-[28px] text-[var(--text-primary)] sm:text-[22px] sm:leading-[32px]">
            The industries changed, but the challenge stayed the same:
            <br />
            helping people understand what to do next.
          </p>
        </div>

      </section>
    </main>
  );
}
