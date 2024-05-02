import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/langs.ts";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo"></div>
        <ul>
          <li>
            <NavLink to="/Principal">{t("translation.navHome")}</NavLink>
          </li>
          <li>
            <NavLink to="/Proyectos">{t("translation.navProjects")}</NavLink>
          </li>
          <li>
            <NavLink to="/Curriculum">{t("translation.navResumec")}</NavLink>
          </li>
          <li>
            <NavLink to="/Servicios">{t("translation.navServices")}</NavLink>
          </li>
          <li>
            <NavLink to="/Contacto">{t("translation.navContact")}</NavLink>
          </li>
        </ul>
        <div className="language-select-container">
          <label htmlFor="language-select">
            {t("translation.languageSelection")}
          </label>
          <select
            id="language-select"
            defaultValue={i18n.language}
            onChange={onChangeLang}
            aria-label={t("translation.languageSelection")}
          >
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
