import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../css/styles.css";
import "../css/tailwind.css";

// Importar imágenes directamente
import claris from "../images/claris.png";
import html_js_css from "../images/html_js_css.png";
import java from "../images/java.png";
import mysql from "../images/mysql.png";
import reactImg from "../images/react.png"; // Asegúrate de que el nombre del archivo es correcto
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";

const Principal = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [claris, html_js_css, java, mysql, reactImg,tailwind,bootstrap];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3000 milisegundos (3 segundos)

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [images.length]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className="flex flex-col flex-grow bg-gray-800">
      <section className="container mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-10">
          {t("translation.introText")}
        </h1>
        <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-contain object-center transition-opacity duration-700 ease-in-out shadow-lg ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-30 top-1/2 -translate-y-1/2 p-4 text-white bg-gray-800 hover:bg-gray-500 rounded-full"
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 z-30 top-1/2 -translate-y-1/2 p-4 text-white bg-gray-800 hover:bg-gray-500 rounded-full"
            aria-label="Next slide"
          >
            ❯
          </button>
        </div>
      </section>
    </div>
  );
};

export default Principal;
