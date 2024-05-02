import React from "react";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();
  return (
    <div className="servicios-container">
      <h1>{t("translation.titleServices")}</h1>
      <div className="servicio">
        <h2>{t("translation.roleFrontEndDev")}</h2>
        <p>{t("translation.detailFrontEndDevReact")}</p>
      </div>
      <div className="servicio">
        <h2>{t("translation.roleCertifiedDev")}</h2>
        <p>{t("translation.detailCertifiedDevFilemaker")}</p>
      </div>
      <div className="servicio">
        <h2>{t("translation.roleConsultant")}</h2>
        <p>{t("translation.detailConsultantFilemaker")}</p>
      </div>
      <div className="servicio">
        <h2>{t("translation.skills")}</h2>
        <p>{t("translation.detailSkillsJavaMysql")}</p>
      </div>
    </div>
  );
};

export default Servicios;
