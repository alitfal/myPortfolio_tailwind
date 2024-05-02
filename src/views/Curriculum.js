import React from "react";
import { useTranslation } from "react-i18next";

const Curriculum = () => {
  const { t } = useTranslation();

  const curriculumInfo = {
    education: [
      {
        level: "education1Level",
        name: "education1Name",
        years: "1996 - 2000",
      },
      {
        level: "education2Level",
        name: "education2Name",
        years: "2001 - 2005",
      },
      {
        level: "education3Level",
        name: "education3Name",
        years: "2006 - 2008",
      },
    ],
    learningAttitude: "Always eager to learn new things.",
  };

  return (
    <div className="curriculum-container">
      {/* Contenedor interno para centrar el contenido */}
      <div className="curriculum-content">
        <h1>{t("translation.titleResume")}</h1>
        <section>
          <h2>{t("translation.education")}</h2>
          <ul className="curriculum-list">
            {curriculumInfo.education.map((edu, index) => (
              <li key={index}>
                <strong>{t(`translation.${edu.level}`)}:</strong> {t(`translation.${edu.name}`)}, {edu.years}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{t("translation.experience")}</h2>
          <p>{t(`translation.experienceDescription`)}</p>
        </section>
        <section>
          <h2>{t("translation.personalQualities")}</h2>
          <p>{t(`translation.learningAttitude`)}</p>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;
