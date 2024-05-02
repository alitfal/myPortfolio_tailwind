import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Suponiendo que quieres mantener el contador de visitas entre recargas de página:
    const currentCount = parseInt(localStorage.getItem("visitCount"), 10) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem("visitCount", newCount.toString());
    setVisitCount(newCount);
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <footer className="footer">
      <h1>{t("translation.titleFooter")}</h1>
      <p>
        {t("translation.pageVisited")} {visitCount}{" "}
        {t("translation.timesVisited")}
      </p>
    </footer>
  );
};

export default Footer;
