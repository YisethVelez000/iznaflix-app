'use client'

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

export default function Musica() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    const profile = localStorage.getItem("selectedProfile")
    if (!profile) {
      router.push("/")
    } else {
      setSelectedProfile(profile)
    }
  }, [router])

  const handlePlay = (trackUrl: string) => {
    if (currentTrack === trackUrl) {
      if (isPlaying) {
        audioRef.current?.pause()
      } else {
        audioRef.current?.play()
      }
    } else {
      setCurrentTrack(trackUrl)
      setTimeout(() => {
        audioRef.current?.play()
      }, 0)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTrack(null)
  }

  const albums = [
    {
      id: 1,
      titulo: "IZNA",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "/music/izna.mp3"
    },
    {
      id: 2,
      titulo: "TIMEBOMB",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "/music/TIMEBOMB.mp3"
    },
    {
      id: 3,
      titulo: "IWALY (Izna Version)",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "/music/iwaly-izna-version.mp3"
    },
    {
      id: 4,
      titulo: "DRIP",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "/music/DRIP.mp3"
    },
    {
      id: 5,
      titulo: "FAKE IT",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "/music/fake-it.mp3"
    },
    {
      id: 6,
      titulo: "SING",
      imagen: "https://cdn.wake-one.com/wp-content/uploads/2025/04/03085641/izna_SIGN_cover_final-scaled.jpg",
      año: 2025,
      album: "SING",
      audio: "/music/SIGN.mp3"
    },
    {
      id: 7,
      titulo: "SASS (Prod. THE HUB)",
      imagen: "https://images.genius.com/67c671503aad9686e3d37ba71eeed4e3.1000x1000x1.jpg",
      año: 2025,
      album: "월드 오브 스트릿 우먼 파이터 (WSWF) Original Vol.1",
      audio: "/music/sass.mp3"
    }
  ]

  const groupedAlbums = albums.reduce((acc, track) => {
    if (!acc[track.album]) {
      acc[track.album] = []
    }
    acc[track.album].push(track)
    return acc
  }, {} as Record<string, typeof albums>)

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

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => handleEnded()

    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("ended", onEnded)
    }
    // eslint-disable-next-line
  }, [currentTrack])

  if (!selectedProfile) return null

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Audio player oculto */}
      <audio
        ref={audioRef}
        src={currentTrack || undefined}
        style={{ display: "none" }}
        preload="auto"
      />

      <div className="pt-24 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-8">Música</h1>

        {Object.entries(groupedAlbums).map(([albumName, tracks]) => (
          <div key={albumName} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{albumName}</h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {tracks.map((track) => (
                <motion.div
                  key={track.id}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer group"
                  onClick={() => handlePlay(track.audio)}
                >
                  <div className="relative aspect-square rounded-md overflow-hidden">
                    <Image
                      src={track.imagen}
                      alt={track.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className={`bg-white rounded-full p-3 ${currentTrack === track.audio && isPlaying ? 'text-green-500' : 'text-black'}`}>
                        {currentTrack === track.audio && isPlaying ? (
                          <Pause className="fill-current" size={24} />
                        ) : (
                          <Play className="fill-current" size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold">{track.titulo}</h3>
                    <p className="text-gray-400">{track.año}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </main>
  )
}
