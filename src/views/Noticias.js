import "../css/styles.css";
import "../css/tailwind.css";
import React from "react";
import { useTranslation } from "react-i18next";

// Componente Tarjeta
const Tarjeta = ({ imagen, titulo, resumen, enlace }) => {
  const { t } = useTranslation();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black">
      <img
        className="w-full"
        src={imagen}
        alt={t("translation.noticeImageAlt", { title: titulo })}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base">{resumen}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          aria-label={t("translation.readMoreAbout", { title: titulo })}
        >
          {t("translation.noticeReadMore")}
        </a>
      </div>
    </div>
  );
};

// Componente Noticias
const Noticias = () => {
  const { t } = useTranslation();

  const noticiasData = [
    {
      imagen: "/images/imagen_noticia.webp",
      titulo: t("translation.noticeTitleText"),
      resumen: t("translation.noticeText"),
      enlace: "https://dev.to/mohamad_mehdi_rajaei/image-labeling-in-react-lkd",
    },
    {
      imagen: "/images/imagen_noticia.webp",
      titulo: t("translation.noticeTitleText"),
      resumen: t("translation.noticeText"),
      enlace: "https://dev.to/mohamad_mehdi_rajaei/image-labeling-in-react-lkd",
    },
    {
      imagen: "/images/imagen_noticia.webp",
      titulo: t("translation.noticeTitleText"),
      resumen: t("translation.noticeText"),
      enlace: "https://dev.to/mohamad_mehdi_rajaei/image-labeling-in-react-lkd",
    },
    {
      imagen: "/images/imagen_noticia.webp",
      titulo: t("translation.noticeTitleText"),
      resumen: t("translation.noticeText"),
      enlace: "https://dev.to/mohamad_mehdi_rajaei/image-labeling-in-react-lkd",
    },
    {
      imagen: "/images/imagen_noticia.webp",
      titulo: t("translation.noticeTitleText"),
      resumen: t("translation.noticeText"),
      enlace: "https://dev.to/mohamad_mehdi_rajaei/image-labeling-in-react-lkd",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-500">
        {t("translation.titleNotices")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {noticiasData.map((noticia, index) => (
          <Tarjeta key={index} {...noticia} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col flex-grow bg-gray-800 text-white p-4">
      <Noticias />
    </div>
  );
};

export default App;
