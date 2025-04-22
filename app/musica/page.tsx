'use client'

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

declare global {
  interface Window {
    SC: any
  }
}

export default function Musica() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const widgetRef = useRef<any>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    const profile = localStorage.getItem("selectedProfile")
    if (!profile) {
      router.push("/")
    } else {
      setSelectedProfile(profile)
    }

    if (typeof window === "undefined") return

    const script = document.createElement("script")
    script.src = "https://w.soundcloud.com/player/api.js"
    script.async = true
    document.body.appendChild(script)

    const cleanup = () => {
      try {
        if (widgetRef.current && iframeRef.current?.contentWindow) {
          widgetRef.current.unbind(window.SC.Widget.Events.PLAY)
          widgetRef.current.unbind(window.SC.Widget.Events.PAUSE)
          widgetRef.current.unbind(window.SC.Widget.Events.FINISH)
          widgetRef.current = null
        }
      } catch (error) {
        console.warn("Error durante limpieza del widget:", error)
      }
    }

    script.onload = () => {
      const checkWidgetReady = setInterval(() => {
        if (window.SC && window.SC.Widget && iframeRef.current) {
          clearInterval(checkWidgetReady)

          widgetRef.current = window.SC.Widget(iframeRef.current)

          widgetRef.current.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true))
          widgetRef.current.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false))
          widgetRef.current.bind(window.SC.Widget.Events.FINISH, () => {
            setIsPlaying(false)
            setCurrentTrack(null)
          })
        }
      }, 100)
    }

    return () => {
      cleanup()
      document.body.removeChild(script)
    }
  }, [router])

  const handlePlay = (trackUrl: string) => {
    if (!widgetRef.current) {
      console.log("Widget no está listo aún.")
      return
    }

    if (currentTrack === trackUrl) {
      widgetRef.current.toggle()
    } else {
      setCurrentTrack(trackUrl)
      widgetRef.current.load(trackUrl, {
        auto_play: true,
        visual: false,
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_artwork: false,
      })
    }
  }

  const albums = [
    {
      id: 1,
      titulo: "IZNA",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "https://soundcloud.com/izna-music/izna"
    },
    {
      id: 2,
      titulo: "TIMEBOMB",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "https://soundcloud.com/izna-music/timebomb"
    },
    {
      id: 3,
      titulo: "IWALY (Izna Version)",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "https://soundcloud.com/izna-music/iwaly-izna-version"
    },
    {
      id: 4,
      titulo: "DRIP",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "https://soundcloud.com/izna-music/drip"
    },
    {
      id: 5,
      titulo: "FAKE IT",
      imagen: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
      año: 2024,
      album: "N/a",
      audio: "https://soundcloud.com/izna-music/fake-it"
    },
    {
      id: 6,
      titulo: "SING",
      imagen: "https://cdn.wake-one.com/wp-content/uploads/2025/04/03085641/izna_SIGN_cover_final-scaled.jpg",
      año: 2025,
      album: "SING",
      audio: "https://api.soundcloud.com/tracks/2062860472"
    },
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

  if (!selectedProfile) return null

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Iframe oculto pero funcional */}
      <iframe
        ref={iframeRef}
        style={{ position: "absolute", left: "-9999px" }}
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url="
      ></iframe>

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
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-current animate-pulse"></div>
                            <div className="w-1 h-4 bg-current animate-pulse delay-100"></div>
                            <div className="w-1 h-4 bg-current animate-pulse delay-200"></div>
                          </div>
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
