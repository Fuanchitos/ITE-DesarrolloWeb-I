'use client'
import React,{useState}from 'react'
import { crearFutbolista } from '@/libs/conexiones'

const RegistroPage = () => {
    const [nombre,setNombre] = useState('')
    const [nivel,setNivel] = useState('')
    const [posicion,setPosicion] = useState('')

    const guardarFutbolista = async (e) =>{
        e.preventDefaullt()
        const futbolista = {
            nombre,
            posicion,
            nivel,
        }
        const res = await crearFutbolista(artista)
    }

  return (
     <form className='grid grid-cols-2 gap-x-4' onSubmit={guardarFutbolista}>
        <div className='flex flex-col p-2'>
            <label htmlFor="">NOMBRE</label>
            <input type="text" placeholder='Pon un nombre' 
            onChange={e => setNombre(e.target.value)}/>

        </div>
        <button className='p-2' type='submit'>GUARDAR</button>
    </form>
  )
}

export default RegistroPage