import React from 'react'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })

const Header = ({title}) => {
  return (
    <header className={`p-8 bg-[#192655] ${ubuntu.className}`}> 
        <h1 className="uppercase text-2xl text-white text-center font-bold"
        >{title}Prisma</h1>
    </header>
  )
}

export default Header