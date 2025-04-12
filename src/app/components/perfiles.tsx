import React from "react";

export default function Perfiles() {
    const perfiles = [
        { nombre: "Koko", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102236/%EC%BD%94%EC%BD%94-1.jpg", url: "https://www.google.com" },
        { nombre: "Yoon Jiyoon", img: "https://cdn.wake-one.com/wp-content/uploads/2024/11/28163151/%EC%9C%A4%EC%A7%80%EC%9C%A4.jpg", url: "https://www.google.com" },
        { nombre: "Bang Jeemin", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102212/%EB%B0%A9%EC%A7%80%EB%AF%BC-1.jpg" },
        { nombre: "Choi Jungeun", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102256/%EC%B5%9C%EC%A0%95%EC%9D%80-1.jpg" },
        { nombre: "Ryu Sarang", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102244/%EC%9C%A0%EC%82%AC%EB%9E%91-1.jpg" },
        { nombre: "Mai", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102202/%EB%A7%88%EC%9D%B4-1.jpg" },
        { nombre: "Jeong Saebi", img: "https://cdn.wake-one.com/wp-content/uploads/2025/03/24102307/%EC%A0%95%EC%84%B8%EB%B9%84-1.jpg" },
        { nombre: "IZNA", img: "https://linkstorage.linkfire.com/medialinks/images/d68e02cd-eecd-41ab-b454-9b69f5efe7c9/artwork-440x440.jpg" }
    ];

    return (
        <div className="grid grid-cols-4 gap-y-12 gap-x-6 justify-items-center mt-12">
            {perfiles.map((perfil, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer transition-transform transform hover:scale-105 mb-[20px]">
                    <div className="overflow-hidden w-24 h-24 mb-2">
                        <img 
                            src={perfil.img} 
                            alt={perfil.nombre} 
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                    </div>
                    <span className="text-gray-400 text-center">{perfil.nombre.toUpperCase()}</span>
                </div>
            ))}
        </div>
    );
}
