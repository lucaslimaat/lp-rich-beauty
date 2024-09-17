'use client'
import { Envelope, Link, MapPin, Phone } from 'phosphor-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Balancer from 'react-wrap-balancer'

export default function SectionContact() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center gap-5 md:gap-12 ">
      <div className="bg-white w-full h-auto flex flex-col items-center gap-[10px]">
        <h1 className='text-5xl font-bold'>Nos Contate</h1>
        <p className=' text-lg md:text-lg font-medium text-center text-gray-300'>
          <Balancer>
            Alguma pergunta ou observação? Basta nos escrever uma mensagem!
          </Balancer>
        </p>
      </div>
      <div className=' w-full h-auto bg-white flex flex-wrap items-start justify-center p-5 gap-12'>
        <div className=' h-full w-full max-w-[491px] flex flex-col items-center justify-center md:items-start md:Sjustify-start bg-green rounded-[10px] gap-9 md:gap-28 px-[40px] py-[40px]'>
          <div className=' flex flex-col gap-[6px]'>
            <h1 className='text-white font-semibold text-xl md:text-[28px] text-center'>Informações de Contato</h1>
            <p className=' text-gray-200 text-[11px] md:text-lg font-normal text-center md:text-start'>Diga algo para iniciar uma conversa!</p>
          </div>
          <div className=' flex flex-col gap-[50px] items-center justify-center md:items-start md:justify-start'>
            <div className=' flex flex-col md:flex-row gap-6 items-center justify-center '>
              <Phone size={24} color="#ffffff" weight="fill" />
              <p className=' text-gray-200 text-xs md:text-base font-normal md:text-start'>(31)99999-9999</p>
            </div>
            <div className=' flex flex-col md:flex-row gap-6 items-center justify-center'>
              <Envelope size={24} color="#ffffff" weight="fill" />
              <p className=' text-gray-200 text-xs md:text-base font-normal md:text-start'>demo@gmail.com</p>
            </div>
            <div className=' flex flex-col md:flex-row gap-6 items-center justify-center'>
              <MapPin size={24} color="#ffffff" weight="fill" />
              <p className=' text-gray-200 text-xs md:text-base font-normal text-center md:text-start'>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
            </div>
          </div>
          <div className=' w-auto flex flex-row justify-start items-start gap-4'>
            <FaFacebook size={30} color='white'  />
            <FaInstagram size={30} color='white' />
            <FaLinkedin size={30} color='white'  />
          </div>
        </div>
        
        <div className='flex flex-wrap items-center justify-center mt-14'>
  <form className='w-full max-w-lg'>
    <div className='flex flex-wrap -mx-3 mb-4'>
      <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
        <div className="relative">
          <input
            className='appearance-none border-b-2 border-gray-400 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none focus:border-black transition-colors duration-1000 peer'
            id='firstName'
            type='text'
          />
          <label
            className='absolute left-1 top-0 text-gray-300 text-xs font-medium mb-2 transition-colors duration-1000 peer-focus:text-black'
            htmlFor='firstName'
          >
            Primeiro Nome
          </label>
        </div>
      </div>
      <div className='w-full md:w-1/2 px-3'>
        <div className="relative">
          <input
            className='appearance-none border-b-2 border-gray-400 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none focus:border-black transition-colors duration-1000 peer'
            id='lastName'
            type='text'
          />
          <label
            className='absolute left-1 top-0 text-gray-300 text-xs font-medium mb-2 transition-colors duration-1000 peer-focus:text-black'
            htmlFor='lastName'
          >
            Sobrenome
          </label>
        </div>
      </div>
    </div>
    <div className='flex flex-wrap -mx-3 mb-4'>
      <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
        <div className="relative">
          <input
            className='appearance-none border-b-2 border-gray-400 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none focus:border-black transition-colors duration-1000 peer'
            id='email'
            type='email'
          />
          <label
            className='absolute left-1 top-0 text-gray-300 text-xs font-medium mb-2 transition-colors duration-1000 peer-focus:text-black'
            htmlFor='email'
          >
            Email
          </label>
        </div>
      </div>
      <div className='w-full md:w-1/2 px-3'>
        <div className="relative">
          <input
            className='appearance-none border-b-2 border-gray-400 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none focus:border-black transition-colors duration-1000 peer'
            id='phone'
            type='text'
          />
          <label
            className='absolute left-1 top-0 text-gray-300 text-xs font-medium mb-2 transition-colors duration-1000 peer-focus:text-black'
            htmlFor='phone'
          >
            Telefone
          </label>
        </div>
      </div>
    </div>
    <div className='flex flex-wrap -mx-3 mb-4'>
      <div className='w-full px-3'>
        <div className="relative">
          <textarea
            className='appearance-none border-b-2 border-gray-400 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none focus:border-black transition-colors duration-1000 peer'
            id='message'
            rows={4}
          ></textarea>
          <label
            className='absolute left-1 top-0 text-gray-300 text-xs font-medium mb-2 transition-colors duration-1000 peer-focus:text-black'
            htmlFor='message'
          >
            Mensagem
          </label>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center'>
      <button
        className='bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        type='button'
      >
        Enviar
      </button>
    </div>
  </form>
</div>


        
</div>



    </div>
  )
}