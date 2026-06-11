import { useState } from "react";

// Tarjetas iniciales de ejemplo (como las que se ven en la imagen)
const tarjetasIniciales = [
  {
    id: 1,
    title: "Mountain Retreat",
    description: "Explore scenic trails and breathtaking views.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  },
  {
    id: 2,
    title: "Delicious Recipes",
    description: "Find new culinary inspirations daily.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
  },
];

function App() {
  // Estado del formulario (los campos del formulario)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  // Estado de las tarjetas creadas
  const [cards, setCards] = useState(tarjetasIniciales);

  // Actualiza el campo del formulario que cambia el usuario
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ SPREAD OPERATOR: copiamos todo formData y solo pisamos el campo que cambió
    setFormData({ ...formData, [name]: value });
  };

  // ✅ EVENTO onSubmit: se dispara cuando el usuario hace clic en "Add Card"
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Validación básica
    if (!formData.title.trim() || !formData.description.trim()) return;

    // Creamos la nueva tarjeta con un id único y los datos del formulario
    const nuevaTarjeta = {
      id: Date.now(), // id único basado en timestamp
      // ✅ SPREAD OPERATOR: copiamos todos los campos de formData a la nueva tarjeta
      ...formData,
    };

    // Añadimos la nueva tarjeta al array existente
    // ✅ SPREAD OPERATOR: copiamos todas las tarjetas anteriores y añadimos la nueva
    setCards([...cards, nuevaTarjeta]);

    // Limpiamos el formulario
    setFormData({ title: "", description: "", image: "" });
  };

  // Elimina una tarjeta por su id
  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div style={{ minHeight: "100vh", background: "#e8eaf0" }}>
      {/* NAVBAR */}
      <nav
        style={{
          background: "#3a4a8a",
          color: "white",
          padding: "0 2rem",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
          Card Creator - React App
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>About</span>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ display: "flex", gap: "1.5rem", padding: "1.5rem" }}>

        {/* PANEL IZQUIERDO: Formulario */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "1.5rem",
            width: "280px",
            flexShrink: 0,
            height: "fit-content",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "1.25rem", fontSize: "1.3rem" }}>
            Add New Card
          </h2>

          {/* ✅ onSubmit: cuando el usuario hace submit, ejecuta handleSubmit */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            
            <div>
              <label style={{ color: "#3a6bcc", display: "block", marginBottom: "4px", fontSize: "0.9rem" }}>
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter Card Title"
                value={formData.title}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ color: "#3a6bcc", display: "block", marginBottom: "4px", fontSize: "0.9rem" }}>
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter a short description..."
                value={formData.description}
                onChange={handleChange}
                rows={4}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", resize: "vertical", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ color: "#3a6bcc", display: "block", marginBottom: "4px", fontSize: "0.9rem" }}>
                Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Paste image address..."
                value={formData.image}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: "#3a6bcc",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Add Card
            </button>
          </form>
        </div>

        {/* PANEL DERECHO: Tarjetas creadas */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "1.25rem", fontSize: "1.3rem" }}>
              Created Cards: {cards.length}
            </h2>

            {/* ✅ MÉTODO MAP: recorremos el array 'cards' y renderizamos una tarjeta por cada elemento */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "white",
                  }}
                >
                  {/* Imagen */}
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: "100%", height: "130px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "130px",
                        background: "#dde3f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#888",
                        fontSize: "0.85rem",
                      }}
                    >
                      Sin imagen
                    </div>
                  )}

                  {/* Contenido */}
                  <div style={{ padding: "0.75rem" }}>
                    <p style={{ fontWeight: "bold", margin: "0 0 4px", fontSize: "0.95rem" }}>
                      {card.title}
                    </p>
                    <p style={{ color: "#555", margin: "0 0 0.75rem", fontSize: "0.85rem", lineHeight: 1.4 }}>
                      {card.description}
                    </p>
                    <button
                      onClick={() => handleDelete(card.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#888",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.85rem",
                        padding: 0,
                        float: "right",
                      }}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;