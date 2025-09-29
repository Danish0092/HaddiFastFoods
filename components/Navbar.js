"use client";
import React, { useState } from 'react'


import Link from 'next/link';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false)
  const [showSidebar, setSidebar] = useState(false)

  return (
    <>
      <nav className='flex h-20 fixed w-full z-30 top-0 items-center justify-between text-white text-xl sm:text-2xl bg-neutral-900 px-2.5 sm:px-5'>
        <div className='flex items-center gap-2 sm:gap-6'>
          <i onClick={() => setSidebar(true)} className="ri-menu-line font-bold cursor-pointer"></i>
          <a href="/">
            <img src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=256&q=75"
              alt="logo" className='h-12' />
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <Link href="/login">
            <button className='bg-neutral-800 rounded-sm py-1 sm:py-2.5 px-2 sm:px-5 cursor-pointer flex items-center gap-2'>
              <i className="ri-account-circle-line"></i>
            </button>
          </Link>

          <button
            onClick={() => setShowCart(true)}
            className='relative bg-neutral-800 rounded-sm py-1 sm:py-2.5 px-2 sm:px-5 cursor-pointer'>
            <i className="ri-shopping-bag-line"></i>
            <span className='absolute flex items-center justify-center -top-1 sm:top-1 -right-1 sm:right-1 bg-red-500 text-sm w-4 sm:w-5 h-4 sm:h-5 rounded-full'>1</span>
          </button>
        </div>
      </nav>

      {/* npm */}
    
    
    </>
  )
}

export default Navbar
