"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function Musica() {
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

  const albums = [
    {
      id: 1,
      titulo: "IZNA",
      imagen:
        "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
    },
    {
      id: 2,
      titulo: "SING",
      imagen:
        "https://cdn.wake-one.com/wp-content/uploads/2025/04/03085641/izna_SIGN_cover_final-scaled.jpg",
      año: 2025,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (!selectedProfile) {
    return null
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-8">Música</h1>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {albums.map((album) => (
            <motion.div key={album.id} variants={item} whileHover={{ scale: 1.05 }} className="cursor-pointer group">
              <div className="relative aspect-square rounded-md overflow-hidden">
                <Image src={album.imagen || "/placeholder.svg"} alt={album.titulo} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white rounded-full p-3">
                    <Play className="text-black" size={24} />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{album.titulo}</h3>
                <p className="text-gray-400">{album.año}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
