'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Star } from 'phosphor-react';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';

export default function Feedbacks() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center">
      <div className="bg-white w-full h-auto flex flex-col items-center my-24 gap-20">
        <h1 className='text-5xl font-normal text-center mx-4'> <Balancer>O que nossos parceiros dizem</Balancer></h1>
        <div className='w-full h-[500px] max-w-[1258px] mx-auto px-4 py-4 my-4'>
          <Splide
            options={{
              type: 'loop',
              perPage: 3,
              perMove: 1,
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              focus: 'center',
              height: '500px',
              gap: '2.188rem', // Adiciona espaçamento entre os slides
              arrows: false, // Remove as setas de navegação
              breakpoints: {
                768: { // Para telas menores que 768px
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div className='w-full max-w-[396px] h-[423px] bg-white-gray flex flex-col items-center justify-start px-5 shadow-lg rounded-xl gap-6'>
                <div className='flex flex-row items-center justify-start w-full gap-3 mt-10'>
                  <div className='w-[72px] min-w-[72px] h-[72px] rounded-full bg-white'>
                  <Image
                    src="/client-1.png"
                    alt="Descrição da imagem"
                    width={272}
                    height={364}
                  />
                  </div>
                  <div className='flex flex-col items-start justify-start w-full'>
                    <h1 className='font-bold text-2xl text-center'>Gisele Allebrandte</h1>
                    <div className='flex flex-row items-center justify-between w-full'>
                      <h2 className='font-medium text-sm text-center text-black'>Cliente</h2>
                      <div className='flex flex-row items-center justify-center'>
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-2xl text-center'></h1>
                <p className='font-medium text-sm text-center text-black'>
                  <Balancer>
                  Segurança e confiança é isso que a plataforma Rich Beauty proporciona para nós profissionais e também para os clientes que buscam os  serviços.
                  </Balancer>
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='w-full max-w-[396px] h-[423px] bg-white-gray flex flex-col items-center justify-start px-5 shadow-lg rounded-xl gap-6'>
                <div className='flex flex-row items-center justify-start w-full gap-3 mt-10'>
                  <div className='w-[72px] min-w-[72px] h-[72px] rounded-full bg-white'>
                    <Image
                      src="/client-2.png"
                      alt="Descrição da imagem"
                      width={272}
                      height={364}
                    />
                  </div>
                  <div className='flex flex-col items-start justify-start w-full'>
                    <h1 className='font-bold text-2xl text-center'>Ingrid Oliveira</h1>
                    <div className='flex flex-row items-center justify-between w-full'>
                      <h2 className='font-medium text-sm text-center text-black'>Cliente</h2>
                      <div className='flex flex-row items-center justify-center'>
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-2xl text-center'></h1>
                <p className='font-medium text-sm text-center text-black'>
                  <Balancer>
                  Atendimento nota mil. Tiraram todas as minhas duvidas.
                  </Balancer>
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='w-full max-w-[396px] h-[423px] bg-white-gray flex flex-col items-center justify-start px-5 shadow-lg rounded-xl gap-6'>
                <div className='flex flex-row items-center justify-start w-full gap-3 mt-10'>
                  <div className='w-[72px] min-w-[72px] h-[72px] rounded-full bg-white'>
                    <Image
                        src="/client-3.png"
                        alt="Descrição da imagem"
                        width={272}
                        height={364}
                    />
                  </div>
                  <div className='flex flex-col items-start justify-start w-full'>
                    <h1 className='font-bold text-2xl text-center'>Adriano</h1>
                    <div className='flex flex-row items-center justify-between w-full'>
                      <h2 className='font-medium text-sm text-center text-black'>Profissional</h2>
                      <div className='flex flex-row items-center justify-center'>
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-2xl text-center'></h1>
                <p className='font-medium text-sm text-center text-black'>
                  <Balancer>
                    Simplesmente encantado! Além do serviço delivery, eles ainda dão várias dicas a nós, profissionais, e uma acessoria excelente, ajudando-nos a  melhorar sempre. Estou, realmente, muito satisfeito e cada vez mais contente com o ótimo atendimento e presteza.
                  </Balancer>
                </p>
              </div>
            </SplideSlide>
            
            {/* Adicione mais slides conforme necessário */}
          </Splide>
        </div>
      </div>
    </div>
  );
}
