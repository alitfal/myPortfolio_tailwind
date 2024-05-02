import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  const { t } = useTranslation();
  const nombreInputRef = useRef(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Enfocar el input "nombre" al cargar la página
    nombreInputRef.current.focus();
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que los campos estén rellenos
    if (!nombre || !email || !mensaje) {
      setError("Por favor, completa todos los campos");
      return;
    }
    // Simulación de envío
    // En un escenario real, aquí se enviaría el correo electrónico
    // y se manejaría la respuesta del servidor
    setTimeout(() => {
      // Mostrar un mensaje de alerta con los datos ingresados
      alert(
        `Hola ${nombre}. Se ha enviado satisfactoriamente el siguiente mensaje: ${mensaje}. Nos pondremos en contacto contigo en el correo ${email} lo antes posible.`
      );
      // Restablecer los valores del formulario después del envío
      setNombre("");
      setEmail("");
      setMensaje("");
      setEnviado(true);
      setError("");
    }, 1000);
  };

  return (
    <div id="contenedor-padre-contacto">
      <h1>{t("translation.titleContact")}</h1>
      <form id="form-contacto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">{t("translation.formName")}</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            ref={nombreInputRef}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">{t("translation.formEmail")}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensaje">{t("translation.formMsg")}</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">{t("translation.formSubmit")}</button>
      </form>
      {enviado && (
        <EnviarCorreo nombre={nombre} email={email} mensaje={mensaje} />
      )}
    </div>
  );
};

const EnviarCorreo = ({ nombre, email, mensaje }) => {
  return (
    <div>
      <h2>Correo Enviado</h2>
    </div>
  );
};

export default Contacto;
