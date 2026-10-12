import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */
const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVEEDOR                                 */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();

  // Inicializamos desde localStorage si existe para mantener la persistencia que ya tenía Serenah
  const [cart, setCart] = useState(() => {
    try {
      const guardado = localStorage.getItem("serenah-cart");
      return guardado ? JSON.parse(guardado) : [];
    } catch {
      return [];
    }
  });

  // Guardar en localStorage cada vez que el carrito cambie
  useEffect(() => {
    try {
      localStorage.setItem("serenah-cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Error al guardar en localStorage:", e);
    }
  }, [cart]);

  const isInCart = (item) => {
    return cart.some((element) => element.id === item.id);
  };

  const addItem = (item) => {
    if (isInCart(item)) {
      alert("El producto ya se encuentra en tu carrito 🌿");
      return;
    }
    setCart((prev) => [...prev, item]);
    alert("¡Producto de skincare agregado al carrito! 🎉");
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.id !== id));
    alert("Producto eliminado del carrito ✅");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  const checkout = () => {
    alert("¡Muchas gracias por tu compra en Serenah Skincare! 🎉 Tu pedido ha sido confirmado.");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    isInCart,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getCartTotal,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
