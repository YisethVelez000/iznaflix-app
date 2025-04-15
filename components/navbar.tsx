"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const profile = localStorage.getItem("selectedProfile")
    if (profile) {
      setSelectedProfile(profile)
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("selectedProfile")
    router.push("/")
  }

  const navItems = [
    { name: "Inicio", path: "/browse" },
    { name: "Miembros", path: "/miembros" },
    { name: "Música", path: "/musica" },
    { name: "iLand-2", path: "/iland" },
  ]

  return (
    <motion.nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 py-4 px-6",
        scrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/browse" className="text-red-600 font-bold text-3xl">
            IZNAFLIX
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-white hover:text-gray-300 transition-colors",
                  pathname === item.path && "font-bold text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {selectedProfile && (
            <div className="flex items-center cursor-pointer group" onClick={handleLogout}>
              <span className="mr-2 text-white group-hover:text-gray-300">
                {selectedProfile.charAt(0).toUpperCase() + selectedProfile.slice(1)}
              </span>
              <div className="w-8 h-8 rounded-md overflow-hidden">
                <Image
                  src={getProfileImage(selectedProfile) || "/placeholder.svg"}
                  alt={selectedProfile}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden mt-4 bg-black/90 rounded-md p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-white hover:text-gray-300 transition-colors py-2",
                  pathname === item.path && "font-bold text-white",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function getProfileImage(nombre: string): string {
  const perfiles = [
    { nombre: "koko", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102236/%EC%BD%94%EC%BD%94-1.jpg" },
    {
      nombre: "jiyoon",
      img: "https://cdn.wake-one.com/wp-content/uploads/2024/11/28163151/%EC%9C%A4%EC%A7%80%EC%9C%A4.jpg",
    },
    {
      nombre: "jeemin",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102212/%EB%B0%A9%EC%A7%80%EB%AF%BC-1.jpg",
    },
    {
      nombre: "jungeun",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102256/%EC%B5%9C%EC%A0%95%EC%9D%80-1.jpg",
    },
    {
      nombre: "sarang",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102244/%EC%9C%A0%EC%82%AC%EB%9E%91-1.jpg",
    },
    { nombre: "mai", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102202/%EB%A7%88%EC%9D%B4-1.jpg" },
    {
      nombre: "saebi",
      img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102307/%EC%A0%95%EC%84%B8%EB%B9%84-1.jpg",
    },
    {
      nombre: "izna",
      img: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
    },
  ]

  const perfil = perfiles.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase())
  return perfil ? perfil.img : "/placeholder.svg"
}
