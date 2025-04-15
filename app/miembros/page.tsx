"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"

export default function Miembros() {
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

  const perfiles = [
    {
      id: 1,
      nombre: "koko",
      imagen: "https://www.mnetplus.world/static/images/uploaded/68d5bfd1-2cfd-4efb-813b-7354ece157ec?webp=1&w=1240",
    },
    {
      id: 2,
      nombre: "jiyoon",
      imagen: "https://www.mnetplus.world/static/images/uploaded/d78c3879-bbe8-413d-b651-4fbbd97ac689?webp=1&w=1240",
    },
    {
      id: 3,
      nombre: "jeemin",
      imagen: "https://www.mnetplus.world/static/images/uploaded/b69e7fa0-ba57-4645-ba91-a5fe72e7b61e?webp=1&w=1240",
    },
    {
      id: 4,
      nombre: "jungeun",
      imagen: "https://www.mnetplus.world/static/images/uploaded/5846e9b7-442e-4f86-ad4d-abbfc349c2b6?webp=1&w=1240",
    },
    {
      id: 5,
      nombre: "sarang",
      imagen: "https://www.mnetplus.world/static/images/uploaded/879a1606-d93d-4892-9028-ce0b09b72197?webp=1&w=1240",
    },
    {
      id: 6,
      nombre: "mai",
      imagen: "https://www.mnetplus.world/static/images/uploaded/f7f85a7d-ec9e-4052-9388-27c20ff35b01?webp=1&w=1240",
    },
    {
      id: 7,
      nombre: "saebi",
      imagen: "https://www.mnetplus.world/static/images/uploaded/425ac1be-8517-4119-be4f-9f4a8af350a1?webp=1&w=1240",
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
        <h1 className="text-4xl font-bold mb-8">Miembros</h1>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {perfiles.map((perfil) => (
            <motion.div key={perfil.id} variants={item} whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <Link href={`/miembros/${perfil.nombre}`}>
                <div className="relative aspect-[2/3] rounded-md overflow-hidden">
                  <Image src={perfil.imagen || "/placeholder.svg"} alt={perfil.nombre} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <h3 className="text-xl font-semibold capitalize">{perfil.nombre}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
