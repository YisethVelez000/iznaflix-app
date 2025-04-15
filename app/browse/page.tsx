"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "../../components/navbar"
import FeaturedContent from "../../components/featured-content"
import Recommendations from "../../components/recommendations"
import React from "react"

export default function Browse() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Verificar si hay un perfil seleccionado
    const profile = localStorage.getItem("selectedProfile")
    if (!profile) {
      router.push("/")
    } else {
      setSelectedProfile(profile)
    }
  }, [router])

  if (!selectedProfile) {
    return null
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <FeaturedContent />
      <Recommendations />
    </main>
  )
}
