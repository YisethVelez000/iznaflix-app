"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Cuando el componente se monta, marcamos que está listo para renderizar
  useEffect(() => {
    setMounted(true)
  }, [])

  // No renderizamos nada hasta que el componente esté montado para evitar errores de hidratación
  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-gray-800 text-white"
    >
      {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
    </button>
  )
}
