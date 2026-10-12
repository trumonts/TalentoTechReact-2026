import { NavLink, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Nav.css";

export const Nav = ({ isOpen, onClose }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
      <ul className="nav-links">
        <li>
          <NavLink to="/" onClick={onClose} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" onClick={onClose} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" onClick={onClose} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Contacto
          </NavLink>
        </li>
      </ul>

      <div className="nav-cart-wrapper">
        <Link to="/cart" onClick={onClose} className="nav-cart-btn">
          <i className="bi bi-cart3"></i>
          <span className="cart-text">Carrito</span>
          {totalItems > 0 && <span className="badge-cart">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};
