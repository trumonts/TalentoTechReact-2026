import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products || !products.length) {
    return <p className="no-products">No se encontraron productos disponibles en este momento.</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="item-link">
          <Item {...product}>
            <span className="btn bg-primary primary btn-ver-detalle">Ver Detalle</span>
          </Item>
        </Link>
      ))}
    </div>
  );
};
