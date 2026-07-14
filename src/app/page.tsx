import HeroNavigation from "@/components/ui/HeroNavigation";
import { tokens } from "@/styles/tokens";

const imgPic = "https://www.figma.com/api/mcp/asset/a05ed144-e408-496b-95f9-139863977c00";

const heroItems = [
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "cv", label: "Download CV" },
];

function typeStyle(token: {
  fontSize: string | number;
  lineHeight: string | number;
  fontWeight: string | number;
}) {
  return {
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    fontWeight: token.fontWeight,
  };
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-beige)] text-[var(--text-primary)]">
      <section className="mx-auto flex min-h-screen w-full max-w-[1024px] flex-col items-center gap-[var(--base-10)] px-[var(--padding-side)] pb-[var(--base-30)] pt-[var(--base-10)]">
        <div className="flex w-full flex-col items-center gap-[var(--base-3)]">
          <div className="relative size-[var(--base-20)] overflow-hidden">
            <img
              alt="Konstantin Alisov"
              className="absolute left-[-6%] top-[-6%] size-[112%] max-w-none"
              src={imgPic}
            />
          </div>

          <div className="flex w-full flex-col items-center gap-[var(--base-1)] text-center">
            <h1
              className="text-[var(--text-primary)]"
              style={typeStyle(tokens.typography.heading.h4)}
            >
              Konstantin Alisov
            </h1>
            <p
              className="text-[var(--text-secondary)]"
              style={typeStyle(tokens.typography.body.medium)}
            >
              Product designer
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[var(--base-6)] text-center">
          <h2
            className="w-full text-[var(--text-primary)]"
            style={typeStyle(tokens.typography.heading.h1)}
          >
            Designing clarity
            <br />
            in complex systems
          </h2>

          <p
            className="max-w-[640px] text-[var(--text-primary)]"
            style={typeStyle(tokens.typography.body.medium)}
          >
            The industries changed, but the challenge stayed the same:
            <br />
            helping people understand what to do next.
          </p>
        </div>

        <HeroNavigation
          className="shrink-0"
          items={heroItems}
        />
      </section>
    </main>
  );
}
