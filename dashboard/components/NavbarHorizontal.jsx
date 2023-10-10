'use client'
import { Popover, Transition } from '@headlessui/react'
import React from 'react'
import {ImMenu} from 'react-icons/im'


export const NavbarHorizontal = () => {
  return (
    <header>
      {/* Menu responsivo */}
        <Popover className='sm:hidden'>
          <Popover.Button><ImMenu></ImMenu></Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Transition
          enter="transition-opacity duration-20"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
        
      
          <Popover.Panel className='absolute w-2/3 
          bg-yellow-400 h-full'>
            <div>LOGO</div>
            <nav className=' bg-yellow-300'>
              <div>INICIO</div>
              <div>PRODUCTOS</div>
              <div>BLOG</div>
              <div>NOSOTROS</div>
            </nav>
          </Popover.Panel>
          </Transition>
        </Popover>
    </header>
  )
}
