import React from 'react'
import Image from 'next/image'

const TarjetaProductoDummy = ({producto}) => {
  return (
          <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Image
            className="image"
              src={producto.thumbnail}
              alt="imagen del producto"
              width={200}
              height={200}
              style={{ with: 200, height: 200 }}
            />
            <p className="title">{producto.title}</p>
            <p className="price">{producto.price}</p>
            <p className="description">{producto.description}</p>
            <p className="rating">{producto.rating}</p>
            <p className="stong">{producto.stock}</p>
          </div>

  )
}

export default TarjetaProductoDummy