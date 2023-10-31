'use client'
import React, { useEffect, useState } from "react";

async function obtenerComidas() {
  const response = await fetch("http://localhost:3000/api/comidas");
  return response.json();
}

async function obtenerCategorias() {
  const response = await fetch("http://localhost:3000/api/categorias");
  return response.json();
}

async function agregarComida(comida) {
  const response = await fetch("http://localhost:3000/api/comidas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comida),
  });
  return response.json();
}

async function editarComida(comida) {
  const response = await fetch(`http://localhost:3000/api/comidas/${comida.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comida),
  });
  return response.json();
}

async function eliminarComida(comidaId) {
  const response = await fetch(`http://localhost:3000/api/comidas/${comidaId}`, {
    method: "DELETE",
  });
  return response.json();
}

const FormularioComidas = () => {
  const [comidaData, setComidaData] = useState([]);
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [comidaEditando, setComidaEditando] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const comidas = await obtenerComidas();
      setComidaData(comidas);
      const categorias = await obtenerCategorias();
      setCategorias(categorias);
    }
    fetchData();
  }, []);

  const limpiarFormulario = () => {
    setNombre("");
    setIngredientes("");
    setCategoriaId("");
  };

  const handleAgregarComida = async (e) => {
    e.preventDefault();

    if (modoEdicion) {
      // Si estamos en modo edición, actualizamos la comida existente
      if (comidaEditando) {
        const comidaActualizada = {
          id: comidaEditando,
          nombre,
          ingredientes,
          categoriaId,
        };
        try {
          const respuesta = await editarComida(comidaActualizada);
          if (respuesta) {
            const nuevasComidas = comidaData.map((comida) =>
              comida.id === comidaActualizada.id ? comidaActualizada : comida
            );
            setComidaData(nuevasComidas);
            setModoEdicion(false);
            limpiarFormulario();
          }
        } catch (error) {
          console.error("Error al editar la comida:", error);
        }
      }
    } else {
      // Si no estamos en modo edición, agregamos una nueva comida
      const nuevaComida = {
        nombre,
        ingredientes,
        categoriaId,
      };
      try {
        const respuesta = await agregarComida(nuevaComida);
        if (respuesta) {
          setComidaData([...comidaData, respuesta]);
          limpiarFormulario();
        }
      } catch (error) {
        console.error("Error al agregar la comida:", error);
      }
    }
  };

  const handleEditarComida = (comida) => {
    setModoEdicion(true);
    setComidaEditando(comida.id);
    setNombre(comida.nombre);
    setIngredientes(comida.ingredientes);
    setCategoriaId(comida.categoriaId);
  };

  const handleCancelarEdicion = () => {
    setModoEdicion(false);
    setComidaEditando(null);
    limpiarFormulario();
  };

  const handleEliminarComida = async (comidaId) => {
    try {
      const respuesta = await eliminarComida(comidaId);
      if (respuesta) {
        const nuevasComidas = comidaData.filter((comida) => comida.id !== comidaId);
        setComidaData(nuevasComidas);
        limpiarFormulario();
      }
    } catch (error) {
      console.error("Error al eliminar la comida:", error);
    }
  };

  return (
    <main>
      
      <div style={{
                          
                          margin:'20px',
                          color: 'black',
                          border: 'none',
                          fontSize: '16px',
                          textAlign: 'center'
                        }}>
        <div >
          <div className="">
            <div className="">
              <div className="">
              <h2 style={{ backgroundColor: '#bd701f', fontSize: '24px', padding: '10px', color: 'white',textAlign:'center' }}>Lista de Comidas</h2>
               
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr className="align-middle">
                      <th>ID CATEGORIA</th>
                      <th>ID COMIDA</th>
                      <th>NOMBRE</th>
                      <th>INGREDIENTES</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {comidaData.map((comida, id) => (
                      <tr key={comida.id}>
                        <td>{comida.categoriaId}</td>
                        <td>{comida.id}</td>
                        <td>{comida.nombre}</td>
                        <td>{comida.ingredientes}</td>
                        
                        <td>
                        <button
                        style={{
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          border: 'none',
                          padding: '10px 20px',
                          fontSize: '18px',
                          cursor: 'pointer',
                        }}
                            onClick={() => handleEditarComida(comida)}
                          >
                            Editar
                          </button>
                          <button
                        style={{
                          backgroundColor: '#f44336',
                          color: 'white',
                          border: 'none',
                          padding: '10px 20px',
                          fontSize: '18px',
                          cursor: 'pointer',
                        }}
                            onClick={() => handleEliminarComida(comida.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                      
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{
                          paddingRight: '40px',
                          margin:'20px',
                          color: 'black',
                          border: 'none',
                          fontSize: '18px',
                          cursor: 'pointer',
                        }}>
              <form onSubmit={handleAgregarComida}>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre de la comida"
                    required
                  />
                  <input
                    type="text"
                    value={ingredientes}
                    onChange={(e) => setIngredientes(e.target.value)}
                    placeholder="Ingredientes"
                    required
                  />
                  <select
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                    required
                  >
                    <option value="">Selecciona una categoría</option>
                    {categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.nombre}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="bg-[#4CAF50] text-white">
                    {modoEdicion ? "Guardar" : <i className="fa-solid fa-circle-plus">Agregar Comida</i>}
                  </button>
                  {modoEdicion && (
                    <button
                      className="btn btn-light"
                      onClick={handleCancelarEdicion}
                    >
                      Cancelar
                    </button>
                  )}
                </form>
                </div>
            </div>
          </div>
        </div>
        <div className="modal fade"></div>
      </div>
    </main>
  );
};

export default FormularioComidas;
