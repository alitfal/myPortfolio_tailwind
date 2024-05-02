import React from "react";
import { useTranslation } from "react-i18next";

const Principal = () => {
  const { t } = useTranslation();
  return (
    <div className="principal-view">
      <section>
        <h1>{t("translation.titleMain")} </h1>
        <p>{t("translation.bodyMain")}</p>
        <p>{t("translation.introText")}</p> {/* Agregado una nueva línea de texto */}
      </section>
    </div>
  );
};

export default Principal;
