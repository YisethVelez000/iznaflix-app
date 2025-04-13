"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './header.module.css';

const perfiles = [
    { nombre: "Koko", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102236/%EC%BD%94%EC%BD%94-1.jpg" },
    { nombre: "Jiyoon", img: "https://cdn.wake-one.com/wp-content/uploads/2024/11/28163151/%EC%9C%A4%EC%A7%80%EC%9C%A4.jpg" },
    { nombre: "Jeemin", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102212/%EB%B0%A9%EC%A7%80%EB%AF%BC-1.jpg" },
    { nombre: "Jungeun", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102256/%EC%B5%9C%EC%A0%95%EC%9D%80-1.jpg" },
    { nombre: "Sarang", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102244/%EC%9C%A0%EC%82%AC%EB%9E%91-1.jpg" },
    { nombre: "Mai", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102202/%EB%A7%88%EC%9D%B4-1.jpg" },
    { nombre: "Saebi", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102307/%EC%A0%95%EC%84%B8%EB%B9%84-1.jpg" },
    { nombre: "IZNA", img: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg" }
];

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Marca que el componente se está ejecutando en el cliente
        setIsClient(true);
    }, []);

    const perfilActual = isClient
        ? perfiles.find(
              (perfil) => perfil.nombre.toLowerCase() === pathname.split('/').pop()?.toLowerCase()
          )
        : null;

    return (
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
                    {/* Icono de búsqueda */}
                    <button className="hover:text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
                            />
                        </svg>
                    </button>

                    {/* Botón infantil */}
                    <button className="hover:text-gray-300 bg-gray-800">Infantil</button>

                    {/* Icono de notificaciones */}
                    <button className="hover:text-gray-300 bg-gray-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>

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

            {/* Menú desplegable para móviles */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 text-white mt-2 p-4 rounded">
                    <button
                        onClick={() => {
                            setMenuOpen(false);
                            router.push('/?showContent=true#perfiles');
                        }}
                        className="block w-full text-left py-2 hover:text-gray-300"
                    >
                        Cambiar Perfil
                    </button>
                </div>
            )}
        </header>
    );
}