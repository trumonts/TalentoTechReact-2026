import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Contacto } from "./components/Contacto/Contacto";

function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Redirección o fallback para rutas no encontradas */}
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
