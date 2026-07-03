import { useState } from "react";

function FormularioLogin() {
  const [datos, setDatos] = useState({
    correo: "",
    password: ""
  });
const [mensaje, setMensaje] = useState("");
  const manejarCambio = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

 const iniciarSesion = async (e) => {
  e.preventDefault();

  const respuesta = await fetch("http://localhost:3001/usuarios");
  const usuarios = await respuesta.json();

  const usuarioEncontrado = usuarios.find(
    (usuario) =>
      usuario.correo === datos.correo &&
      usuario.password === datos.password
  );

  if (usuarioEncontrado) {
    setMensaje("✅ Autenticación satisfactoria");
  } else {
    setMensaje("❌ Error en la autenticación");
  }
};
  return (
    <section className="formulario">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={iniciarSesion}>

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={datos.correo}
          onChange={manejarCambio}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={datos.password}
          onChange={manejarCambio}
          required
        />

        <button type="submit">
          Iniciar Sesión
        </button>

      </form>
      <p className="mensaje">{mensaje}</p>
    </section>
  );
}

export default FormularioLogin;