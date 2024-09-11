'use client'
import Balancer from 'react-wrap-balancer'
import { NumberCircleOne, NumberCircleThree, NumberCircleTwo } from 'phosphor-react';

export default function HowWorks() {
  return (
    <div className="bg-white-gray w-full h-auto flex flex-col items-center">
      <div className="bg-white-gray w-full h-auto flex flex-col items-center my-24 gap-20">
        <h1 className=' text-5xl font-normal'>Como funciona?</h1>
        <div className="bg-white-gray w-full h-auto flex flex-wrap items-center justify-center gap-32">
          <div className=' flex flex-col items-center gap-4'>
            <NumberCircleOne size={72} color="#00cbc8" />
            <p className=' font-bold text-base'>Cadastre-se</p>
            <Balancer>
              <p className=' font-medium text-sm max-w-52 text-center'>Inscreva-se em nosso marketplace..</p>
            </Balancer>
          </div>
          <div className=' flex flex-col items-center gap-4'>
            <NumberCircleTwo size={72} color="#00cbc8" />
            <p className=' font-bold text-base'>Lista de Produtos/Serviços</p>
            <Balancer>
              <p className=' font-medium text-sm max-w-56 text-center'>Publique suas ofertas na plataforma.</p>
            </Balancer>
          </div>
          <div className=' flex flex-col items-center gap-4'>
            <NumberCircleThree size={72} color="#00cbc8" />
            <p className=' font-bold text-base'>Venda</p>
            <Balancer>
              <p className=' font-medium text-sm max-w-56 text-center'>Alcance novos clientes e venda cada vez mais.</p>
            </Balancer>
          </div>
        </div>
      </div>
    </div>
  )
}

