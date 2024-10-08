'use client'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Balancer from 'react-wrap-balancer'
import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white w-auto h-auto flex flex-wrap items-start md:gap-24 gap-10 my-12 mx-28 justify-center">
      <div className=' w-auto h-auto flex flex-col md:justify-start md:items-start gap-8 justify-center items-center'>
        <h1 className=' font-bold text-lg'>Rich Beauty</h1>
        <p className=' font-normal text-sm text-gray w-[333px] text-center md:text-start'>
          Um ecossistema de inovação e empreendedorismo para negócios nas áreas de saúde, beleza e bem-estar.
        </p>
        <div className=' w-auto md:flex flex-row justify-center items-center gap-4 hidden'>
          <FaFacebook size={36}  />
          <Link href="https://www.instagram.com/rich_beauty_delivery/" target="_blanck"><FaInstagram size={36} /></Link>
          <FaLinkedin size={36} />
        </div>
      </div>
      <div className=' w-auto h-auto flex flex-col md:justify-start md:items-start gap-8 justify-center items-center'>
        <h1 className=' font-bold text-lg'>Market Place</h1>
        <p className=" font-medium text-sm">Novidades</p>
      </div>
      <div className=' w-auto flex flex-row justify-start items-start gap-4 md:hidden'>
          <FaFacebook size={36}  />
          <Link href="https://www.instagram.com/rich_beauty_delivery/" target="_blanck"><FaInstagram size={36} /></Link>
          <FaLinkedin size={36} />
        </div>
      <div className=' w-auto h-auto md:flex flex-col justify-start items-start gap-8 hidden'>
        <h1 className=' font-bold text-lg'>Contato</h1>
        <p className=' font-normal text-sm text-gray w-[333px]'>Entre em contato com a nossa equipe para explorar oportunidades de parceria e crescimento mútuo!</p>
        <div className=' w-auto h-[60px] rounded-full border-2 border-gray-200 flex flex-row justify-center items-center gap-4 px-6'>
          <p className=" text-gray-300 font-normal text-xs">Entre em contato</p>
          <div className=" flex flex-row justify-center items-center gap-2 bg-green px-4 py-1 rounded-full h-auto">
            <p className=" font-bold text-white"> Nosso Whatsapp </p>
            <FaWhatsapp size={36} color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
