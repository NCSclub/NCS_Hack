'use client';Vortex
import React, { useState } from 'react';
import Vortex from "./vortex";
import styles from "./ask.module.css";

const VortexDemo = () => {

  const [showContent, setShowContent] = useState(true);
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(true);
  const [showContent3, setShowContent3] = useState(true);

  const handleCardClick = () => {
    setShowContent(false);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false); // Toggle content visibility
  };
  const handleMouseLeave = () => {
    setShowContent(!showContent);
    setShowContent1(!showContent1);
    setShowContent2(!showContent2);
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
                <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
                <p className="text-[#F9DAFB] text-wrap">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
              </div>
            </Vortex>
          ) : (
            <Vortex backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-lg text-center">New Text Here why it is i want it to go down now i thingk it is working let's try more lines to see if the text stays in the middle</p>
              </div>
            </Vortex>
          )}
        </div>
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45" onMouseEnter={handleCardClick} onMouseLeave={handleMouseLeave}>
      {showContent1 ? (
            <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
              <div className="text-center">
                <p className="text-[#3BC3EE] text-center text-3xl font-semibold">01</p>
                <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS hack</h4>
                <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
                <p className="text-[#F9DAFB] text-wrap">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
              </div>
            </Vortex>
          ) : (
            <Vortex backgroundColor="" className={styles.carte}>
              <div className={styles.info}>
              <p className="text-white text-lg text-center">New Text Here why it is i want it to go down now i thingk it is working let's try more lines to see if the text stays in the middle</p>
              </div>
            </Vortex>
          )}
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold">03</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl font-bold">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB] text-wrap">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold">04</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl font-bold">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB] text-wrap">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
    </div>
    <div className="hidden max-[767px]:grid gap-4 grid-cols-1 gap-y-8">
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className= "flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
            <p className="text-[#3BC3EE] text-center text-3xl font-semibold">01</p>
            <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold">02</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold">03</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold">04</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl">NCS hack</h4>
            <h4 className="text-white py-4">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
    </div>
    </div>
  );
};

export default VortexDemo;
