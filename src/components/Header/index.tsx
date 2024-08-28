'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  
  return (
    <>
      <header className="   w-full text-lg bg-white top-0 z-40">
        <nav className=" flex flex-row items-center justify-around">
          <Image
            src="/Logo-Rich-Beauty.png"
            height={80}
            width={200}
            className="object-contain"
            alt="Rich Beauty Logo"
          />
          <ul className="hidden md:flex gap-8 text-base font-medium">
            <li>
              <Link href="/" className="hover:text-green transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@richbeauty" target="_blank" className="hover:text-green transition-colors duration-300">Tv Rich Beauty</Link>
            </li>
            <li>
              <Link href="/Contato" className="hover:text-green transition-colors duration-300">Contato</Link>
            </li>
          </ul>

          <div className='hidden md:flex'>
            <Link href="#parceiro">
              <button 
                className="px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green"
              >
                QUERO SER PARCEIRO
              </button>
            </Link>
          </div>
          
        </nav>
      </header>
      
    </>
  )
}
