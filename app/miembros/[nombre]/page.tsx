"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import {
  TbZodiacScorpio,
  TbZodiacCancer,
  TbZodiacTaurus,
  TbZodiacLeo,
  TbZodiacAries,
  TbZodiacAquarius,
} from "react-icons/tb"
import React from "react"

export default function MiembroDetalle() {
  const params = useParams()
  const router = useRouter()
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const [miembro, setMiembro] = useState<any | null>(null)

  useEffect(() => {
    const profile = localStorage.getItem("selectedProfile")
    if (!profile) {
      router.push("/")
    } else {
      setSelectedProfile(profile)
    }

    // Buscar el miembro según el nombre en la URL
    const nombreMiembro = params.nombre as string
    const miembroEncontrado = perfiles.find((p) => p.nombre.toLowerCase() === nombreMiembro.toLowerCase())

    if (miembroEncontrado) {
      setMiembro(miembroEncontrado)
    } else {
      router.push("/miembros")
    }
  }, [params.nombre, router])

  if (!selectedProfile || !miembro) {
    return null
  }

  // Calcular edad
  const calcularEdad = (fechaNacimiento: Date | null) => {
    if (!fechaNacimiento) return "N/A"
    const hoy = new Date()
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    const m = hoy.getMonth() - fechaNacimiento.getMonth()
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--
    }
    return edad
  }

  // Renderizar el icono del signo zodiacal
  const renderIconoSigno = () => {
    if (!miembro.signoSodiacal) return null

    switch (miembro.signoSodiacal.toLowerCase()) {
      case "escorpio":
        return <TbZodiacScorpio className="mt-2" size={24} />
      case "cáncer":
        return <TbZodiacCancer className="mt-2" size={24} />
      case "tauro":
        return <TbZodiacTaurus className="mt-2" size={24} />
      case "leo":
        return <TbZodiacLeo className="mt-2" size={24} />
      case "aries":
        return <TbZodiacAries className="mt-2" size={24} />
      case "acuario":
        return <TbZodiacAquarius className="mt-2" size={24} />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-16">
        <div className="px-6 md:px-12 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[300px_1fr] gap-8"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image src={miembro.imagen || "/placeholder.svg"} alt={miembro.nombre} fill className="object-cover" />
            </div>

            <div>
              <h1 className="text-4xl font-bold capitalize mb-4">{miembro.nombre}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Información Personal</h2>

                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400">Fecha de Nacimiento:</span>
                        <div>{miembro.fechaNacimiento ? new Date(miembro.fechaNacimiento).toISOString().split('T')[0] : "N/A"}</div>
                    </div>

                    <div>
                      <span className="text-gray-400">Edad:</span>
                      <div>{calcularEdad(miembro.fechaNacimiento)}</div>
                    </div>

                    <div>
                      <span className="text-gray-400">Nacionalidad:</span>
                      <div>{miembro.nacionalidad || "N/A"}</div>
                    </div>

                    <div>
                      <span className="text-gray-400">MBTI:</span>
                      <div>{miembro.mbti || "N/A"}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Preferencias</h2>

                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400">Color Favorito:</span>
                      <div>{miembro.colorFavorito || "N/A"}</div>
                    </div>

                    <div>
                      <span className="text-gray-400">Signo Zodiacal:</span>
                      <div className="flex items-center">
                        {miembro.signoSodiacal || "N/A"}
                        {renderIconoSigno()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

// Array de perfiles
const perfiles = [
  {
    id: 1,
    nombre: "koko",
    video: "https://www.youtube-nocookie.com/embed/5Q3Tj1BmcmQ?si=bRwsU5iHi2f0ixiI&controls=0",
    imagen: "https://www.mnetplus.world/static/images/uploaded/68d5bfd1-2cfd-4efb-813b-7354ece157ec?webp=1&w=1240",
    fechaNacimiento: new Date("2006-11-14"),
    mbti: "ESFJ",
    nacionalidad: "Japonesa",
    signoSodiacal: "Escorpio",
    colorFavorito: "Morado",
    iconoSigno: <TbZodiacScorpio className="mt-2" />,
  },
  {
    id: 2,
    nombre: "jiyoon",
    video: "https://www.youtube.com/embed/aBmFsHttSsI?si=PgavV9Nt-5ADYAOC&controls=0",
    imagen: "https://www.mnetplus.world/static/images/uploaded/d78c3879-bbe8-413d-b651-4fbbd97ac689?webp=1&w=1240",
    fechaNacimiento: new Date("2005-07-14"),
    mbti: "INFP",
    nacionalidad: "Coreana",
    signoSodiacal: "Cáncer",
    colorFavorito: "Negro",
    iconoSigno: <TbZodiacCancer className="mt-2" />,
  },
  {
    id: 3,
    nombre: "jeemin",
    video: "https://www.youtube.com/embed/0qGWGJZMa5I?si=NvEiKff8gaSwrmIpI&controls=0",
    imagen: "https://www.mnetplus.world/static/images/uploaded/b69e7fa0-ba57-4645-ba91-a5fe72e7b61e?webp=1&w=1240",
    fechaNacimiento: new Date("2005-05-08"),
    mbti: "INFP",
    nacionalidad: "Coreana",
    signoSodiacal: "Tauro",
    colorFavorito: "Azul cielo",
    iconoSigno: <TbZodiacTaurus className="mt-2" />,
  },
  {
    id: 4,
    nombre: "jungeun",
    video: "https://www.youtube-nocookie.com/embed/4V_OFp6XszQ?si=X2uVFyu1huV9hxOu&controls=0",
    imagen: "https://www.mnetplus.world/static/images/uploaded/5846e9b7-442e-4f86-ad4d-abbfc349c2b6?webp=1&w=1240",
    fechaNacimiento: new Date("2007-08-04"),
    mbti: "ISFJ",
    nacionalidad: "Coreana",
    signoSodiacal: "Leo",
    colorFavorito: "Negro",
    iconoSigno: <TbZodiacLeo className="mt-2" />,
  },
  {
    id: 5,
    nombre: "sarang",
    video: "https://www.youtube-nocookie.com/embed/D666i2Xb4r0?si=zv-g4iRNpJ_uMLJ2&amp;controls=0",
    imagen: "https://www.mnetplus.world/static/images/uploaded/879a1606-d93d-4892-9028-ce0b09b72197?webp=1&w=1240",
    fechaNacimiento: new Date("2007-04-18"),
    mbti: "INFP",
    nacionalidad: "Coreana",
    signoSodiacal: "Aries",
    colorFavorito: "Púrpura pálido y azul cielo",
    iconoSigno: <TbZodiacAries className="mt-2" />,
  },
  {
    id: 6,
    nombre: "mai",
    video: "https://www.youtube-nocookie.com/embed/2DlN9XlNKW0?si=zdpOh45SixE0A0Wi&amp;controls=0",
    imagen: "https://www.mnetplus.world/static/images/uploaded/f7f85a7d-ec9e-4052-9388-27c20ff35b01?webp=1&w=1240",
    fechaNacimiento: new Date("2004-10-28"),
    mbti: "ISTP",
    nacionalidad: "Japonesa",
    signoSodiacal: "Escorpio",
    colorFavorito: "Rosa fuerte",
    iconoSigno: <TbZodiacScorpio className="mt-2" />,
  },
  {
    id: 7,
    nombre: "saebi",
    video: "https://www.youtube-nocookie.com/embed/cT892fyv-ts?si=LzRw2I7cSuQGOOpf&amp;controls=0",
    imagen: "https://www.mnetplus.world/static/images/uploaded/425ac1be-8517-4119-be4f-9f4a8af350a1?webp=1&w=1240",
    fechaNacimiento: new Date("2008-01-22"),
    mbti: "ENFP",
    nacionalidad: "Coreana",
    signoSodiacal: "Acuario",
    colorFavorito: "Rojo y rosa",
    iconoSigno: <TbZodiacAquarius className="mt-2" />,
  },
  {
    id: null,
    nombre: "izna",
    video: "",
    imagen:
      "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
    fechaNacimiento: null,
    mbti: null,
    nacionalidad: null,
    signoSodiacal: null,
    colorFavorito: null,
    iconoSigno: null,
  },
]
