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
      title: "Música destacada",
      items: [
        {
          id: 1,
          title: "IZNA",
          image:
            "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
          link: "/musica",
        },
        {
          id: 2,
          title: "SING",
          image:
            "https://cdn.wake-one.com/wp-content/uploads/2025/04/03085641/izna_SIGN_cover_final-scaled.jpg",
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
        {
          id: 4,
          title: "Episodio 4",
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
