import { useEffect, useState } from 'react';
import { ThemeContext } from '@/contexts/theme-context';
import type { ThemeType } from '@/contexts/theme-context';

// ─── Provider ───────────────────────────────────────────────────
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme ] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // React 19: truyền trực tiếp không cần useMemo
  // React Compiler sẽ tự động memoize nếu cần
  return (
    <ThemeContext value={{theme, setTheme}}>
      {children}
    </ThemeContext>
  );
};
