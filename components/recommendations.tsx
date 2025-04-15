"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Category {
  title: string
  items: {
    id: number
    title: string
    image: string
    link: string
  }[]
}

export default function Recommendations() {
  const [categories, setCategories] = useState<Category[]>([
    {
      title: "Miembros populares",
      items: [
        {
          id: 1,
          title: "Koko",
          image: "https://www.mnetplus.world/static/images/uploaded/68d5bfd1-2cfd-4efb-813b-7354ece157ec?webp=1&w=1240",
          link: "/miembros/koko",
        },
        {
          id: 2,
          title: "Jiyoon",
          image: "https://www.mnetplus.world/static/images/uploaded/d78c3879-bbe8-413d-b651-4fbbd97ac689?webp=1&w=1240",
          link: "/miembros/jiyoon",
        },
        {
          id: 3,
          title: "Jeemin",
          image: "https://www.mnetplus.world/static/images/uploaded/b69e7fa0-ba57-4645-ba91-a5fe72e7b61e?webp=1&w=1240",
          link: "/miembros/jeemin",
        },
        {
          id: 4,
          title: "Jungeun",
          image: "https://www.mnetplus.world/static/images/uploaded/5846e9b7-442e-4f86-ad4d-abbfc349c2b6?webp=1&w=1240",
          link: "/miembros/jungeun",
        },
      ],
    },
    {
      title: "Música destacada",
      items: [
        {
          id: 1,
          title: "IZNA - Debut Single",
          image:
            "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
          link: "/musica",
        },
        {
          id: 2,
          title: "IZNA - The First Step",
          image:
            "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
          link: "/musica",
        },
        {
          id: 3,
          title: "IZNA - Live Performance",
          image:
            "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
          link: "/musica",
        },
      ],
    },
    {
      title: "Episodios de iLand",
      items: [
        {
          id: 1,
          title: "Episodio 1",
          image: "/placeholder.svg?height=400&width=600",
          link: "/iland",
        },
        {
          id: 2,
          title: "Episodio 2",
          image: "/placeholder.svg?height=400&width=600",
          link: "/iland",
        },
        {
          id: 3,
          title: "Episodio 3",
          image: "/placeholder.svg?height=400&width=600",
          link: "/iland",
        },
      ],
    },
  ])

  return (
    <div className="px-6 md:px-12 py-8">
      {categories.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.items.map((item) => (
              <Link key={item.id} href={item.link}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-video rounded-md overflow-hidden cursor-pointer"
                >
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
