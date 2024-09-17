'use client'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center">
      <div className="bg-white w-full  h-auto flex flex-wrap items-center justify-center md:my-24 my-7 md:gap-20 gap-5">
        <div className=' w-full max-w-[517px] h-auto flex flex-col items-center md:items-start justify-center md:gap-[40px] gap-5 mx-4'>
          <h1 className=' text-[32px] md:text-[40px] font-bold text-center md:text-start leading-[48px]'>
            <Balancer>
              Saiba como vender mais nas áreas de saúde, beleza e bem-estar!
            </Balancer>
          </h1>
          
          <p className=' text-xl font-medium  text-gray-900 text-center md:text-start'>
            <Balancer>
              Conheça nosso programa de parcerias e aumente suas vendas e o alcance de seu negócio.
            </Balancer>
          </p>
          
          <button 
            className='px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green'
          >
            Saiba Mais
          </button>
        </div>
        <div className='w-[517px] h-auto flex flex-wrap items-center justify-center gap-32 mx-4'>
          <Image
              src="/hero-image.svg" 
              alt="Hero Image"
              width={517} 
              height={364} 
          />
        </div>
      </div>
    </div>
  )
}
