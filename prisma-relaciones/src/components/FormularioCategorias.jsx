'use client'
import React, { useEffect, useState } from 'react';

async function obtenerCategorias() {
  const response = await fetch("http://localhost:3000/api/categorias");
  return response.json();
}

async function agregarCategoria(nombre) {
  const response = await fetch("http://localhost:3000/api/categorias", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre }),
  });
  if (response.status === 200) {
    return true;
  } else {
    throw new Error("No se pudo agregar la categoría");
  }
}

async function eliminarCategoria(id) {
  const response = await fetch("http://localhost:3000/api/categorias", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  if (response.status === 200) {
    return true;
  } else {
    throw new Error("No se pudo eliminar la categoría");
  }
}

async function editarCategoria(id, nuevoNombre) {
  const response = await fetch("http://localhost:3000/api/categorias", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, nombre: nuevoNombre }),
  });
  if (response.status === 200) {
    return true;
  } else {
    throw new Error("No se pudo editar la categoría");
  }
}

const FormularioCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const [nuevoNombreCategoria, setNuevoNombreCategoria] = useState('');

  useEffect(() => {
    obtenerCategorias().then(data => {
      setCategorias(data);
    });
  }, []);

  const handleAgregarCategoria = async () => {
    try {
      await agregarCategoria(nuevaCategoria);
      window.location.reload(); // Recargar la página para mostrar la lista actualizada
    } catch (error) {
      console.error(error);
    }
  };

  const handleEliminarCategoria = async (id) => {
    try {
      await eliminarCategoria(id);
      const nuevasCategorias = categorias.filter(categoria => categoria.id !== id);
      setCategorias(nuevasCategorias);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditarCategoria = (id) => {
    // Establecer la categoría que se está editando y su nombre actual
    setCategoriaEditando(id);
    const categoriaSeleccionada = categorias.find(categoria => categoria.id === id);
    setNuevoNombreCategoria(categoriaSeleccionada.nombre);
  };

  const handleGuardarEdicionCategoria = async (id) => {
    try {
      await editarCategoria(id, nuevoNombreCategoria);
      // Actualizar la lista de categorías después de editar
      const nuevasCategorias = categorias.map(categoria => {
        if (categoria.id === id) {
          return { ...categoria, nombre: nuevoNombreCategoria };
        }
        return categoria;
      });
      setCategorias(nuevasCategorias);
      // Limpiar la categoría que se está editando
      setCategoriaEditando(null);
  
      // Recargar la página después de guardar la edición
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleCancelarEdicionCategoria = () => {
    // Limpiar la categoría que se está editando
    setCategoriaEditando(null);
  };

  
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ backgroundColor: '#bd701f', fontSize: '24px', padding: '10px', color: 'white', textAlign: 'center' }}>Lista de Categorías</h2>
      <div style={{ flex: 1, width: '100%', overflow: 'auto' }}>
        <table style={{ width: '100%', border: '2px solid #ccc', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ccc', minWidth: '100px' }}>ID CATEGORIA</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ccc' }}>NOMBRE</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ccc', minWidth: '200px' }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map(categoria => (
              <tr key={categoria.id}>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #ccc', minWidth: '100px' }}>{categoria.id}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  {categoria.id === categoriaEditando ? (
                    <input
                      type="text"
                      value={nuevoNombreCategoria}
                      onChange={(e) => setNuevoNombreCategoria(e.target.value)}
                      style={{ padding: '5px', fontSize: '16px', width: '100%' }}
                    />
                  ) : (
                    categoria.nombre
                  )}
                </td>
                <td style={{ padding: '10px', textAlign: 'center', border: '1px solid #ccc', minWidth: '200px' }}>
                  {categoria.id === categoriaEditando ? (
                    <div>
                      <button
                        style={{
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          border: 'none',
                          padding: '10px 20px',
                          fontSize: '18px',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleGuardarEdicionCategoria(categoria.id)}
                      >
                        Guardar
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
                        onClick={handleCancelarEdicionCategoria}
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        style={{
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          border: 'none',
                          padding: '10px 20px',
                          fontSize: '18px',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleEditarCategoria(categoria.id)}
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
                        onClick={() => handleEliminarCategoria(categoria.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ alignSelf: 'flex-end', textAlign: 'right', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Nombre de la nueva categoría"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
          style={{ paddingRight: '55px', fontSize: '16px', height: '45px', padding: '15px'}}
        />
        <button
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            paddingRight: '10px',
            padding: '11px',
            fontSize: '18px',
            cursor: 'pointer',
            margin: '30px',
            
          }}
          onClick={handleAgregarCategoria}
        >
          Agregar Categoría
        </button>
      </div>
    </div>
  );
};

export default FormularioCategorias;