"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProfileSelectionProps {
  onProfileSelect: (nombre: string) => void
}

export default function ProfileSelection({ onProfileSelect }: ProfileSelectionProps) {
  const perfiles = [
    { nombre: "Koko", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102236/%EC%BD%94%EC%BD%94-1.jpg" },
    {
      nombre: "Jiyoon",
      img: "https://cdn.wake-one.com/wp-content/uploads/2024/11/28163151/%EC%9C%A4%EC%A7%80%EC%9C%A4.jpg",
    },
    {
      nombre: "Jeemin",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102212/%EB%B0%A9%EC%A7%80%EB%AF%BC-1.jpg",
    },
    {
      nombre: "Jungeun",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102256/%EC%B5%9C%EC%A0%95%EC%9D%80-1.jpg",
    },
    {
      nombre: "Sarang",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102244/%EC%9C%A0%EC%82%AC%EB%9E%91-1.jpg",
    },
    { nombre: "Mai", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102202/%EB%A7%88%EC%9D%B4-1.jpg" },
    {
      nombre: "Saebi",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102307/%EC%A0%95%EC%84%B8%EB%B9%84-1.jpg",
    },
    {
      nombre: "IZNA",
      img: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
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

  const navItems = [
    { name: "Miembros", path: "/miembros", description: "Conoce a todos los miembros de IZNA" },
    { name: "Música", path: "/musica", description: "Escucha los últimos lanzamientos" },
    { name: "iLand", path: "/iland", description: "Revive el programa que los formó" },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <h1 className="text-white text-4xl mb-10">¿Quién está viendo?</h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {perfiles.map((perfil, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => onProfileSelect(perfil.nombre.toLowerCase())}
            variants={item}
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-md mb-2 border-2 border-transparent group-hover:border-white">
              <Image src={perfil.img || "/placeholder.svg"} alt={perfil.nombre} fill className="object-cover" />
            </div>
            <span className="text-gray-400 group-hover:text-white">{perfil.nombre}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Sección de navegación alternativa */}
      <motion.div
        className="mt-20 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-white text-2xl mb-6 text-center">Explora IZNAFLIX</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/60 rounded-lg p-6 cursor-pointer hover:bg-gray-800/60 transition-colors"
              whileHover={{ scale: 1.03 }}
              onClick={() => {
                // Seleccionar IZNA como perfil por defecto si el usuario hace clic en un enlace sin seleccionar perfil
                onProfileSelect("izna")
                // La redirección a la página específica ocurrirá después de establecer el perfil
              }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
