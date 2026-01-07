import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // No runtime theme management — app will use CSS variables in :root only.
  return <>{children}</>;
}
