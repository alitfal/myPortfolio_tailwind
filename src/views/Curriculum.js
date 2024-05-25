import "../css/styles.css";
import "../css/tailwind.css";
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
    <div className="flex flex-col flex-grow bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-500">
          {t("translation.titleResume")}
        </h1>
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-blue-500">
            {t("translation.education")}
          </h2>
          <ul className="list-disc list-inside pl-4 md:pl-8 lg:pl-12">
            {curriculumInfo.education.map((edu, index) => (
              <li key={index} className="mb-2 md:mb-4">
                <strong>{t(`translation.${edu.level}`)}:</strong>{" "}
                {t(`translation.${edu.name}`)}, {edu.years}
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-blue-500">
            {t("translation.experience")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            {t(`translation.experienceDescription`)}
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-blue-500">
            {t("translation.personalQualities")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            {t(`translation.learningAttitude`)}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;
