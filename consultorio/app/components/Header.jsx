import React from 'react'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })

const Header = ({title}) => {
  return (
    <header className={`p-10 bg-slate-800 ${ubuntu.className}`}> 
    <h1 className="uppercase text-2xl text-white text-center font-bold ">{title}
    </h1>

  </header>
  )
}

export default Header