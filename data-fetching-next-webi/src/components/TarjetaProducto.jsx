import React from 'react'
import Image from 'next/image'

const TarjetaProducto = ({producto}) => {
  return (
          <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Image
            className="image"
              src={producto.image}
              alt="imagen del producto"
              width={200}
              height={200}
              style={{ with: 200, height: 200 }}
            />
            <p className="title">{producto.title}</p>
            <p className="price">{producto.price}</p>
            <p className="description">{producto.description}</p>
            
           
          </div>

  )
}

export default TarjetaProducto