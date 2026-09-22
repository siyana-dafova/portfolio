"use client";

import { useEffect } from "react";
import { scrollToHash } from "@/lib/scroll-to-hash";

const InPageHashScroll = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (anchor.target === "_blank") {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#")) {
        return;
      }

      if (!scrollToHash(href)) {
        return;
      }

      event.preventDefault();

      if (window.location.hash !== href) {
        history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    const { hash } = window.location;
    if (!hash) {
      return;
    }

    const timeout = window.setTimeout(() => {
      scrollToHash(hash, "auto");
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
};

export default InPageHashScroll;
