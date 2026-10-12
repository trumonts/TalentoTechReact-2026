import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-principal">
      <div className="footer-content">
        <p className="footer-brand">🌿 <strong>Serenah Skincare Profesional</strong></p>
        <p className="footer-author">
          Sitio Realizado por <strong>Jesús Trujillo</strong> para Talento Tech 2026
        </p>
        <div className="footer-links">
          <span><i className="bi bi-whatsapp"></i> Atención personalizada</span>
          <span><i className="bi bi-instagram"></i> @serenah.skincare</span>
          <span><i className="bi bi-shield-check"></i> Compra 100% segura</span>
        </div>
      </div>
    </footer>
  );
};
