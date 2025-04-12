"use client";

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'next/navigation';

interface Perfil {
    nombre: string;
    descripcion: string;
    video: string;
    imagen: string; // Nueva propiedad para la imagen personalizada
}

// Datos de los usuarios
const perfiles: Perfil[] = [
    { 
        nombre: "koko", 
        descripcion: "Koko es un amante del cine clásico y las aventuras.", 
        video: "https://www.youtube-nocookie.com/embed/5Q3Tj1BmcmQ?si=bRwsU5iHi2f0ixiI&controls=0",
        imagen: "/assets/koko.jpg" // Imagen personalizada
    },
    { 
        nombre: "jiyoon", 
        descripcion: "Jiyoon disfruta de los dramas y las historias románticas.", 
        video: "https://www.youtube.com/embed/aBmFsHttSsI?si=PgavV9Nt-5ADYAOC&controls=0",
        imagen: "/assets/jiyoon.jpg" // Imagen personalizada
    },
    { 
        nombre: "jeemin", 
        descripcion: "Jeemin es fanático de las películas de acción y ciencia ficción.", 
        video: "https://www.youtube.com/embed/0qGWGJZMa5I?si=NvEiKff8gaSwrmIpI&controls=0",
        imagen: "/assets/jeemin.jpg" // Imagen personalizada
    },
    { 
        nombre: "jungeun", 
        descripcion: "Jungeun ama los documentales y las historias reales.", 
        video: "https://www.youtube-nocookie.com/embed/4V_OFp6XszQ?si=X2uVFyu1huV9hxOu&controls=0",
        imagen: "/assets/jungeun.jpg" // Imagen personalizada
    },
    { 
        nombre: "sarang", 
        descripcion: "Sarang disfruta de las comedias y las películas familiares.", 
        video: "https://www.youtube-nocookie.com/embed/D666i2Xb4r0?si=zv-g4iRNpJ_uMLJ2&amp;controls=0",
        imagen: "/assets/sarang.jpg" // Imagen personalizada
    },
    { 
        nombre: "mai", 
        descripcion: "Mai es fan de los thrillers psicológicos y el misterio.", 
        video: "https://www.youtube-nocookie.com/embed/2DlN9XlNKW0?si=zdpOh45SixE0A0Wi&amp;controls=0",
        imagen: "/assets/mai.webp" // Imagen personalizada
    },
    { 
        nombre: "saebi", 
        descripcion: "Saebi ama las películas de fantasía y aventuras épicas.", 
        video: "https://www.youtube-nocookie.com/embed/cT892fyv-ts?si=LzRw2I7cSuQGOOpf&amp;controls=0",
        imagen: "/assets/saebi.jpg" // Imagen personalizada
    },
    { 
        nombre: "izna", 
        descripcion: "IZNA disfruta de la música y los conciertos en vivo.", 
        video: "https://www.youtube-nocookie.com/embed/example-video-izna",
        imagen: "/assets/izna.jpg" // Imagen personalizada
    },
];

export default function Perfil() {
    const params = useParams(); // Usa useParams para obtener los parámetros de la URL
    const nombre = params.nombre;

    // Busca el perfil correspondiente
    const perfil = perfiles.find((p) => p.nombre === nombre);

    // Estado para controlar si el video terminó
    const [videoTerminado, setVideoTerminado] = useState(false);

    // Si no se encuentra el perfil, muestra un mensaje de error
    if (!perfil) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
                <h1 className="text-4xl font-bold mb-6">Perfil no encontrado</h1>
                <p className="text-lg">El perfil que buscas no existe.</p>
            </div>
        );
    }

    // Renderiza el perfil encontrado con el video en un aside
    return (
        <div className="flex h-screen">
            {/* Aside con el video o la imagen personalizada */}
            <aside className="w-1/3 bg-gray-800 flex items-center justify-center h-full">
                {videoTerminado ? (
                    // Mostrar imagen personalizada cuando el video termine
                    <img
                        src={perfil.imagen}
                        alt={`Imagen de ${perfil.nombre}`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    // Mostrar el reproductor mientras el video no haya terminado
                    <ReactPlayer
                        url={perfil.video}
                        width="100%"
                        height="100%"
                        playing
                        controls
                        onEnded={() => setVideoTerminado(true)} // Cambiar estado al terminar el video
                        config={{
                            youtube: {
                                playerVars: {
                                    autoplay: 1,
                                    cc_load_policy: 1, // Activa subtítulos
                                    modestbranding: 1, // Oculta el logo de YouTube
                                    rel: 0, // Evita recomendaciones de otros videos
                                },
                            },
                        }}
                    />
                )}
            </aside>

            {/* Contenido principal */}
            <main className="w-2/3 bg-black text-white flex flex-col items-center justify-center">
                <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                    <h1 className="text-4xl font-bold mb-6">Hola, {perfil.nombre}</h1>
                    <p className="text-lg">{perfil.descripcion}</p>
                </div>
            </main>
        </div>
    );
}