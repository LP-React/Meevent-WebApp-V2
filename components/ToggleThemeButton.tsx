"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <div className="block space-x-2">
        <button onClick={() => setTheme("light")} className="px-4 py-2 border-2">Light Mode</button>
        <button onClick={() => setTheme("dark")} className="px-4 py-2 border-2">Dark Mode</button>
      </div>
    </div>
  );
};
