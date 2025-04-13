"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { IznaflixLogo } from "./components/iznaflix-logo";
import Perfiles from "./components/perfiles";

function HomeContent() {
    const searchParams = useSearchParams();
    const [showContent, setShowContent] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        // Si el parámetro `showContent` está presente, omite la animación
        if (searchParams.get("showContent") === "true") {
            setShowContent(true);
            setAnimationFinished(true);
        } else {
            // Si no hay parámetro, muestra la animación y luego el contenido
            const timer = setTimeout(() => {
                setShowContent(true);
                const fadeOutTimer = setTimeout(() => {
                    setAnimationFinished(true);
                }, 10000); // Duración del desvanecimiento (1 segundo)
                return () => clearTimeout(fadeOutTimer);
            }, 2000); // Duración de la animación (7 segundos)

            return () => clearTimeout(timer); // Limpia el temporizador al desmontar
        }
    }, [searchParams]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden">
            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                {/* Contenedor de animación del logo */}
                {!animationFinished && (
                    <div
                        className={`transition-all duration-1000 ease-in-out flex flex-col items-center ${
                            showContent ? "opacity-0 scale-90" : "opacity-100 scale-100"
                        }`}
                    >
                        <IznaflixLogo className="mb-16" />
                    </div>
                )}

                {/* Contenido que aparece después de la animación */}
                {showContent && (
                    <div
                        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black"
                        id="perfiles"
                    >
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl font-bold mb-6">¿Quién está viendo?</h2>
                            <Perfiles />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <HomeContent />
        </Suspense>
    );
}