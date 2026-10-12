import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setErrors(null);

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos de skincare");
        }
        return res.json();
      })
      .then((data) => {
        if (category) {
          const filtered = data.filter((item) => item.category === category);
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <section className="item-list-container">
      {/* Hero Banner original de Serenah en la página principal */}
      {!category && (
        <div className="hero-banner-section">
          <div className="hero-text-content">
            <h1 className="hero-title">Los mejores productos para tu piel</h1>
            <p className="hero-subtitle">
              Descubre tratamientos profesionales formulados para cuidar, iluminar y rejuvenecer tu piel día a día.
            </p>
          </div>
          <div className="banner-hero-img-wrap">
            <img src="/img/BannerHero.png" alt="Serenah Skincare" className="img-hero" />
          </div>
        </div>
      )}

      {/* Barra de filtros por categorías */}
      <div className="category-filter-bar">
        <Link to="/" className={`category-pill ${!category ? "active" : ""}`}>
          Todos los Productos
        </Link>
        <Link to="/category/kits" className={`category-pill ${category === "kits" ? "active" : ""}`}>
          Kits Completos
        </Link>
        <Link to="/category/cremas" className={`category-pill ${category === "cremas" ? "active" : ""}`}>
          Cremas & Tratamientos
        </Link>
      </div>

      <div className="catalog-header">
        <h2 className="titulo-productos">
          {category ? `Categoría: ${category === "kits" ? "KITS COMPLETOS" : "CREMAS & TRATAMIENTOS"}` : "Nuestros Productos Skincare"}
        </h2>
      </div>

      {loading && <p className="loading-state">Cargando productos de cosmética...</p>}
      {errors && <p className="error-state">{errors}</p>}

      {!loading && !errors && <ItemList products={products} />}
    </section>
  );
};
