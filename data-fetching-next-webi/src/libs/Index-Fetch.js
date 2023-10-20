/**
 *  endpoint
 * @returns Regresa los productos
 */

export async function obtenerProductos() {
    const response = await fetch("https://fakestoreapi.com/products/");
    if (!response.ok) throw new Error("No se pudieron obtener los productos");
    return response.json();
  }

  /**
   * Fetch para obtener productos de DummyJsonApi
   * https://dummyjson.com/
   * endPoint: https://dummyjson.com/products
   */

  export async function obtenerProductosDummy(){
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error("No se pudieron obtener los productos");
    return response.json();
  }