import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, clearCart, checkout } = useCart();
  const total = getCartTotal();

  return (
    <div className="cart-actions">
      <p className="cart-total-text">
        Total a pagar: <strong>${Number(total).toLocaleString("es-AR")}</strong>
      </p>
      <div className="cart-buttons-group">
        <button className="btn bg-delete primary" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <button className="btn bg-success primary" onClick={checkout}>
          Finalizar Compra 🎉
        </button>
      </div>
    </div>
  );
};
