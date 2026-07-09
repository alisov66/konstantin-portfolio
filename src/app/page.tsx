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
      <section className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center gap-[40px] px-[120px] pb-[120px] pt-[40px]">
        <div className="flex w-full flex-col items-center gap-[12px]">
          <div className="relative size-[80px] overflow-hidden">
            <img
              alt="Konstantin Alisov"
              className="absolute left-[-6%] top-[-6%] size-[112%] max-w-none"
              src={imgPic}
            />
          </div>

          <div className="flex w-full flex-col items-center gap-[4px] text-center">
            <h1 className="text-[28px] font-semibold leading-[36px] text-[var(--text-primary)]">
              Konstantin Alisov
            </h1>
            <p className="text-[20px] leading-[28px] text-[var(--text-secondary)]">
              Product designer
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[860px] flex-col items-center gap-[24px] text-center">
          <h2 className="max-w-[800px] text-[80px] font-medium leading-[88px] text-[var(--text-primary)]">
            Designing clarity
            <br />
            in complex systems
          </h2>

          <p className="max-w-[640px] text-[20px] leading-[28px] text-[var(--text-primary)]">
            The industries changed, but the challenge stayed the same:
            <br />
            helping people understand what to do next.
          </p>
        </div>

        <HeroNavigation
          activeItem="capabilities"
          className="w-full"
          items={heroItems}
        />
      </section>
    </main>
  );
}
