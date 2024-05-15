'use client';
import React, { useState } from 'react';
import Vortex from "./vortex";
import styles from "./ask.module.css";

const VortexDemo = () => {
// for card 1
  const [showContent, setShowContent] = useState(true);

  const handleCardClick = () => {
    setShowContent(false);
  };
  const handleMouseLeave = () => {
    setShowContent(!showContent);
  };
  // card 2
  const [showContent1, setShowContent1] = useState(true);
  const handleCardClick1 = () => {
    setShowContent1(false);
  };
  const handleMouseLeave1 = () => {
    setShowContent1(!showContent1);
  };
  // card 3
  const [showContent2, setShowContent2] = useState(true);
  const handleCardClick2 = () => {
    setShowContent2(false);
  };
  const handleMouseLeave2 = () => {
    setShowContent2(!showContent2);
  };
  // card 4
  const [showContent3, setShowContent3] = useState(true);
  const handleCardClick3 = () => {
    setShowContent3(false);
  };
  const handleMouseLeave3 = () => {
    setShowContent3(!showContent3);
  };
  return (
    <div className="">
      <div className="w-[365px] mx-auto mb-12">
        <h1 className="text-white text-center text-3xl font-bold">Frequently Asked <span className="text-[#3BC3EE]">Questions</span></h1>
      </div>
      <div className="hidden lg:flex gap-2 md:grid grid-cols-2 gap-y-8">
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick} onMouseLeave={handleMouseLeave}>
          {showContent ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center h-full">
                <p className="text-[#3BC3EE] text-3xl font-semibold pt-10">01</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS Hack</h4>
                <h4 className="text-white pt-10 text-2xl font-normal capitalize">What is Ncs Hack about ?</h4>
              </div>
            </Vortex>
          ) : (
            <div  className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-xl capitalize text-balance font-thin">
                <span className='text-[#F9DAFB] font-medium'>NCS Hack</span> is a thrilling Hackathon hosted by NCS Club, over 3 days, immerse yourself 
                in dynamic challenges to develop AI powered solutions .
              </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick1} onMouseLeave={handleMouseLeave1}>
          {showContent1 ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center h-full">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold pt-10">02</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS Hack</h4>
                <h4 className="text-white pt-10 capitalize text-2xl font-normal">Who can participate ?</h4>
              </div>
            </Vortex>
          ) : (
            <div backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-xl capitalize text-balance font-thin">
                Everyone is invited to <br/><span className='text-[#F9DAFB] font-medium'>NCS Hack !</span> whether you're seasoned coder, creative designer, or data enthusiast .
              </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick2} onMouseLeave={handleMouseLeave2}>
          {showContent2 ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center h-full">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold pt-10">03</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS Hack</h4>
                <h4 className="text-white pt-10 capitalize text-2xl font-normal">What is the <br/>goal ?</h4>
              </div>
            </Vortex>
          ) : (
            <div backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-xl capitalize  font-thin text-balance">
                <span className='text-[#F9DAFB] font-medium'>NCS Hack</span> aims to push boundaries and tackle real-world problems with AI, sharpen your skills and make a difference in just few days .
              </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick3} onMouseLeave={handleMouseLeave3}>
          {showContent3 ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center h-full">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold pt-10">04</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS Hack</h4>
                <h4 className="text-white pt-10 capitalize text-2xl font-normal">Do i need to have a team ?</h4>
              </div>
            </Vortex>
          ) : (
            <div backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-xl capitalize font-thin text-balance">
                To join <span className='text-[#F9DAFB] font-medium'>NCS Hack</span>, it would be better if you already have a team of 4 members, in case 
                you don't, we will be forming teams . 
                </p>
              </div>
            </div>
          )}
        </div>
    </div>
    <div className="hidden max-[767px]:grid gap-4 grid-cols-1 gap-y-8">
    <div className="w-64 mx-auto rounded-[60px] overflow-hidden border-4 border-[#F9DAFB]/45 h-80">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center h-full">
                <p className="text-[#3BC3EE] text-xl font-semibold ">01</p>
                <h4 className="text-[#F9DAFB]  font-bold text-lg">NCS Hack</h4>
                <h4 className="text-white pt-2 font-medium capitalize">What is Ncs Hack about ?</h4>
                <p className="text-white text-medium capitalize text-balance font-thin py-6">
                <span className='text-[#F9DAFB] font-medium'>NCS Hack</span> is a thrilling Hackathon hosted by NCS Club, over 3 days, immerse yourself 
                in dynamic challenges to develop AI powered solutions .
              </p>
              </div>
        </Vortex>
      </div>
      <div className="w-64 mx-auto rounded-[60px] h-80 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center h-full">
                <p className="text-[#3BC3EE] text-xl font-semibold">02</p>
                <h4 className="text-[#F9DAFB] font-bold text-lg">NCS Hack</h4>
                <h4 className="text-white pt-2 font-medium capitalize">Who can participate ?</h4>
                <p className="text-white text-medium capitalize  font-thin text-balance py-6">
                Everyone is invited to <br/><span className='text-[#F9DAFB] font-medium'>NCS Hack !</span> whether you're seasoned coder, creative designer, or data enthusiast .
                </p>
              </div>
        </Vortex>
      </div>
      <div className="w-64 mx-auto rounded-[60px] h-80 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center h-full">
              <p className="text-[#3BC3EE] text-xl font-semibold">03</p>
                <h4 className="text-[#F9DAFB] font-bold text-lg">NCS Hack</h4>
                <h4 className="text-white pt-2 font-medium capitalize">What is the goal ?</h4>
                <p className="text-white text-medium capitalize  font-thin text-balance py-6">
                <span className='text-[#F9DAFB] font-medium'>NCS Hack</span> aims to push boundaries and tackle real-world problems with AI, sharpen your skills and make a difference in just few days .
              </p>
              </div>
        </Vortex>
      </div>
      <div className="w-64 mx-auto rounded-[60px] h-80 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center h-full">
                <p className="text-[#3BC3EE] text-xl font-semibold">01</p>
                <h4 className="text-[#F9DAFB] font-bold text-lg">NCS Hack</h4>
                <h4 className="text-white pt-2 font-medium capitalize">Do i need to have a team ?</h4>
                <p className="text-white text-medium capitalize font-thin text-balance py-6">
                To join <span className='text-[#F9DAFB] font-medium'>NCS Hack</span>, it would be better if you already have a team of 4 members, in case 
                you don't, we will be forming teams . 
                </p>
              </div>
        </Vortex>
      </div>
    </div>
    </div>
  );
};

export default VortexDemo;
