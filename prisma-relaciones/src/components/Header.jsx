import React from 'react'
import { Ubuntu } from 'next/font/google'
import Link from 'next/link'


const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })

const Header = ({title}) => {
  return (
    <header className={`p-8 bg-[#014ba0] ${ubuntu.className}`}> 
   
        <h1 className="uppercase text-2xl text-white text-center font-bold"
        >{title}PRISMA RELACIONES</h1>
         <ul className='flex justify-evenly text-white'>
      <li><Link href={'/categorias'}>CATEGORIAS</Link></li>
      <li><Link href={'/'}>INICIO</Link></li>
      <li><Link href={'/comidas'}>COMIDAS</Link></li>
    </ul>
    </header>
    
  )
}

export default Header