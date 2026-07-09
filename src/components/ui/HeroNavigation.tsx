import type { HTMLAttributes } from "react";

import HeroActionGroup from "@/components/ui/HeroActionGroup";
import HeroButton from "@/components/ui/HeroButton";

const imgTile21 = "https://www.figma.com/api/mcp/asset/072bb412-f0a3-4d8f-ba78-ce9fe0761a60";

export interface HeroNavigationItem {
  id: string;
  label: string;
}

export interface HeroNavigationProps extends HTMLAttributes<HTMLElement> {
  items: HeroNavigationItem[];
  activeItem?: string;
  showPattern?: boolean;
}

function HeroPattern() {
  const positions = Array.from({ length: 49 }, (_, index) => {
    const row = Math.floor(index / 7);
    const col = index % 7;
    const x = (col - 3) * 34;
    const y = (row - 3) * 34;

    return { x, y };
  });

  return (
    <div className="relative mx-auto h-[260px] w-full max-w-[780px]" aria-hidden>
      {positions.map(({ x, y }, index) => (
        <img
          key={`${x}-${y}-${index}`}
          alt=""
          className="absolute size-[28px]"
          src={imgTile21}
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroNavigation({
  activeItem,
  className,
  items,
  showPattern = true,
  ...props
}: HeroNavigationProps) {
  return (
    <section
      {...props}
      className={["flex flex-col items-center gap-6 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]", className]
        .filter(Boolean)
        .join(" ")}
    >
      {showPattern ? <HeroPattern /> : null}

      <HeroActionGroup className="gap-3 sm:gap-4">
        {items.map((item) => (
          <HeroButton key={item.id} selected={item.id === activeItem} type="button">
            {item.label}
          </HeroButton>
        ))}
      </HeroActionGroup>
    </section>
  );
}
