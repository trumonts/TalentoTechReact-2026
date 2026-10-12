import "./Item.css";

export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price-tag">${Number(price).toLocaleString("es-AR")}</p>

      {/* Renderizamos acciones como 'Ver Detalle' o 'Agregar al Carrito' si vienen por children */}
      {children}
    </article>
  );
};
