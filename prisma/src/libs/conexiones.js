/**
 * @param {*Pasar los futbolistas{nombre, nivel, posicion}} futbolista
*/

export async function crearFutbolista(futbolista){
    const response = await fetch('http://localhost:3000/api/artistas',
    {
        method: 'POST',
        body: JSON.stringify(futbolista),
        header: {"Contest-type": "application "}
    })
    return response.json()
}