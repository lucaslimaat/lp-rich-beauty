'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Star } from 'phosphor-react';
import Balancer from 'react-wrap-balancer';

export default function Feedbacks() {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center">
      <div className="bg-white w-full h-auto flex flex-col items-center my-24 gap-20">
        <h1 className='text-5xl font-normal text-center'>O que nossos parceiros dizem</h1>
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
              <div className='w-full max-w-[396px] h-[423px] bg-white-gray flex flex-col items-center justify-center px-5 shadow-lg rounded-xl gap-6'>
                <div className='flex flex-row items-center justify-start w-full gap-3'>
                  <div className='w-[72px] min-w-[72px] h-[72px] rounded-full bg-white'></div>
                  <div className='flex flex-col items-start justify-start w-full'>
                    <h1 className='font-bold text-2xl text-center'>Lucas Lima</h1>
                    <div className='flex flex-row items-center justify-between w-full'>
                      <h2 className='font-medium text-sm text-center text-black'>Barbeiro</h2>
                      <div className='flex flex-row items-center justify-center'>
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="regular" />
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-2xl text-center'>It was a very good experience</h1>
                <Balancer>
                  <p className='font-medium text-sm text-center text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                  </p>
                </Balancer>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='w-full max-w-[396px] h-[423px] bg-white-gray flex flex-col items-center justify-center px-5 shadow-lg rounded-xl gap-6'>
                <div className='flex flex-row items-center justify-start w-full gap-3'>
                  <div className='w-[72px] min-w-[72px] h-[72px] rounded-full bg-white'></div>
                  <div className='flex flex-col items-start justify-start w-full'>
                    <h1 className='font-bold text-2xl text-center'>Lucas Lima</h1>
                    <div className='flex flex-row items-center justify-between w-full'>
                      <h2 className='font-medium text-sm text-center text-black'>Barbeiro</h2>
                      <div className='flex flex-row items-center justify-center'>
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="regular" />
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-2xl text-center'>It was a very good experience</h1>
                <Balancer>
                  <p className='font-medium text-sm text-center text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                  </p>
                </Balancer>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='w-full max-w-[396px] h-[423px] bg-white-gray flex flex-col items-center justify-center px-5 shadow-lg rounded-xl gap-6'>
                <div className='flex flex-row items-center justify-start w-full gap-3'>
                  <div className='w-[72px] min-w-[72px] h-[72px] rounded-full bg-white'></div>
                  <div className='flex flex-col items-start justify-start w-full'>
                    <h1 className='font-bold text-2xl text-center'>Lucas Lima</h1>
                    <div className='flex flex-row items-center justify-between w-full'>
                      <h2 className='font-medium text-sm text-center text-black'>Barbeiro</h2>
                      <div className='flex flex-row items-center justify-center'>
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="fill" />
                        <Star size={22} color="#ffa033" weight="regular" />
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className='font-bold text-2xl text-center'>It was a very good experience</h1>
                <Balancer>
                  <p className='font-medium text-sm text-center text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                  </p>
                </Balancer>
              </div>
            </SplideSlide>
            
            {/* Adicione mais slides conforme necessário */}
          </Splide>
        </div>
      </div>
    </div>
  );
}
