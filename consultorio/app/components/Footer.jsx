import React from 'react'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })

const Footer = ({title}) => {
  return (
    <footer className={`p-10 bg-slate-800 ${ubuntu.className} fixed bottom-0 w-full`}> 
    <h1 className="uppercase text-2xl text-white text-center font-bold ">{title}
    </h1>

  </footer>
  )
}

export default Footer