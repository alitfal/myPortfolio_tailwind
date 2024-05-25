import "../css/styles.css";
import "../css/tailwind.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col flex-grow bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-500">
          {t("translation.titleServices")}
        </h1>

        {/* Sección de Desarrollo Frontend */}
        <section className="mb-8">
          <div className="grid gap-4">
            <div className="servicio">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-500">
                {t("translation.roleFrontEndDev")}
              </h3>
              <p className="text-base md:text-lg lg:text-xl">
                {t("translation.detailFrontEndDevReact")}
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Desarrollador Certificado */}
        <section className="mb-8">
          <div className="grid gap-4">
            <div className="servicio">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-500">
                {t("translation.roleCertifiedDev")}
              </h3>
              <p className="text-base md:text-lg lg:text-xl">
                {t("translation.detailCertifiedDevFilemaker")}
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Consultoría */}
        <section className="mb-8">
          <div className="grid gap-4">
            <div className="servicio">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-500">
                {t("translation.roleConsultant")}
              </h3>
              <p className="text-base md:text-lg lg:text-xl">
                {t("translation.detailConsultantFilemaker")}
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Habilidades Técnicas */}
        <section className="mb-8">
          <div className="grid gap-4">
            <div className="servicio">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-500">
                {t("translation.skills")}
              </h3>
              <p className="text-base md:text-lg lg:text-xl">
                {t("translation.detailSkillsJavaMysql")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicios;
