'use client'
import React, { useState, useEffect } from 'react';

async function obtenerFutbolistas(){
  const futbolistas = await fetch('http://localhost:3000/api/futbolistas')
    return futbolistas.json()
  }

const Formulario = () => {
  const [futbolistasData, setFutbolistasData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerFutbolistas();
      setFutbolistasData(data);
    };

    fetchData();
  }, []); // El arreglo vacío [] significa que este efecto se ejecuta una vez al cargar el componente

  return (
    <main>
      <div className='m-4 p-7 text-left bg-slate-500 text-white '>
        <div className="grid grid-cols-4 gap-7 ">
          {futbolistasData.map(futbolistas => (
            <div className="p-4 bg-white text-black border border-gray-300 " key={futbolistas.id}>
              <p>ID DEL JUGADOR: {futbolistas.id}</p>
              <p>NOMBRE DEL JUGADOR: {futbolistas.nombre}</p>
              <p>POSICION DEL JUGADOR: {futbolistas.posicion}</p>
              <p>NIVEL DEL JUGADOR: {futbolistas.nivel}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Formulario;
