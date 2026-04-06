import { createContext } from 'react';

// ─── Types ───────────────────────────────────────────────────────

export type ThemeType = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

// ─── Context ─────────────────────────────────────────────────────

// Giá trị mặc định là undefined buộc hook phải dùng trong Provider
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
