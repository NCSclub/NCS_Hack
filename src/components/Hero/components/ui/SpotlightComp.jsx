
import  Spotlight  from "@/components/Hero/components/ui/Spotlight"
import { SparklesPreview } from "./sparklescomp";
export function SpotlightPreview() {
  return (
    <div className=" w-full  rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight
        className="-top-40  md:left-60 lg:left-[590px]  md:-top-20"
        fill="white"
      /> */}
            <SparklesPreview/>

    </div>
  );
}
