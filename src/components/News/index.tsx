'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import Balancer from 'react-wrap-balancer'

export default function News() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="bg-white-gray w-full h-auto flex flex-col items-center">
      <div className=" w-full  md:h-auto flex flex-wrap-reverse items-center justify-center md:my-24 my-7 md:gap-20 gap-5">
        <div className="  h-auto flex flex-col items-center">
          <video
            className="max-w-[500px] max-h-[500px] rounded-[40px] w-full m-2"
            controls
          >
            <source src="/videoplayback.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
        <div className=" w-full max-w-[517px] h-auto flex flex-col items-center md:items-start justify-center md:gap-[40px] gap-5 mx-4">
          <h1 className=" text-[32px] md:text-[32px] font-bold text-center md:text-start leading-[48px]">
            <Balancer>Saiba mais sobre nosso ecossistema</Balancer>
          </h1>
          <p className=" text-xl font-medium  text-gray-900 text-center md:text-start">
            <Balancer>
              Entenda como a Rich Beauty trabalha para capacitar e promover
              profissionais e negócios nas áreas de saúde, beleza e bem-estar.
            </Balancer>
          </p>
          <Link href="#parceiro">
            <button className="px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green">
              Inscreva-se Agora
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
