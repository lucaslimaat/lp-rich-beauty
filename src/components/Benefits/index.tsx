'use client'
import Balancer from 'react-wrap-balancer'
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
        <div className=" bg-white w-full h-auto flex flex-col items-center mt-20">
          <h2 className='text-3xl font-medium mb-8'>Assista ao Vídeo</h2>
          <video className="p-5 w-full max-w-[1177px] h-auto rounded-[40px]" controls>
            <source src="/video_rich.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </div>
  )
}
