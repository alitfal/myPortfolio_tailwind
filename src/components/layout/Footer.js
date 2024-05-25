import "../../css/styles.css";
import "../../css/tailwind.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("visitCount"), 10) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem("visitCount", newCount.toString());
    setVisitCount(newCount);
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4 shadow-lg mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center mb-4 md:mb-0 md:order-2 lg:w-1/3">
          <a
            href="https://github.com/alitfal"
            className="mx-2 transform transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/alitago"
            className="mx-2 transform transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="mx-2 transform transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <p className="text-center md:text-left text-sm md:order-1 lg:w-1/3">
          {t("translation.pageVisited")} {visitCount}{" "}
          {t("translation.timesVisited")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
