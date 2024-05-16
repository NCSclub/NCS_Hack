
import style from "@/styles/photos.module.css"
import Image from "next/image"

import picture1 from "/public/images/AboutNcsHack/picture1.png"
import picture2 from "/public/images/AboutNcsHack/picture2.png"
import picture3 from "/public/images/AboutNcsHack/picture3.png"
import picture4 from "/public/images/AboutNcsHack/picture4.png"
export default function Photos() {
    return(
        <div className="p-8 h-[100%] w-full   relative  sm:col-span-2 lg:col-span-3   ml-2 hidden md:flex 	">
            <div
              className={`absolute bg-transparent top-[20%] right-[6%] perspective-1000 lg:right-[8%] w-[250px] lg:w-[300px] xl:w-[400px] h-[150px] lg:h-[200px] xl:h-[250px] rotate-6  ${style.rotateYhover}  `}>
              <div
                className={`relative h-full w-full transition-transform duration-500 shadow-[0px_10px_20px_5px_rgba(0,0,0,0.5)]  rounded-xl`}>
                <Image
                  className={`absolute h-full w-full block ${style.backFaceHidden}  `}
                  src={picture1}
                  alt="Pic1"
                />
                <Image
                  className={`absolute h-full w-full block ${style.backFaceHidden} ${style.rotateY}`}
                  src={picture3}
                  alt="Pic3"
                />
              </div>
            </div>
            <div
              className={`absolute perspective-1000 h-[120px] lg:h-[150px] xl:h-[200px] rotate-6 bottom-[20%]  left-[8%] w-[200px] lg:w-[250px] xl:w-[300px]  ${style.rotateYhover} `}>
              <div
                className={`relative h-full w-full transition-transform duration-500 shadow-[0px_10px_20px_5px_rgba(0,0,0,0.5)] rounded-2xl `}>
                <Image
                  className={`absolute h-full w-full block ${style.backFaceHidden}  `}
                  src={picture2}
                  alt="Pic2"
                />
                <Image
                  className={`absolute h-full w-full block ${style.backFaceHidden} ${style.rotateY}`}
                  src={picture4}
                  alt="Pic4"
                />
              </div>
            </div>
          </div>
       
    )
  
}
