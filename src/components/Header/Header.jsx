import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto((prev) => !prev);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header-principal">
      <div className="preHeader">
        <p className="preHeader-text">
          ✨ <strong>3 cuotas sin interés en toda la tienda</strong> | Envíos a todo el país 🌿
        </p>
      </div>

      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={cerrarMenu}>
            <img src="/img/logo.png" alt="Serenah Skincare" className="img-logo" />
          </Link>
        </div>

        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
        >
          <i className={menuAbierto ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        <Nav isOpen={menuAbierto} onClose={cerrarMenu} />
      </div>
    </header>
  );
};
