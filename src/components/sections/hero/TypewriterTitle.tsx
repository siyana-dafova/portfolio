"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type TypewriterTitleProps = {
  titles: string[];
  className?: string;
};

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

const subscribeReducedMotion = (onStoreChange: () => void) => {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
};

const getReducedMotionSnapshot = () =>
  window.matchMedia(reducedMotionQuery).matches;

const getReducedMotionServerSnapshot = () => false;

const TypewriterTitle = ({ titles, className }: TypewriterTitleProps) => {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = titles[titleIndex] ?? "";
  const longestTitle = titles.reduce(
    (longest, title) => (title.length > longest.length ? title : longest),
    "",
  );
  const displayedTitle = prefersReducedMotion
    ? currentTitle
    : currentTitle.slice(0, charIndex);

  useEffect(() => {
    if (titles.length === 0) {
      return;
    }

    if (prefersReducedMotion) {
      const timeout = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2500);

      return () => clearTimeout(timeout);
    }

    const typingSpeed = isDeleting ? 45 : 85;
    const pauseAtEnd = 1600;
    const pauseAtStart = 350;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, pauseAtStart);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    currentTitle.length,
    isDeleting,
    prefersReducedMotion,
    titleIndex,
    titles,
  ]);

  return (
    <p className={className} aria-label={currentTitle}>
      <span className="relative inline-block">
        <span className="invisible whitespace-nowrap" aria-hidden>
          {longestTitle}
        </span>
        <span className="absolute inset-x-0 top-0 whitespace-nowrap">
          {displayedTitle}
          <span className="ml-0.5 inline-block animate-pulse" aria-hidden>
            |
          </span>
        </span>
      </span>
    </p>
  );
};

export default TypewriterTitle;
