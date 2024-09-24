'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import Balancer from 'react-wrap-balancer'

export default function News() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <section className="bg-white-gray w-full flex flex-col items-center py-7 md:py-24">
      <div className="w-full flex flex-wrap-reverse items-center justify-center gap-5 md:gap-20">
        <div className="flex flex-col items-center">
          <video
            className="w-full max-w-[500px] max-h-[500px] rounded-[40px] m-2"
            controls
          >
            <source src="/videoplayback.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
        <div className="flex flex-col items-center md:items-start justify-center w-full max-w-[450px] gap-5 md:gap-10 mx-4">
          <h2 className="text-[32px] font-bold text-center md:text-start leading-[48px]">
            <Balancer>Saiba mais sobre nosso ecossistema</Balancer>
          </h2>
          <p className="text-xl font-medium text-gray-900 text-center md:text-start">
            <Balancer>
              Entenda como a Rich Beauty trabalha para capacitar e promover
              profissionais e negócios nas áreas de saúde, beleza e bem-estar.
            </Balancer>
          </p>
          <Link href="#parceiro">
            <button
              aria-label="Inscreva-se Agora"
              className="px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green"
            >
              Inscreva-se Agora
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
