"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

export default function FeaturedContent() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  useEffect(() => {
    const profile = localStorage.getItem("selectedProfile");
    if (profile) {
      setSelectedProfile(profile);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-[40vh] md:h-[80vh] relative">
        <Image
          src="https://lh3.googleusercontent.com/X8ImVtBIl5y-ixd4p-NMDUBls1fmFm9-aNXEaQc51D79sjP-vRTuycy_dExSQCQ5QWCCaqxotNBhdyU=w2880-h1200-p-l90-rj"
          alt="IZNA"
          fill
          className="object-contain object-center"
          priority
          sizes="100vw"
        />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <motion.div
          className="hidden md:flex absolute z-20 flex-col justify-end h-full pb-20 px-6 md:px-12 top-0 left-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">IZNA</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
            Descubre todo sobre IZNA, el nuevo grupo de K-pop formado por Koko,
            Jiyoon, Jeemin, Jungeun, Sarang, Mai y Saebi.
          </p>

          <div className="flex space-x-4">
            <Button className="flex items-center gap-2 bg-white text-black hover:bg-white/90">
              <Play size={20} />
              Reproducir
            </Button>
            <a
              href="https://wake-one.com/en/artists/izna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-gray-700/60 text-white border-none hover:bg-gray-700/80"
              >
                <Info size={20} />
                Más información
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex md:hidden flex-col mt-5 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">IZNA</h1>
        <p className="text-white text-lg max-w-2xl mb-6">
          Descubre todo sobre IZNA, el nuevo grupo de K-pop formado por Koko,
          Jiyoon, Jeemin, Jungeun, Sarang, Mai y Saebi.
        </p>

        <div className="flex space-x-4">
          <Button className="flex items-center gap-2 bg-white text-black hover:bg-white/90">
            <Play size={20} />
            Reproducir
          </Button>
          <a
            href="https://wake-one.com/en/artists/izna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-gray-700/60 text-white border-none hover:bg-gray-700/80"
            >
              <Info size={20} />
              Más información
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
