"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Usar suppressHydrationWarning para evitar advertencias de hidratación
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
