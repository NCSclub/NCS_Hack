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
              <div className="text-center">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold">01</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS hack</h4>
                <h4 className="text-white py-4">What is Ncs Hack about ?</h4>
              </div>
            </Vortex>
          ) : (
            <Vortex backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-lg text-justify">New Text Here why it is i want it to go down now i thingk it is working let's try more lines to see if the text stays in the middle</p>
              </div>
            </Vortex>
          )}
        </div>
        <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick1} onMouseLeave={handleMouseLeave1}>
          {showContent1 ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold">02</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS hack</h4>
                <h4 className="text-white py-4">Who can participate ?</h4>
              </div>
            </Vortex>
          ) : (
            <Vortex backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-lg text-justify">New Text Here why it is i want it to go down now i thingk it is working let's try more lines to see if the text stays in the middle</p>
              </div>
            </Vortex>
          )}
        </div>
        <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick2} onMouseLeave={handleMouseLeave2}>
          {showContent2 ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold">03</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS hack</h4>
                <h4 className="text-white py-4">What is Ncs Hack about ?</h4>
              </div>
            </Vortex>
          ) : (
            <Vortex backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-lg text-justify">New Text Here why it is i want it to go down now i thingk it is working let's try more lines to see if the text stays in the middle</p>
              </div>
            </Vortex>
          )}
        </div>
        <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick3} onMouseLeave={handleMouseLeave3}>
          {showContent3 ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold">04</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS hack</h4>
                <h4 className="text-white py-4">What is Ncs Hack about ?</h4>
              </div>
            </Vortex>
          ) : (
            <Vortex backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-lg text-justify">New Text Here why it is i want it to go down now i thingk it is working let's try more lines to see if the text stays in the middle</p>
              </div>
            </Vortex>
          )}
        </div>
    </div>
    <div className="hidden max-[767px]:grid gap-4 grid-cols-1 gap-y-8">
    <div className="w-64 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center mx-auto ">
          <p className="text-[#3BC3EE] text-center text-2xl font-semibold">01</p>
            <h4 className="text-[#F9DAFB] font-bold text-lg text-center py-4">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB] text-center pb-4 text-balance">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-64 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-2xl font-semibold">02</p>
            <h4 className="text-[#F9DAFB] font-bold text-lg text-center py-4">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB] text-center pb-4 text-balance">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-64 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-2xl font-semibold">03</p>
            <h4 className="text-[#F9DAFB] font-bold text-lg text-center py-4">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB] text-center pb-4 text-balance">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-64 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-2xl font-semibold">04</p>
            <h4 className="text-[#F9DAFB] font-bold text-lg text-center py-4">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB] text-center pb-4 text-balance">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
    </div>
    </div>
  );
};

export default VortexDemo;
