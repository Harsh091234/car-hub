'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import CustomButton from './ui/CustomButton'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 0) // triggers immediately
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
  
  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-100 ${
  scrolled
    ? 'bg-white/20 backdrop-blur-3xl border-b border-b-transparent ' // blur + border on scroll
    : 'bg-white border-b border-b-gray-200' // no visible border at top
}`}

    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <div className="h-8 w-34">
          <img src="/logo.svg" alt="CarHub Logo" className='object-fill h-full w-full' />
        </div>

        {/* Sign In Button */}
        <div>
          <CustomButton
            title="Sign in"
            containerStyles="bg-gray-100 text-[var(--color-primary)] py-1.5 px-7 text-xs rounded-full hover:bg-gray-200 transition border border-gray-300"
            btnType='button'
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
