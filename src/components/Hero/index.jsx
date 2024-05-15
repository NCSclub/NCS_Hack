import React from "react";
import Image from "next/image";
import CountdownTimer from "./counterdown";
import { HoverBorderGradientDemo } from "./components/ui/hover-border-gradientComp";
import { SpotlightPreview } from "./components/ui/SpotlightComp";
import styles from  "@/styles/hero.module.css"
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero ">
      <SpotlightPreview />

      <div className="flex flex-col justify-center items-center ">
        <Image
          className="hidden md:block  w-[150px] "
          height={1000}
          width={1000}
          src="/images/Hero/NIT-LOGO.png"
        />
      </div>

      <div className="timer&location flex md:flex-row flex-col-reverse  
      items-center justify-center gap-4 mt-7  lg:ml-[120px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="w-[40px] "
              height={500}
              width={500}
              src="/images/Hero/cld.svg"
            />
            <h3 className="text-white">24-25-26 MAI</h3>
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
            href="https://maps.app.goo.gl/9Aeizen7VEjrkLD6A"
          >
            <h3 className="text-white max-w-[290px] hover:text-blue-500 duration-75 ">
              NUMIDI INSTITUE OF TEACHNOLOGY AlGER-RAHMANIA
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
          <CountdownTimer />
        </div>
      </div>

      <div className="flex justify-center items-center  mt-10  ">
     


      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] w-[200px] md:w-[300px] md:h-[60px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-500 transform hover:translate-y-[-5px] active:translate-y-[-5px]">
     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2444D5_0%,#24A6D5_50%,#2444D5_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md md:text-[22px] font-medium text-white backdrop-blur-3xl">
    REGISTER NOW
  </span>
</button>

      </div>
    
    <div className=" flex flex-col gap-4 justify-center items-center mt-8 ">
     <h3 className='text-white capitalize'>scroll to explor </h3>
      <Image className="animate-bounce duration-75 w-[50px]"  width={100} height={100} src="images\Hero\scroll-down.svg"/>
    </div>
  
    </section>
  );
}



