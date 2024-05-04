import "../css/styles.css";
import "../css/tailwind.css";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

const Proyectos = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const proyectos = useMemo(() => [
    { id: 1, name: "project1Title", description: "project1Description" },
    { id: 2, name: "project2Title", description: "project2Description" },
    { id: 3, name: "project3Title", description: "project3Description" },
    { id: 4, name: "project4Title", description: "project4Description" },
    { id: 5, name: "project5Title", description: "project5Description" },
  ], []);

  const translatedProyectos = useMemo(() => proyectos.map(proyecto => ({
    ...proyecto,
    name: t(`translation.${proyecto.name}`),
    description: t(`translation.${proyecto.description}`)
  })), [proyectos, t]);

  const filteredProyectos = useMemo(() => translatedProyectos.filter(proyecto =>
    proyecto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proyecto.description.toLowerCase().includes(searchTerm.toLowerCase())
  ), [translatedProyectos, searchTerm]);

  return (
    <div className="flex flex-col flex-grow bg-gray-800 text-white p-4">
      <header className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-500">{t("translation.titleProjects")}</h1>
        <input
          className="mt-4 mb-2 p-2 bg-gray-700 border border-gray-600 rounded"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t("translation.searchPlaceholder")}
        />
      </header>
      <section className="container mx-auto mt-4">
        <table className="w-full text-left rounded-lg overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th scope="col" className="p-4">{t("translation.titleProject")}</th>
              <th scope="col" className="p-4">{t("translation.titleDescription")}</th>
            </tr>
          </thead>
          <tbody className="bg-gray-600">
            {filteredProyectos.map((proyecto) => (
              <tr key={proyecto.id} className="border-b border-gray-700 hover:bg-gray-500 transition duration-300 ease-in-out">
                <td className="p-4">{proyecto.name}</td>
                <td className="p-4">{proyecto.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Proyectos;
