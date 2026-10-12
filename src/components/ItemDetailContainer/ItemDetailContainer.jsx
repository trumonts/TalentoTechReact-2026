import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItemDetail(null);
    setLoading(true);
    setError(null);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al consultar el catálogo de productos");
        }
        return res.json();
      })
      .then((data) => {
        const item = data.find((product) => String(product.id) === String(id));
        if (item) {
          setItemDetail(item);
          return;
        }
        throw new Error("El producto seleccionado no existe o no está disponible.");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading-state">Cargando información del producto...</p>;
  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "3rem" }}>
        <p className="error-state">{error}</p>
        <Link to="/" className="btn bg-primary primary" style={{ display: "inline-block", marginTop: "1rem" }}>
          Volver a la tienda
        </Link>
      </div>
    );
  }
  if (!itemDetail) return <p className="error-state">Producto no encontrado</p>;

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link to="/" style={{ color: "var(--primary)", fontWeight: "600" }}>
          ← Volver a los productos
        </Link>
      </div>
      <h1 style={{ marginBottom: "2rem" }}>Detalle del Producto</h1>
      <ItemDetail item={itemDetail} />
    </section>
  );
};
