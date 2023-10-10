import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export const Navbar = () => {
  return (
  <header className='bg-red-200 w-1/5 space-y-5'>
    <div className='flex justify-center items-center'>LOGO
    <Image 
        src={''}
        alt='gato gordo'
        width={100}
        height={100}
        /></div>
    <div>
    <nav className='flex flex-col justify-center items-center bg-blue-400 space-y-5'>
        <ul className='space-y-5'>
            <li>LINK 1</li>
            <li>LINK 2</li>
            <li>LINK 3</li>
        </ul>
        <div className=' flex flex-col'>

        </div>
    </nav>
    </div>
    <div>LINKS</div>
    <div>SIGN</div>
  </header>
    
  )
}
