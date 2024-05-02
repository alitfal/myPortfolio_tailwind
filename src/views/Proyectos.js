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

  // Traduce los nombres y descripciones de los proyectos
  const translatedProyectos = useMemo(() => proyectos.map(proyecto => ({
    ...proyecto,
    name: t(`translation.${proyecto.name}`),
    description: t(`translation.${proyecto.description}`)
  })), [proyectos, t]);

  // Filtra basándose en el texto traducido
  const filteredProyectos = useMemo(() => translatedProyectos.filter(proyecto =>
    proyecto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proyecto.description.toLowerCase().includes(searchTerm.toLowerCase())
  ), [translatedProyectos, searchTerm]);

  return (
    <div className="proyectos-container">
      <header className="proyectos-header">
        <h1>{t("translation.titleProjects")}</h1>
        <input
          className="proyectos-search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t("translation.searchPlaceholder")}
        />
      </header>
      <section className="proyectos-section">
        <table className="proyectos-table">
          <thead>
            <tr>
              <th scope="col">{t("translation.titleProject")}</th>
              <th scope="col">{t("translation.titleDescription")}</th>
            </tr>
          </thead>
          <tbody>
            {filteredProyectos.map((proyecto) => (
              <tr key={proyecto.id}>
                <td>{proyecto.name}</td>
                <td>{proyecto.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Proyectos;
