import "./Nosotros.css";

export const Nosotros = () => {
  return (
    <section className="nosotros-seccion">
      <div className="nosotros-header">
        <h1 className="titulo-nosotros">Sobre Nosotros</h1>
        <p className="subtitulo-nosotros">
          Conoce el origen, misión y compromiso de Serenah con el cuidado de tu piel.
        </p>
      </div>

      <div className="nosotros-cards-grid">
        <article className="nosotros-card">
          <div className="card-icon">🎯</div>
          <h3>Nuestra Misión</h3>
          <p>
            Proporcionar productos de skincare de alta calidad que respeten la salud de tu piel y resalten tu belleza natural. Nos esforzamos por ofrecer fórmulas profesionales accesibles y efectivas para tu rutina diaria.
          </p>
        </article>

        <article className="nosotros-card">
          <div className="card-icon">🔬</div>
          <h3>Nuestra Filosofía</h3>
          <p>
            Creemos en la ciencia aplicada a la cosmética. Seleccionamos cuidadosamente los ingredientes activos de cada producto para garantizar resultados visibles, seguros y duraderos en el cuidado de todo tipo de pieles.
          </p>
        </article>
      </div>
    </section>
  );
};
