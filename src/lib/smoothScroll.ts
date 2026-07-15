const easeIn = (progress: number) => progress * progress;

export function scrollToElementById(id: string, duration = 150) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const html = document.documentElement;
  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + window.scrollY;
  const distance = target - start;
  const startTime = performance.now();

  html.classList.add("no-smooth-scroll");

  function tick(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const nextY = start + distance * easeIn(progress);

    window.scrollTo({ top: nextY, left: 0, behavior: "auto" });

    if (progress < 1) {
      window.requestAnimationFrame(tick);
      return;
    }

    html.classList.remove("no-smooth-scroll");
  }

  window.requestAnimationFrame(tick);
}
