import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
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
    <a href="#" className="hover:text-green transition-colors duration-300">Home</a>
  </li>
  <li>
    <a href="#" className="hover:text-green transition-colors duration-300">Tv Rich Beauty</a>
  </li>
  <li>
    <a href="#" className="hover:text-green transition-colors duration-300">Contato</a>
  </li>
</ul>


          <div className='hidden md:flex'>
            <button 
              className='px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green'
            >
              QUERO SER PARCEIRO
            </button>
          </div>
          
        </nav>
      </header>
      
    </>
  )
}
