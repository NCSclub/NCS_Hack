import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutNcs from "@/components/AboutNcs"; 
import Sponsors from "@/components/Sponsors";
import AboutNcsHack from "@/components/AboutNcsHack";

export default function page() {
  return (
    <div>
      <div className=" mb-4 bg-[url('/images/General/ellipse503.svg')] bg-no-repeat bg-right" >
      <div className="bg-[url('/images/General/ellipse500.svg')] bg-no-repeat bg-left">
      <Hero/>
      </div>
      </div>
      <div className="bg-[url('/images/General/ellipse501.svg')] bg-no-repeat bg-right">
      <div className="bg-[url('/images/General/cube6_transparent.svg')] bg-no-repeat  bg-left ">
      <AboutNcs />
      <AboutNcsHack />
      <Sponsors />
      
      </div>
      </div>
      <div className="bg-[url('/images/General/cube6_transparentbig.svg')] bg-no-repeat  bg-right" >
      {/* <AskQuestions /> */}
      </div>
<Footer />
    </div>
  )
}
