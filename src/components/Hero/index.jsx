import React from "react";
import Image from "next/image";
import CountdownTimer from "./counterdown";
import { HoverBorderGradientDemo } from "./components/ui/hover-border-gradientComp";
import { SpotlightPreview } from "./components/ui/SpotlightComp";
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

      <div className="timer&location flex md:flex-row flex-col-reverse  items-center justify-center gap-4 mt-7  lg:ml-[120px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="w-[40px] "
              height={500}
              width={500}
              src="/images/Hero/calender.png"
            />
            <h3 className="text-white">24-25-26 MAI</h3>
          </div>

          <div className="flex flex-row items-center gap-2">
            <Image
              className="w-[40px] "
              height={500}
              width={500}
              src="/images/Hero/folowmap.png"
            />
            <h3 className="text-white max-w-[290px] ">
              NUMIDI INSTITUE OF TEACHNOLOGY AlGER-RAHMANIA
            </h3>
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

      <div className="flex justify-center items-center  ">
        <HoverBorderGradientDemo />
      </div>
    </section>
  );
}
