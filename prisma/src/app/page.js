import React from "react";

async function obtenerFutbolistas(){
  const futbolistas = await fetch('http://localhost:3000/api/futbolistas')

  return futbolistas.json()
}

const HomePage = async () => {
  const data = await obtenerFutbolistas()
  return (
    <main>
      {data.map(futbolistas =>(
        <div>
        <p>{futbolistas.nombre}
        {futbolistas.nivel}</p>
      </div>
      ) 
      
    )
    }
    </main>
  )
}

export default HomePage