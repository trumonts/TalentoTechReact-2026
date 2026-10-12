import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tu carrito de compras</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <div className="empty-cart-box">
          <p className="empty-cart">Tu carrito de skincare está vacío 🛒🌿</p>
          <Link className="btn primary bg-primary" to={"/"}>
            Explorar Productos
          </Link>
        </div>
      )}
    </section>
  );
};
