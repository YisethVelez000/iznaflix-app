"use client"

import { useState } from "react"
import { IznaflixLogo } from "./components/iznaflix-logo"
import { ArrowRight } from "lucide-react"
import Perfiles from "./components/perfiles"

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleContinue = () => {
    // Start the animation sequence
    setAnimationStarted(true)

    // Show content after animation completes (2 seconds later)
    setTimeout(() => {
      setShowContent(true)
    }, 2000)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden">
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Logo animation container */}
        <div
          className={`transition-all duration-1000 ease-in-out flex flex-col items-center ${
            animationStarted ? "scale-50 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <IznaflixLogo className="mb-16" />

          {!animationStarted && (
            <button 
              onClick={handleContinue}
              className="bg-netflix-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-sm text-lg transition-colors w-16 h-16 flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6 bg-transparent text-white" />
            </button>
          )}
        </div>

        {/* Content that appears after animation */}
        {showContent && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold mb-6">¿Quién está viendo?</h1>
              <Perfiles />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
