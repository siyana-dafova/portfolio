"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/theme";

const ThemeToggle = () => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="cursor-pointer flex size-9 shrink-0 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
    >
      <Sun className="theme-toggle-sun size-4" aria-hidden />
      <Moon className="theme-toggle-moon hidden size-4" aria-hidden />
    </button>
  );
};

export default ThemeToggle;
