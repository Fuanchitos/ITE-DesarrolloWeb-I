'use client'
import React, { useState } from 'react';
import { obtenerProductosDummy } from '@/libs/Index-Fetch';
import TarjetaProductoDummy from '@/components/TarjetaProductoDummy';

const DummyJsonPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const openModal = async () => {
    const data = await obtenerProductosDummy();
    setProducts(data.products);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <button onClick={openModal}>Abrir Modal</button>
    
      
      {products.map((producto)=> <TarjetaProductoDummy producto={producto}/>)}
      <button onClick={closeModal} className="mt-4">Cerrar Modal</button>
    </div>
  );
};

export default DummyJsonPage