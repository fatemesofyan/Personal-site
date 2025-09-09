"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-primaryText-heading-dark" />
      ) : (
        <Moon
          className="w-6 h-6 text-primaryText-heading-light"
          strokeWidth={1.4}
        />
      )}
    </button>
  );
}
