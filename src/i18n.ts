import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getCurrentHost = process.env.REACT_APP_MODE === "development"? "http://localhost:3000": "LINK TO PROD";

console.log("REACT_APP_MODE: " + process.env.REACT_APP_MODE);
//console.log("CurrentHost: " + getCurrentHost);

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`, 
    },
  });

export default i18n;
