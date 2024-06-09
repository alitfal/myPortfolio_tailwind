import "../../css/styles.css";
import "../../css/tailwind.css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/langs.ts";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import sonidoModificado from "../../assets/sonido_modificado.mp3"; 

const HeaderNav = () => {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={
          match
            ? "text-green-500 hover:text-blue-300"
            : "hover:text-blue-300 text-white"
        }
      >
        {children}
      </NavLink>
    );
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg w-full">
      <nav className="flex justify-between items-center w-full px-4 md:px-8">
        <div className="flex flex-col items-center">
          <img
            src="/images/logo_1_sin_fondo.png"
            alt="Logo"
            className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32"
          />
          <audio controls className="mt-2">
            <source src={sonidoModificado} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        <div
          className={`flex-col md:flex-row md:flex items-center gap-4 ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <CustomNavLink to="/Principal">
                {t("translation.navHome")}
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Proyectos">
                {t("translation.navProjects")}
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Curriculum">
                {t("translation.navResumec")}
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Servicios">
                {t("translation.navServices")}
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Noticias">
                {t("translation.navNews")}
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/Contacto">
                {t("translation.navContact")}
              </CustomNavLink>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
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
