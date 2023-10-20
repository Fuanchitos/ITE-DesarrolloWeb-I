import React from "react";
import { obtenerProductos } from "@/libs/Index-Fetch";
import TarjetaProducto from "@/components/TarjetaProducto";

const FakeStorePage = async () => {
  const data = await obtenerProductos();
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {data.map((producto)=> <TarjetaProducto producto={producto}/>)}
      
    </div>
  );
};

export default FakeStorePage;
