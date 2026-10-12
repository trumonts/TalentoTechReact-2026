import { useState } from "react";
import "./Contacto.css";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto. ✉️🌸");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="contacto-seccion">
      <div className="contacto-header">
        <h1>Contacto</h1>
        <p className="contacto-subtitulo">
          ¿Tienes dudas sobre tu rutina o algún producto? Escríbenos y nuestro equipo te asesorará.
        </p>
      </div>

      <div className="contacto-card">
        {enviado && (
          <div className="alerta-exito">
            🌸 ¡Gracias por comunicarte! Hemos recibido tu mensaje con éxito.
          </div>
        )}

        <form onSubmit={handleSubmit} className="formulario-contacto">
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje o Consulta</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Cuéntanos en qué podemos ayudarte..."
            ></textarea>
          </div>

          <button type="submit" className="btn bg-primary primary btn-submit">
            Enviar Mensaje ✉️
          </button>
        </form>
      </div>
    </section>
  );
};
