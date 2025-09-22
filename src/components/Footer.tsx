'use client'

import { Copyright } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { footerLinks } from '../constants/index'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t border-t-gray-300   pt-6 pb-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">

        {/* Left: Logo + Copyright */}
        <div className="flex flex-col items-start gap-2 md:gap-4 md:w-1/3">
          <Image src="/logo.svg" alt="Logo" width={120} height={120} />
          <p className="flex items-center gap-1  text-sm text-gray-600">
            CarHub 2025, All rights reserved
            <Copyright className="w-4 h-4 text-gray-500" />
          </p>
        </div>

        {/* Right: Footer Links */}
        <div className="flex flex-wrap md:flex-nowrap justify-between flex-1 gap-4 md:gap-8">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-1 md:gap-2 min-w-[120px]">
              <h3 className="font-semibold text-sm">{link.title}</h3>
              {link.links.map((item) => (
                <p key={item.title} className="text-sm hover:text-gray-900 text-gray-600 cursor-pointer transition">
                  {item.title}
                </p>
              ))}
            </div>
          ))}
        </div>

      </div>
      <div className="flex flex-col px-7 md:flex-row items-center justify-between border-t border-gray-200 pt-4 text-gray-600 text-xs gap-0 md:gap-2">
  {/* Left: CarHub copyright */}
  <Link href="/" className=" mb-0.5">
    @2024 CarHub, All rights reserved
  </Link>

  {/* Right: Privacy & Terms */}
  <div className="flex items-center gap-4 md:gap-10">
    <Link href="/" className="hover:text-gray-700 transition">
      Privacy & Policy
    </Link>
   
    <Link href="/" className="hover:text-gray-700 transition">
      Terms & Condition
    </Link>
  </div>
</div>

    </footer>
  )
}

export default Footer
