"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
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
