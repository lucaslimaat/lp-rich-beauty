'use client'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image';
import { NumberCircleOne, NumberCircleThree, NumberCircleTwo } from 'phosphor-react';

export default function Benefits() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center">
      <div className="bg-white w-full h-auto flex flex-col items-center my-24 gap-20">
        <h1 className='text-5xl font-normal'>Benefícios</h1>
        <Balancer>
          <p className='text-3xl md:text-3xl font-light text-center'>Por que se Tornar um Parceiro?</p>
        </Balancer>
        <div className="bg-white w-full h-auto flex flex-wrap items-center justify-center gap-32">
          <div className='flex flex-col items-center gap-4'>
            <NumberCircleOne size={72} color="#00cbc8" />
            <p className='font-bold text-base'>Teste</p>
            <Balancer><p className='font-medium text-sm max-w-52 text-center'>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></Balancer>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <NumberCircleTwo size={72} color="#00cbc8" />
            <p className='font-bold text-base'>Teste</p>
            <Balancer><p className='font-medium text-sm max-w-56 text-center'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></Balancer>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <NumberCircleThree size={72} color="#00cbc8" />
            <p className='font-bold text-base'>Teste</p>
            <Balancer><p className='font-medium text-sm max-w-56 text-center'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></Balancer>
          </div>
        </div>
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
      </div>
    </div>
  )
}
