'use client'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image';

export default function News() {
  return (
    <div className="bg-white-gray w-full h-screen md:h-auto flex flex-col items-center">
      <div className=" w-full  md:h-auto flex flex-wrap-reverse h-screen items-center justify-center md:my-24 my-7 md:gap-20 gap-5">
        <div className='w-auto h-auto flex flex-row items-center justify-center gap-14 mx-4'>
          <div className='w-auto h-auto flex flex-col items-end justify-center gap-14 mx-4'>
            <Image
                src="/beauty.svg" // Caminho da imagem
                alt="Descrição da imagem"
                width={272} // Largura da imagem
                height={364} // Altura da imagem
            />
            <Image
                src="/beauty2.svg" // Caminho da imagem
                alt="Descrição da imagem"
                width={176} // Largura da imagem
                height={364} // Altura da imagem
            />
            </div>
            <div className='w-auto h-auto flex flex-col items-end justify-center gap-14 mx-4'>
            <Image
                src="/beauty3.svg" // Caminho da imagem
                alt="Descrição da imagem"
                width={218} // Largura da imagem
                height={364} // Altura da imagem
            />
            </div>
        </div>
        
        <div className=' w-full max-w-[517px] h-auto flex flex-col items-center md:items-start justify-center md:gap-[40px] gap-5 mx-4'>
          <Balancer>
            <h1 className=' text-[32px] md:text-[32px] font-bold text-center md:text-start leading-[48px]'>Descubra as novidades no nosso marcketplace</h1>
          </Balancer>
          <Balancer>
            <p className=' text-xl font-medium  text-gray-900 text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus..</p>
          </Balancer>
          <button 
            className='px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green'
          >
            Descubra
          </button>
        </div>
      </div>
    </div>
  )
}
