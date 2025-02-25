import { useState } from "react";

function FormApp() {
  const [matricula, setMatricula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [carrera, setCarrera] = useState("");
  const [submitted, setSubmitted] = useState(false); 

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmitted(true); 
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Universidad"
          value={universidad}
          onChange={(e) => setUniversidad(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Carrera"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>

      
      {submitted && (
        <p>
        Datos Ingresados: {matricula}, {nombre}, {apellidos}, {edad} años, 
        {universidad}, carrera: {carrera}.
      </p>
      )}
    </div>
  );
}

export default FormApp;
