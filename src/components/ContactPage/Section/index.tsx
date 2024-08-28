'use client'
import { Envelope, Link, MapPin, Phone } from 'phosphor-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Balancer from 'react-wrap-balancer'

export default function SectionContact() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center gap-5 md:gap-12 ">
      <div className="bg-white w-full h-auto flex flex-col items-center gap-[10px]">
        <h1 className='text-5xl font-bold'>Nos Contate</h1>
        <Balancer>
          <p className=' text-lg md:text-lg font-medium text-center text-gray-300'>Any question or remarks? Just write us a message!</p>
        </Balancer>
      </div>
      <div className=' w-full h-auto bg-white flex flex-row items-start justify-center p-5'>
        <div className=' h-full w-full max-w-[491px] flex flex-col items-center justify-center md:items-start md:Sjustify-start bg-green rounded-[10px] gap-9 md:gap-28 px-[40px] py-[40px]'>
          <div className=' flex flex-col gap-[6px]'>
            <h1 className='text-white font-semibold text-xl md:text-[28px] text-center'>Informações de Contato</h1>
            <p className=' text-gray-200 text-[11px] md:text-lg font-normal text-center md:text-start'>Say something to start a live chat!</p>
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
      </div>
    </div>
  )
}