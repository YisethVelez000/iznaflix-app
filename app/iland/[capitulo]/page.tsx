"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Navbar from "../../../components/navbar"
import { motion } from "framer-motion"
import React from "react"

export default function ILand() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const router = useRouter()
  const params = useParams()
  const chapter = params.capitulo as string

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

  // Map of chapter numbers to video IDs
  const videoMap: { [key: string]: string } = {
    "1": "https://ok.ru/videoembed/7200898026057",
    "2": "https://ok.ru/videoembed/7230709434953",
    "3": "https://ok.ru/videoembed/7247427340873",
    "4": "https://fkplayer.xyz/e/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rIjoiYUhSMGNITTZMeTl6ZDJodmFTNWpiMjB2WlM4eE0za3lPVGt6ZFc5amNuRT0iLCJzZXJ2ZXIiOiIzODU4NSIsImFwcCI6ImNvbS5hc2lhcHAuZG9yYW1hc2dvIiwiaWF0IjoxNzQ2ODM5MzQwLCJleHAiOjE3NDcwOTg1NDB9.G9NMIF2EIzz4obIui6pr78oGc57wi4zjBCZZ-_vG-yU",
    "5": "https://ok.ru/videoembed/7397233592905",
    "6": "https://ok.ru/videoembed/7413951301865",
    "7": "https://ok.ru/videoembed/7348167969353",
    "8": "https://ok.ru/videoembed/7353166203465",
    "9": "https://ok.ru/videoembed/7397233592905",
    "10": "https://ok.ru/videoembed/7436476811849",
    "11": "https://strwish.com/e/5pjhqbip3sc3",
    "12": "https://ok.ru/videoembed/7547944503881"
  }

  const videoUrl = videoMap[chapter] || videoMap["1"] // Default to chapter 1 if chapter not found

  const handleEpisodeClick = (episodeNumber: string) => {
    router.push(`/iland/${episodeNumber}`)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-8">iLand - Capítulo {chapter}</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-video relative rounded-lg overflow-hidden"
        >
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title={`iLand 2 Capítulo ${chapter}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </motion.div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Episodios</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((episode) => (
              <button
                key={episode}
                onClick={() => handleEpisodeClick(episode.toString())}
                className={`p-4 rounded-lg text-center transition-all duration-200 ${
                  chapter === episode.toString()
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                Episodio {episode}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
