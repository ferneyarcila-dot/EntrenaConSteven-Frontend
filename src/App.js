import "./App.css";

function App() {
  return (
    <div>

      <nav className="navbar">
        <h2>🏋️ EntrenaConSteven</h2>

        <ul>
          <li>Inicio</li>
          <li>Videos</li>
          <li>Registro</li>
          <li>Contacto</li>
        </ul>
      </nav>

      <header className="hero">

        <h1>ENTRENA CON STEVEN</h1>

        <p>
          Tu plataforma para aprender a entrenar desde cualquier lugar.
        </p>

        <button>VER VIDEOS</button>

      </header>

      <section className="videos">

        <h2>VIDEOS DESTACADOS</h2>

        <div className="cards">

          <div className="card">
            <h3>Como Empezar en el Gym</h3>
            <p>Rutina completa para principiantes.</p>
            <button>Ver Video</button>
          </div>

          <div className="card">
            <h3>Mi Rutina de 3 Días</h3>
            <p>Entrenamiento básico para comenzar.</p>
            <button>Ver Video</button>
          </div>

          <div className="card">
            <h3>Evita Lesiones</h3>
            <p>Calentamiento para principiantes.</p>
            <button>Ver Video</button>
          </div>

        </div>

      </section>

      <footer>

        © 2026 EntrenaConSteven

      </footer>

    </div>
  );
}

export default App;