'use client'
import React, { useState } from 'react'

const Formulario = () => {
const [nombre,setNombre] = useState('')
const [estatura,setEstatura] = useState('')
const [peso,setPeso] = useState('')
const [bmi,setBmi] = useState(0)
const [error, setError] = useState(false)


const handleFormulario = (e) => {
    e.preventDefault()

    if([nombre,estatura,peso].includes('')){
        setError(true)
        return
    }
    let bmi = peso / Math.pow(estatura/100,2)
    setBmi(bmi)
    setError(false)

}
  return (
    <div>
    <form className="flex flex-col space-y-2 justify-center p-3
     bg-white-300 border-cyan-500 m-8    border-1 border-solid">
     
     { error && <div> Error campos sin llenar</div>}

        <div className='flex flex-col w-full'>
            <label htmlFor="nombre" >Nombre</label>
            <input 
            type="text" 
            id='nombre' 
            className='bg-slate-300 p-2 rounded-md'
            placeholder='Nombre'
            onChange={e => setNombre(e.target.value)}
            value={nombre} />
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor="nombre" >Estatura</label>
            <input 
            type="text" 
            id='estatura' 
            className='bg-slate-300 p-2 rounded-md'
            placeholder='En CM'
            onChange={e => setEstatura(e.target.value)}
            value={estatura}/>
        </div>
        <div className='flex flex-col w-full'>
            <label htmlFor="nombre" >Peso</label>
            <input 
            type="text" 
            id='peso' 
            className='bg-slate-300 p-2 rounded-md'
            placeholder='En KG'
            onChange={e => setPeso(e.target.value)}
            value={peso}/>
        </div>

        <div className='flex flex-col w-full'>
            <input 
            type="button" 
            className='bg-slate-300 p-2 rounded-md cursor-pointer hover:bg-slate-400 hover:text-white'
            value="Calcular"
            onClick={handleFormulario}/>
        </div>

    </form>
    {bmi === 0 ? ('') :
    <section 
    className='text-2xl
    text-center
    m-5
    bg-slate-500
    rounder-md'>
        {bmi.toFixed(2)}
    </section>}
    </div>
  )
}

export default Formulario