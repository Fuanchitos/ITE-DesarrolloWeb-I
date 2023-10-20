import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <header className='p-4 bg-[#e63946]'>
    <ul className='flex justify-evenly text-black uppercase'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/fakestore'}>FakeStore</Link></li>
        <li><Link href={'/dummyjson'}>DummyJSON</Link></li>
        
    </ul>
    </header>
    
  )
}

export default Navbar