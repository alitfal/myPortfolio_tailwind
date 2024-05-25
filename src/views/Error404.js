import React from "react";
import { useTranslation } from "react-i18next";

export const Error404 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-800 text-white p-4">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-500 mb-4">
        {t("translation.titleError")}
      </h1>
      {/* <p className="text-lg md:text-2xl lg:text-3xl">
        {t("translation.messageError")}
      </p> */}
    </div>
  );
};

export default Error404;
