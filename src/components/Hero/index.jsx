"use client";
import React from "react";
import Image from "next/image";
import CountdownTimer from "./counterdown";
import { SpotlightPreview } from "./components/ui/SpotlightComp";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  var hraf = "https://tripetto.app/run/YTZACWEMES";
  if (isButtonDisabled) {
    hraf = " ";
  }

  return (
    <section id="navbar"
      className="lg:h-screen md:h-fit h-screen flex flex-col md:justify-between items-center "
    >
      <SpotlightPreview />

      <div className="flex flex-col justify-center items-center ">
        <Image
          className="w-[250px] "
          height={1000}
          width={1000}
          src="/images/Hero/logonitt1 (1).png"
        />
      </div>

      <div
        className="timer&location flex md:flex-row flex-col-reverse  
      items-center justify-center gap-4 mt-7  lg:ml-[120px]"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="w-[40px] "
              height={500}
              width={500}
              src="/images/Hero/cld.svg"
            />
            <h3 className="text-white">23-24-25 MAI</h3>
          </div>

          <div className="flex flex-row items-center gap-2">
            <Image
              className="w-[40px] "
              height={500}
              width={500}
              src="/images/Hero/followmap.svg"
            />

            <Link
              className="flex justify-center items-center gap-6 "
              target="_blank"
              href="https://maps.app.goo.gl/capKui9Y5FvGD8Zc9?g_st=ic"
            >
              <h3 className="text-white max-w-[290px] hover:text-blue-500 hover:duration-[100ms] ">
                NUMIDIA INSTITUTE OF TECHNOLOGY ALGER-RAHMANIA
              </h3>
            </Link>

            <h4 className="text-white"></h4>
          </div>
        </div>

        <div className="w-[1px] h-[100px] bg-white hidden md:block "></div>
        <div>
          <Image src="" />
        </div>

        <div className="flex justify-center items-center ml-4">
          <CountdownTimer setDisabled={setButtonDisabled} />
        </div>
      </div>

      <div className="flex justify-center items-center  mt-10  ">
        {/* <Link target="_blank " href={hraf}>
          <button
            className={`relative inline-flex h-12 overflow-hidden rounded-full p-[2px]
         w-[200px] md:w-[300px] md:h-[60px] focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-offset-slate-50 transition-transform duration-500 transform hover:translate-y-[-5px] active:translate-y-[-5px] 
          ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
            disabled={isButtonDisabled}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2444D5_0%,#24A6D5_50%,#2444D5_100%)]" />
            <span className="inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md md:text-[22px] font-medium text-white backdrop-blur-3xl">
              REGISTER NOW
            </span>
          </button>
        </Link> */}

<Link target="_blank" href={hraf}>
  <button
    className={`relative inline-flex h-12 overflow-hidden rounded-full p-[2px]
      w-[200px] md:w-[300px] md:h-[60px] focus:outline-none focus:ring-2 focus:ring-offset-2
      focus:ring-offset-slate-50 transition-transform duration-500 transform hover:translate-y-[-5px] active:translate-y-[-5px]
      ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    disabled={isButtonDisabled}
  >
    <span
      className="absolute inset-0 animate-spin-slow"
      style={{
        background: "conic-gradient(from 90deg at 50% 50%, #2444D5 0%, #24A6D5 50%, #2444D5 100%)",
        transformOrigin: "center",
      }}
    />
    <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md md:text-[22px] font-medium text-white backdrop-blur-3xl">
      REGISTER NOW
    </span>
  </button>
</Link>

        
      </div>

      <div className=" hidden lg:flex  flex-col gap-4 justify-center items-center mt-[45px] ">
        <h3 className="text-white capitalize">scroll to explor </h3>
        <Image
          className="animate-bounce duration-75 w-[50px]"
          width={100}
          height={100}
          src="images\Hero\scroll-down.svg"
        />
      </div>
    </section>
  );
}
