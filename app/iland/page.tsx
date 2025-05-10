"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "../../components/navbar"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ILandEpisodes() {
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

  const episodes = [
    {
      id: 1,
      title: "Episodio 1"
    },
    {
      id: 2,
      title: "Episodio 2"
    },
    {
      id: 3,
      title: "Episodio 3"
    },
    {
      id: 4,
      title: "Episodio 4"
    },
    {
      id: 5,
      title: "Episodio 5"
    },
    {
      id: 6,
      title: "Episodio 6"
    },
    {
      id: 7,
      title: "Episodio 7"
    },
    {
      id: 8,
      title: "Episodio 8"
    },
    {
      id: 9,
      title: "Episodio 9"
    },
    {
      id: 10,
      title: "Episodio 10"
    },
    {
      id: 11,
      title: "Episodio 11"
    },
    {
      id: 12,
      title: "Episodio 12"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 px-6 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">iLand 2 - Todos los Episodios</h1>
          <a
            href="https://wake-one.com/en/artists/izna/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Más Información
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {episodes.map((episode) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => router.push(`/iland/${episode.id}`)}
            >
              <div className="relative h-48">
                <Image
                  src="https://1.vikiplatform.com/c/40506c/c1a9417e68.jpg?x=b&s=960x540&e=t&q=g"
                  alt={episode.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{episode.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
