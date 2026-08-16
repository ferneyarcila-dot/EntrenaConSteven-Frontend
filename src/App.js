import { useEffect, useState } from "react";
import "./App.css";
import FormularioRegistro from "./FormularioRegistro";
import FormularioLogin from "./FormularioLogin";

function App() {
  const [pantalla, setPantalla] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/videos")
      .then((respuesta) => respuesta.json())
      .then((datos) => setVideos(datos))
      .catch((error) => console.error("Error al cargar videos:", error));
  }, []);

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

        <div className="hero-botones">
          <button>VER VIDEOS</button>

          <button onClick={() => setPantalla("registro")}>
            REGISTRARSE
          </button>

          <button onClick={() => setPantalla("login")}>
            INICIAR SESIÓN
          </button>
        </div>

      </header>

      {pantalla === "registro" && <FormularioRegistro />}

      {pantalla === "login" && <FormularioLogin />}

      <section className="videos">

        <h2>VIDEOS DESTACADOS</h2>

        <div className="cards">

          {videos.map((video) => (
            <div className="card" key={video.id}>
              <h3>{video.titulo}</h3>
              <p>{video.descripcion}</p>
              <p>Nivel: {video.nivel}</p>
              <p>Duración: {video.duracion} minutos</p>

              <button onClick={() => window.open(video.url, "_blank")}>
                Ver Video
              </button>
            </div>
          ))}

        </div>

      </section>

      <footer>
        © 2026 EntrenaConSteven
      </footer>

    </div>
  );
}

export default App;