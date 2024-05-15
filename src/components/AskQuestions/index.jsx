'use client';Vortex
import React, { useState } from 'react';
import Vortex from "./vortex";
import styles from "./ask.module.css";

const VortexDemo = () => {

  const [showContent, setShowContent] = useState(true);

  const handleCardClick = () => {
    setShowContent(false);
  };
  const handleMouseLeave = () => {
    setShowContent(!showContent);
  };
  const [showContent1, setShowContent1] = useState(true);

  const handleCardClick1 = () => {
    setShowContent1(false);
  };
  const handleMouseLeave1 = () => {
    setShowContent1(!showContent1);
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
              <h4 className="text-[#F9DAFB] font-bold text-xl text-center">NCS hack</h4>
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
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold">03</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl font-bold">NCS hack</h4>
            <h4 className="text-white py-4">What is the goal ?</h4>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold ">04</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl font-bold">NCS Hack</h4>
            <h4 className="text-white py-4">What is Ncs Hack about ?</h4>
          </div>
        </Vortex>
      </div>
    </div>
    <div className="hidden max-[767px]:grid gap-4 grid-cols-1 gap-y-8">
    <div className="w-72 mx-auto rounded-[60px] h-96 overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex backgroundColor="transparent" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-[#3BC3EE] text-center text-3xl font-semibold">01</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl">NCS hack</h4>
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
