import "../css/styles.css";
import "../css/tailwind.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col flex-grow bg-gray-800 text-white p-4">
      <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">{t("translation.titleServices")}</h1>
      {/* Sección de Desarrollo Frontend */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-semibold mb-2">{t("translation.sectionFrontEndDev")}</h2> */}
        <div className="grid gap-4">
          <div className="servicio">
            <h3 className="text-xl font-semibold text-blue-500">{t("translation.roleFrontEndDev")}</h3>
            <p>{t("translation.detailFrontEndDevReact")}</p>
          </div>
        </div>
      </section>

      {/* Sección de Desarrollador Certificado */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-semibold mb-2">{t("translation.sectionCertifiedDev")}</h2> */}
        <div className="grid gap-4">
          <div className="servicio">
            <h3 className="text-xl font-semibold text-blue-500">{t("translation.roleCertifiedDev")}</h3>
            <p>{t("translation.detailCertifiedDevFilemaker")}</p>
          </div>
        </div>
      </section>

      {/* Sección de Consultoría */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-semibold mb-2">{t("translation.sectionConsultancy")}</h2> */}
        <div className="grid gap-4">
          <div className="servicio">
            <h3 className="text-xl font-semibold text-blue-500">{t("translation.roleConsultant")}</h3>
            <p>{t("translation.detailConsultantFilemaker")}</p>
          </div>
        </div>
      </section>

      {/* Sección de Habilidades Técnicas */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-semibold mb-2">{t("translation.sectionSkills")}</h2> */}
        <div className="grid gap-4">
          <div className="servicio">
            <h3 className="text-xl font-semibold text-blue-500">{t("translation.skills")}</h3>
            <p>{t("translation.detailSkillsJavaMysql")}</p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Servicios;
