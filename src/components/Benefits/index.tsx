'use client'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image';
import { DeviceMobile, Tag, UserCircle } from 'phosphor-react';

export default function Benefits() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center">
      <div className="bg-white w-full h-auto flex flex-col items-center my-24 gap-20">
        <h1 className='text-5xl font-normal'>Benefícios</h1>
          <p className='text-3xl md:text-3xl font-light text-center'>
            <Balancer>Quais as vantagens?</Balancer>
          </p>

        <div className="bg-white w-full h-auto flex flex-wrap items-center justify-evenly gap-20 md:gap-0">
          <div className='flex flex-col items-center gap-4'>
            <UserCircle size={72} color="#00cbc8" />
            <p className='font-bold text-base'>Capilarização</p>
            <p className='font-medium text-sm max-w-52 text-center'>
              <Balancer>
                Canal de acesso a novos clientes em potencial, sem depender da estrutura interna do seu negócio.
              </Balancer>
            </p>
          </div>

          <div className='flex flex-col items-center gap-4'>
            
            <Tag size={72} color="#00CBC8" />
            <p className='font-bold text-base'>Promoção</p>
            <p className='font-medium text-sm max-w-56 text-center'>
              <Balancer>
                Marketplace, vitrine virtual, campanhas de tráfego pago, mídias sociais e muito mais, para ajudar a alavancar suas vendas.
              </Balancer>
            </p>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <DeviceMobile size={72} color="#00cbc8" />
            <p className='font-bold text-base'>Ecossistema</p>
            <p className='font-medium text-sm max-w-56 text-center'>
              <Balancer>
                Consultoria de marketing, gestão contábil, assessoria jurídica e muito mais, para ajudar seu negócio a crescer cada vez mais.
              </Balancer>
            </p>
          </div>
        </div>

        <div className='w-auto h-auto flex flex-row items-center justify-center gap-14 mx-4'>
          <div className='w-auto h-auto flex flex-col items-end justify-center gap-14 mx-4'>
            <Image
              src="/beauty.svg" 
              alt="Descrição da imagem"
              width={272} 
              height={364} 
            />
            <Image
              src="/beauty2.svg" 
              alt="Descrição da imagem"
              width={176} 
              height={364} 
            />
          </div>
          <div className='w-auto h-auto flex flex-col items-end justify-center gap-14 mx-4'>
            <Image
              src="/beauty3.svg" 
              alt="Descrição da imagem"
              width={218} 
              height={364} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}
