'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
import ButtonP from '../buttonP/ButtonP'

export default function Navbar() {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => setScroll(document.documentElement.scrollTop);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const className = scroll ? "onScroll" : "";
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={`w-[100%] bg-nav p-4 h-full bd-bottom ${className}`}>

        <nav className="m-auto flex max-w-7xl items-center justify-between p-2 lg:px-4" aria-label="Global">

            <div className="flex lg:flex-1">
                <Link href="#" className="-m-1.5 p-1.5 flex">
                    <span className="h5-bold text-gray font-clash">get</span>
                    <span className="h5-bold text-primary-300 font-clash">linked</span>
                </Link>
            </div>

            <div className="flex lg:hidden ">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
                </button>   
            </div>

            <div className='lg:flex hidden lg:flex-1 gap-x-8 items-center justify-between'>
                <Link href='#timeline' className='text-gray p3-semi-bold'>
                    TimeLine
                </Link>

                <Link href='#overview' className='text-gray p3-semi-bold'>
                    Overview
                </Link>

                <Link href='#faqs' className='text-gray p3-semi-bold'>
                    faqs
                </Link>

                <Link href='#contact' className='text-gray p3-semi-bold'>
                    Contact
                </Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end" >
                <Link href='/register'>
                    <ButtonP title='Register' events=''/>
                </Link>
            </div>

        </nav>

    </header>
  )
}
