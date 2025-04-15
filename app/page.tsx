"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import NetflixIntro from "@/components/netflix-intro"
import ProfileSelection from "@/components/profile-selection"

export default function Home() {
  const [introCompleted, setIntroCompleted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Si ya hay un perfil seleccionado en localStorage, redirigir a la página principal
    const selectedProfile = localStorage.getItem("selectedProfile")
    if (selectedProfile) {
      router.push("/browse")
    }
  }, [router])

  const handleIntroComplete = () => {
    setIntroCompleted(true)
  }

  const handleProfileSelect = (nombre: string) => {
    localStorage.setItem("selectedProfile", nombre)
    router.push("/browse")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      {!introCompleted ? (
        <NetflixIntro onComplete={handleIntroComplete} />
      ) : (
        <ProfileSelection onProfileSelect={handleProfileSelect} />
      )}
    </main>
  )
}
