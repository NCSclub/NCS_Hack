"use client";
import React from 'react';
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import { ServiceData } from './constants/index1';

const ActiveSlider = () => {
  return (
    <div className='mx-auto flex items-center justify-center flex-col h-fit'>
      <h4 className='text-center mt-16 text-5xl md:text-7xl font-semibold pb-16'>Frenquently Asked <br/><span className='text-[#0EC9E3]'>Questions</span></h4>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='max-w-[100%] lg:max-w-[90%]'
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title} style={{
          }}>
            <div className="mx-auto flex flex-col gap-8 mb-16 group relative shadow-lg text-white rounded-[40px] border-4 border-[#F9DAFB]/45 px-6 py-8 h-[380px] w-[255px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-4">
              <Image
                  src={item.icon}
                  alt="Pic1"
                  width={82} height={82} className="object-contain mx-auto my-auto"
                />
                <div className='h-16'>
                  <h1 className="text-xl text-[#0EC9E3] font-semibold capitalize text-balance lg:text-2xl">{item.title}</h1>
                </div>
                <p className="text-medium text-pretty font-normal lg:text-xl">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-3 left-[45%] w-[30px] h-[30px] text-white group-hover:text-[#F9DAFB] group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
      
    </div>
  );
};

export default ActiveSlider;
