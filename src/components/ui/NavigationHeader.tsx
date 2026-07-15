"use client";

import { useEffect, useRef, useState } from "react";

import NaviButton from "@/components/ui/NaviButton";
import { tokens } from "@/styles/tokens";

const avatarSrc =
  "https://www.figma.com/api/mcp/asset/e5020a98-a072-41b3-b1d3-4ba98badad16";

const navigationItems = [
  { label: "Capabilities", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV", href: "#cv" },
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

export interface NavigationHeaderProps {
  heroId?: string;
}

export default function NavigationHeader({
  heroId = "hero",
}: NavigationHeaderProps) {
  const [animationState, setAnimationState] = useState<
    "hidden" | "entering" | "exiting"
  >("hidden");
  const isVisibleRef = useRef(false);
  const exitTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let frame = 0;

    const clearExitTimeout = () => {
      if (exitTimeoutRef.current === null) {
        return;
      }

      window.clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    };

    const updateVisibility = () => {
      frame = 0;

      const hero = document.getElementById(heroId);

      if (!hero) {
        isVisibleRef.current = false;
        clearExitTimeout();
        setAnimationState("hidden");
        return;
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const shouldBeVisible = window.scrollY >= heroBottom;

      if (shouldBeVisible === isVisibleRef.current) {
        return;
      }

      isVisibleRef.current = shouldBeVisible;
      clearExitTimeout();

      if (shouldBeVisible) {
        setAnimationState("entering");
        return;
      }

      setAnimationState("exiting");
      exitTimeoutRef.current = window.setTimeout(() => {
        exitTimeoutRef.current = null;
        setAnimationState("hidden");
      }, 150);
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      clearExitTimeout();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [heroId]);

  if (animationState === "hidden") {
    return null;
  }

  return (
    <header
      className={[
        "fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center px-[var(--padding-side)] py-5",
        animationState === "entering"
          ? "navigation-header-enter"
          : "navigation-header-exit pointer-events-none",
      ].join(" ")}
    >
      <nav
        aria-label="Primary"
        className="flex h-24 w-full max-w-[var(--container-max)] items-center justify-between gap-[var(--base-6)] rounded-[var(--pill)] border border-[var(--text-tertiary)] bg-[var(--bg-beige-light)] px-[var(--base-6)] py-[var(--base-4)]"
      >
        <a
          className="flex min-w-0 shrink-0 items-center gap-[var(--base-3)] text-[var(--text-primary)] no-underline"
          href="#hero"
        >
          <span className="relative size-16 shrink-0 overflow-hidden">
            <img
              alt="Konstantin Alisov"
              className="absolute left-[-6%] top-[-6%] size-[112%] max-w-none object-cover"
              src={avatarSrc}
            />
          </span>

          <span className="hidden w-[172px] min-w-0 flex-col gap-0 sm:flex">
            <span
              className="truncate text-[var(--text-primary)]"
              style={typeStyle(tokens.typography.body.medium)}
            >
              Konstantin Alisov
            </span>
            <span
              className="truncate text-[var(--text-secondary)]"
              style={typeStyle(tokens.typography.body.small)}
            >
              Product designer
            </span>
          </span>
        </a>

        <div className="hidden shrink-0 items-center gap-[var(--base-3)] md:flex">
          {navigationItems.map((item) => (
            <NaviButton
              href={item.href}
              key={item.label}
            >
              {item.label}
            </NaviButton>
          ))}
        </div>
      </nav>
    </header>
  );
}
