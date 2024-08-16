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
        <p className=' font-normal text-sm text-gray w-[333px] text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate erat vitae ante sagittis, sit amet pharetra augue semper.</p>
        <div className=' w-auto md:flex flex-row justify-center items-center gap-4 hidden'>
          <FaFacebook size={36}  />
          <FaInstagram size={36} />
          <FaLinkedin size={36} />
        </div>
      </div>
      <div className=' w-auto h-auto flex flex-col md:justify-start md:items-start gap-8 justify-center items-center'>
        <h1 className=' font-bold text-lg'>Market Place</h1>
        <p className=" font-medium text-sm">Novidades</p>
      </div>
      <div className=' w-auto flex flex-row justify-start items-start gap-4 md:hidden'>
          <FaFacebook size={36}  />
          <FaInstagram size={36} />
          <FaLinkedin size={36} />
        </div>
      <div className=' w-auto h-auto md:flex flex-col justify-start items-start gap-8 hidden'>
        <h1 className=' font-bold text-lg'>Market Place</h1>
        <p className=' font-normal text-sm text-gray w-[333px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate erat vitae ante sagittis, sit amet pharetra augue semper.</p>
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
