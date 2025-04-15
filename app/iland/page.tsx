"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "../../components/navbar"
import { motion } from "framer-motion"
import React from "react"

export default function ILand() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
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

      <div className="pt-24 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-8">iLand</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-video relative rounded-lg overflow-hidden"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://fkplayer.xyz/e/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rIjoiYUhSMGNITTZMeTkyYjJVdWMzZ3ZaUzlvT0ROcU5YTTFkbVUwYm5FPSIsInNlcnZlciI6IjEyMzAiLCJhcHAiOiJjb20uYXNpYXBwLmRvcmFtYXNnbyIsImlhdCI6MTc0NDcyNjc2NywiZXhwIjoxNzQ0OTg1OTY3fQ.DHzqK257ovHukzloKGxBk0oEUT-nJOQ-j5_Vcyz1f4M"
            title="iLand Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </motion.div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Sobre iLand</h2>
          <p className="text-gray-300 max-w-3xl">
            iLand es un programa de supervivencia de K-pop donde las participantes compiten por un lugar en el grupo
            final. Sigue el viaje de las miembros de IZNA desde sus inicios en el programa hasta su debut.
          </p>
        </div>
      </div>
    </main>
  )
}
