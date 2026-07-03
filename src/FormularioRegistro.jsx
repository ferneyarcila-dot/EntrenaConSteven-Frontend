import { useState } from "react";

function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarRegistro = async (event) => {
    event.preventDefault();

    if (contrasena !== confirmarContrasena) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
    nombre,
    usuario,
    correo,
    password: contrasena
    };

    await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoUsuario)
    });

    setMensaje("Usuario registrado correctamente.");
    setNombre("");
    setUsuario("");
    setCorreo("");
    setContrasena("");
    setConfirmarContrasena("");
  };

  return (
    <section className="formulario">
      <h2>Registro de usuario</h2>

      <form onSubmit={manejarRegistro}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />

        <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

        <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />

        <input type="password" placeholder="Confirmar contraseña" value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} required />

        <button type="submit">Registrarse</button>
      </form>

      <p className="mensaje">{mensaje}</p>
    </section>
  );
}

export default FormularioRegistro;