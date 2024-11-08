'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex flex-col lg:flex-row justify-between items-center w-full bg-[#E2DBD7] p-4 lg:p-8'> 
        <div className='flex justify-between items-center w-full lg:w-auto'>
            <h1 className='text-2xl lg:text-3xl'>Maham</h1>
            {/* Hamburger Icon for Mobile */}
            <button 
              className='lg:hidden text-2xl focus:outline-none' 
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9776; {/* This is a hamburger icon */}
            </button>
        </div>
        {/* Responsive Links */}
        <div className={`flex-col lg:flex-row lg:flex items-center ${isOpen ? 'flex' : 'hidden'} w-full lg:w-auto`}>
            <ul className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-7 text-lg lg:text-xl'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar;
