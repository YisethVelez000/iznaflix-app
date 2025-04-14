"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const perfiles = [
  {
    nombre: "Koko",
    img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102236/%EC%BD%94%EC%BD%94-1.jpg",
  },
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
  {
    nombre: "Mai",
    img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102202/%EB%A7%88%EC%9D%B4-1.jpg",
  },
  {
    nombre: "Saebi",
    img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102307/%EC%A0%95%EC%84%B8%EB%B9%84-1.jpg",
  },
  {
    nombre: "IZNA",
    img: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg",
  },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  //Obtener el tamaño de la pantalla 
    useEffect(() => {
        const handleResize = () => {
        setSmallScreen(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        handleResize(); // Llamar a la función una vez al cargar el componente
    
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const perfilActual = isClient
    ? perfiles.find(
        (perfil) =>
          perfil.nombre.toLowerCase() ===
          pathname.split("/").pop()?.toLowerCase()
      )
    : null;
  return (
    smallScreen ? ( 
        <header className="w-full bg-black text-white">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 id="tittle"
            className="text-2xl font-bold text-red-600 cursor-pointer"
            onClick={() => router.push("/")}
          >
            IZNAFLIX
          </h1>
  
          {/* Botón de menú visible solo en móvil */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
  
          {/* Opciones del menú visibles solo en desktop */}
          <nav className="hidden md:flex gap-6">
            <button onClick={() => router.push("/?showContent=true#perfiles")}>
              Miembros
            </button>
            <button onClick={() => router.push("/musica")}>Música</button>
            <button onClick={() => router.push("/iland-2")}>I-LAND 2</button>
          </nav>
        </div>
  
        {/* Menú móvil */}
        {menuOpen && (
          <div className="flex flex-col px-6 py-4 gap-4 bg-black md:hidden">
            <button
              onClick={() => {
                router.push("/?showContent=true#perfiles");
                setMenuOpen(false);
              }}
            >
              Miembros
            </button>
            <button
              onClick={() => {
                router.push("/musica");
                setMenuOpen(false);
              }}
            >
              Música
            </button>
            <button
              onClick={() => {
                router.push("/iland-2");
                setMenuOpen(false);
              }}
            >
              I-LAND 2
            </button>
          </div>
        )}
      </header>
    ) : (
        <header className="p-4 bg-black text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo estilo Netflix */}
                <h1 id='tittle'
                    className="text-3xl font-bold cursor-pointer text-red-600 hover:text-red-500 transition duration-300"
                    onClick={() => router.push('/')}
                >
                    IZNAFLIX
                </h1>

                {/* Navegación principal */}
                <nav className="md:flex font-semibold">
                    <button
                        onClick={() => router.push('/?showContent=true#perfiles')}
                        className="hover:text-gray-300"
                    >
                        Miembros
                    </button>
                    <button
                        onClick={() => router.push('/musica')}
                        className="hover:text-gray-300"
                    >
                        Música
                    </button>
                    <button
                        onClick={() => router.push('/iland-2')}
                        className="hover:text-gray-300"
                    >
                        I-LAND 2
                    </button>
                </nav>

                {/* Iconos de la derecha */}
                <div className="flex items-center space-x-4">
                    {/* Imagen de perfil */}
                    <div className="relative">
                        {perfilActual && (
                            <img
                                src={perfilActual.img}
                                alt={perfilActual.nombre}
                                className="w-8 h-8 rounded-full cursor-pointer mx-8"
                                style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                onClick={() => router.push('/?showContent=true#perfiles')}
                            />
                        )}
                    </div>
                    </div>
                </div>

        </header>
    )
    );
}
