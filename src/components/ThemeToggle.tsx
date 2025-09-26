"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Button from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="!w-8 !h-8 !flex !items-center !justify-center !rounded-full !bg-gray-100 dark:!bg-neutral-800"
    >
      {theme === "dark" ? (
        <MdLightMode className="w-4 h-4 text-black" />
      ) : (
        <MdDarkMode className="w-4 h-4 text-black" />
      )}
    </Button>
  );
}
