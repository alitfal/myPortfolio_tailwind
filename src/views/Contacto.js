import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  const { t } = useTranslation();
  const nombreInputRef = useRef(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !asunto || !comentario) {
      alert("Fallo en el envío. Vuelva a intentarlo");
      return;
    }

    setTimeout(() => {
      alert("Mensaje enviado correctamente");
      setNombre("");
      setEmail("");
      setAsunto("");
      setComentario("");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center flex-grow bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">{t("translation.titleContact")}</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <InputField
            id="nombre"
            label={t("translation.formName")}
            value={nombre}
            onChange={setNombre}
            placeholder={t("translation.formNamePlaceholder")}
            ref={nombreInputRef}
          />
          <InputField
            id="email"
            type="email"
            label={t("translation.formEmail")}
            value={email}
            onChange={setEmail}
            placeholder={t("translation.formEmailPlaceholder")}
          />
          <InputField
            id="asunto"
            label={t("translation.formSubject")}
            value={asunto}
            onChange={setAsunto}
            placeholder={t("translation.formSubjectPlaceholder")}
          />
          <TextArea
            id="comentario"
            label={t("translation.formMsg")}
            value={comentario}
            onChange={setComentario}
            placeholder={t("translation.formMsgPlaceholder")}
          />
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">
            {t("translation.formSubmit")}
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = React.forwardRef(({ id, label, type = "text", value, onChange, placeholder }, ref) => (
  <div className="mb-4">
    <label htmlFor={id} className="block">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border border-gray-500 text-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
));

const TextArea = ({ id, label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block">{label}</label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border border-gray-500 text-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
      rows="4"
    ></textarea>
  </div>
);

export default Contacto;
