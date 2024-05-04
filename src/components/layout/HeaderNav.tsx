import "../../css/styles.css";
import "../../css/tailwind.css";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/langs.ts";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

const HeaderNav = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("appLang", newLang);
  };

  useEffect(() => {
    const currentLang = localStorage.getItem("appLang") || "es";
    i18n.changeLanguage(currentLang);
  }, [i18n]);

  // Custom NavLink with active styles
  const CustomNavLink = ({ to, children, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <NavLink
        to={to}
        {...props}
        className={match ? "text-green-500 hover:text-blue-300" : "hover:text-blue-300 text-white"}
      >
        {children}
      </NavLink>
    );
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg w-full">
      <nav className="flex justify-between items-center w-full px-4 md:px-8">
        <img
          src="/images/logo_1_sin_fondo.png"
          alt="Logo"
          style={{ height: '128px', width: '128' }}  // Ajusta la altura aquí en píxeles
        />
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <li>
              <CustomNavLink to="/Principal">{t("translation.navHome")}</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Proyectos">{t("translation.navProjects")}</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Curriculum">{t("translation.navResumec")}</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Servicios">{t("translation.navServices")}</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Contacto">{t("translation.navContact")}</CustomNavLink>
            </li>
          </ul>
          <div>
            <label htmlFor="language-select" className="mr-2">
              {t("translation.languageSelection")}
            </label>
            <select
              id="language-select"
              value={i18n.language}
              onChange={onChangeLang}
              className="bg-gray-700 border border-gray-500 text-white rounded-md p-1"
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
