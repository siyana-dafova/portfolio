export function getHashId(href: string): string | null {
  if (!href.startsWith("#") || href.length < 2) {
    return null;
  }

  return decodeURIComponent(href.slice(1));
}

export function scrollToHash(hash: string, behavior?: ScrollBehavior): boolean {
  const id = getHashId(hash.startsWith("#") ? hash : `#${hash}`);
  if (!id) {
    return false;
  }

  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  element.scrollIntoView({
    behavior: behavior ?? (prefersReducedMotion ? "auto" : "smooth"),
    block: "start",
  });

  return true;
}
