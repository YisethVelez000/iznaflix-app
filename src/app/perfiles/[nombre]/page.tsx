"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "next/navigation";
import Header from "@/app/components/header";
import { TbZodiacCancer } from "react-icons/tb";
import { TbZodiacScorpio } from "react-icons/tb";
import { TbZodiacTaurus } from "react-icons/tb";
import { TbZodiacAquarius } from "react-icons/tb";
import { TbZodiacAries } from "react-icons/tb";
import { TbZodiacLeo } from "react-icons/tb";

export default function Perfil() {
  const params = useParams(); // Usa useParams para obtener los parámetros de la URL
  const nombre = params.nombre;

  // Busca el perfil correspondiente
  const perfil = perfiles.find((p) => p.nombre === nombre);

  // Estado para controlar si el video terminó
  const [videoTerminado, setVideoTerminado] = useState(false);

  // Si es pantalla pequeña (768px o menos), muestra el video en pantalla completa
  const [smallScreen, setSmallScreen] = useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamar a la función una vez al cargar el componente

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    smallScreen ? (
      <>
      <div className="bg-black text-white m-4">
        <Header /> {/* Llama al componente Header */}
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center mt-10">
        <div className="w-3/3 bg-gray-800 flex items-center justify-center h-full mt-8">
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
        </div>

        {/* Contenido principal */}
        <main className="bg-black text-white flex flex-col items-center justify-center">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Hola, {perfil.nombre}</h2>
            <p className="text-lg mb-4">Bienvenido a tu perfil.</p>
            {perfil.id && (
              <p className="text-lg mb-4">
                Fue la {perfil.id}° integrante en ser revelada en I-LAND 2.
              </p>
            )}
            {perfil.fechaNacimiento && (
              <p className="text-lg mb-4">
                Fecha Nacimiento:{" "}
                {perfil.fechaNacimiento.toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
            {perfil.signoSodiacal && (
              <p className="text-lg mb-4">
                Signo Zodiacal: {perfil.signoSodiacal} {perfil.iconoSigno}
              </p>
            )}
            {perfil.mbti && (
              <p className="text-lg mb-4">MBTI: {perfil.mbti}</p>
            )}
            {perfil.nacionalidad && (
              <p className="text-lg mb-4">Nacionalidad: {perfil.nacionalidad}</p>
            )}
            {perfil.colorFavorito && (
              <p className="text-lg mb-4">
                Color Favorito: {perfil.colorFavorito}
              </p>
            )}
            <p className="text-lg mb-4">¡Disfruta de tu contenido!</p>
          </div>
        </main>
      </div>
    </>
    ): (
      <>
      <div className="bg-black text-white">
        <Header /> {/* Llama al componente Header */}
      </div>
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
            <h2 className="text-4xl font-bold mb-6">Hola, {perfil.nombre}</h2>
            <p className="text-lg mb-4">Bienvenido a tu perfil.</p>
            {perfil.id && (
              <p className="text-lg mb-4">
                Fue la {perfil.id}° integrante en ser revelada en I-LAND 2.
              </p>
            )}
            {perfil.fechaNacimiento && (
              <p className="text-lg mb-4">
                Fecha Nacimiento:{" "}
                {perfil.fechaNacimiento.toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
            {perfil.signoSodiacal && (
              <p className="text-lg mb-4">
                Signo Zodiacal: {perfil.signoSodiacal} {perfil.iconoSigno}
              </p>
            )}
            {perfil.mbti && (
              <p className="text-lg mb-4">MBTI: {perfil.mbti}</p>
            )}
            {perfil.nacionalidad && (
              <p className="text-lg mb-4">Nacionalidad: {perfil.nacionalidad}</p>
            )}
            {perfil.colorFavorito && (
              <p className="text-lg mb-4">
                Color Favorito: {perfil.colorFavorito}
              </p>
            )}
            <p className="text-lg mb-4">¡Disfruta de tu contenido!</p>
          </div>
        </main>
      </div>
    </>
    )
  );
}

// Array de perfiles
const perfiles = [
  {
    id: 1,
    nombre: "koko",
    video:
      "https://www.youtube-nocookie.com/embed/5Q3Tj1BmcmQ?si=bRwsU5iHi2f0ixiI&controls=0",
    imagen:
      "https://www.mnetplus.world/static/images/uploaded/68d5bfd1-2cfd-4efb-813b-7354ece157ec?webp=1&w=1240",
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
    video:
      "https://www.youtube.com/embed/aBmFsHttSsI?si=PgavV9Nt-5ADYAOC&controls=0",
    imagen:
      "https://www.mnetplus.world/static/images/uploaded/d78c3879-bbe8-413d-b651-4fbbd97ac689?webp=1&w=1240",
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
    video:
      "https://www.youtube.com/embed/0qGWGJZMa5I?si=NvEiKff8gaSwrmIpI&controls=0",
    imagen:
      "https://www.mnetplus.world/static/images/uploaded/b69e7fa0-ba57-4645-ba91-a5fe72e7b61e?webp=1&w=1240",
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
    video:
      "https://www.youtube-nocookie.com/embed/4V_OFp6XszQ?si=X2uVFyu1huV9hxOu&controls=0",
    imagen:
      "https://www.mnetplus.world/static/images/uploaded/5846e9b7-442e-4f86-ad4d-abbfc349c2b6?webp=1&w=1240",
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
    video:
      "https://www.youtube-nocookie.com/embed/D666i2Xb4r0?si=zv-g4iRNpJ_uMLJ2&amp;controls=0",
    imagen:
      "https://www.mnetplus.world/static/images/uploaded/879a1606-d93d-4892-9028-ce0b09b72197?webp=1&w=1240",
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
    video:
      "https://www.youtube-nocookie.com/embed/2DlN9XlNKW0?si=zdpOh45SixE0A0Wi&amp;controls=0",
    imagen:
      "https://www.mnetplus.world/static/images/uploaded/f7f85a7d-ec9e-4052-9388-27c20ff35b01?webp=1&w=1240",
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
    video:
      "https://www.youtube-nocookie.com/embed/cT892fyv-ts?si=LzRw2I7cSuQGOOpf&amp;controls=0",
    imagen: "/assets/saebi.jpg",
    fechaNacimiento: new Date("2008-01-22"),
    mbti: "ENFP",
    nacionalidad: "Coreana",
    signoSodiacal: "Acuario",
    colorFavorito: "Rojo y rosa",
    iconoSigno: <TbZodiacAquarius className="mt-2" />,
  },
];
