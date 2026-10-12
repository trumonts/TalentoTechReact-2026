# TalentoTech2026 - Serenah Skincare

**Proyecto Integrador Frontend React JS**  
Proyecto Realizado por **Jesús Trujillo**

---

## 🌿 Sobre el Proyecto

**Serenah** es una aplicación web e-commerce de productos y rutinas profesionales de skincare desarrollada con **React** y empaquetada con **Vite**.

Permite a los usuarios explorar kits de cuidado facial, filtrar por categorías, consultar los detalles de cada producto, gestionar un carrito de compras interactivo con persistencia local y comunicarse a través de un formulario de contacto.

---

## 📁 Estructura del Proyecto

```text
.
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── OLD_Project_Files/             (Archivos de respaldo de la versión HTML+CSS+JS)
├── public/
│   ├── img/                       (Imágenes estáticas y recursos de productos)
│   └── data/
│       └── products.json          (Catálogo de productos de skincare)
└── src/
    ├── App.jsx                    (Enrutador principal con Routes y Route)
    ├── App.css                    (Estilos de layout general)
    ├── index.css                  (Variables CSS, resets y utilidades globales)
    ├── main.jsx                   (Punto de entrada con BrowserRouter y CartProvider)
    ├── assets/                    (Imágenes y logos del proyecto)
    ├── context/
    │   └── CartContext.jsx        (Contexto del carrito con useCart y CartProvider)
    └── components/
        ├── Header/                (PreHeader, logo y barra de navegación responsive)
        ├── Nav/                   (Enlaces de navegación y CartWidget con contador)
        ├── ItemListContainer/     (Contenedor principal con Hero Banner y filtros)
        ├── ItemList/              (Grilla de productos mapeados)
        ├── Item/                  (Tarjeta reutilizable para catálogo, detalle y carrito)
        ├── ItemDetailContainer/   (Búsqueda de producto por :id mediante useParams)
        ├── ItemDetail/            (Vista de detalle del producto con botón de compra)
        ├── Cart/                  (CartView, CartList, CartItem, CartSummary)
        ├── Nosotros/              (Misión y filosofía de la marca Serenah)
        ├── Contacto/              (Formulario controlado de atención al cliente)
        └── Footer/                (Pie de página con créditos de Jesús Trujillo)
```

---

## 🚀 Rutas de la Aplicación

| Ruta | Descripción |
| --- | --- |
| `/` | Portada principal, Hero Banner y catálogo completo |
| `/category/:category` | Catálogo filtrado por categoría (`kits`, `cremas`, `serums`) |
| `/product/:id` | Detalle específico del producto seleccionado |
| `/cart` | Vista del carrito de compras y resumen de orden |
| `/nosotros` | Información sobre la marca, misión y filosofía |
| `/contacto` | Formulario de contacto y asesoramiento |

---

## 🛠️ Comandos para ejecutar el proyecto

Clonar el repositorio y entrar en el directorio:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```