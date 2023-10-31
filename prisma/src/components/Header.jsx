import React from 'react'
import { Ubuntu } from 'next/font/google'
import Link from 'next/link'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })

const Header = ({title}) => {
  return (
    <header className={`p-8 bg-[#192655] ${ubuntu.className}`}> 
    <ul className='flex justify-evenly'>
      <li><Link href={'/consulta'}>Consulta</Link></li>
      <li><Link href={'/registro'}>Registro</Link></li>
    </ul>
        <h1 className="uppercase text-2xl text-white text-center font-bold"
        >{title}HOME</h1>
    </header>
  )
}

export default Header