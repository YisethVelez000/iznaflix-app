"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface NetflixIntroProps {
  onComplete: () => void
}

export default function NetflixIntro({ onComplete }: NetflixIntroProps) {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStep(1)

      const completeTimer = setTimeout(() => {
        onComplete()
      }, 4000)

      return () => clearTimeout(completeTimer)
    }, 1000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationStep === 0 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute"
      >
        <div className="text-4xl font-bold text-red-600">IZNAFLIX</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: animationStep === 1 ? 1 : 0,
          scale: animationStep === 1 ? 1 : 0.8,
        }}
        transition={{ duration: 1 }}
        className="absolute"
      >
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold text-red-600 mb-4">IZNAFLIX</div>
          <div className="text-white text-xl">ORIGINAL</div>
        </div>
      </motion.div>
    </div>
  )
}
