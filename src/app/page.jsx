import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutNcs from "@/components/AboutNcs"; 
import Sponsors from "@/components/Sponsors";
import AboutNcsHack from "@/components/AboutNcsHack";
import ActiveSlider from "@/components/AskQuestions";
import Header from "@/components/header";

export default function page() {
  return (
    <div>
      <div className=" mb-4 bg-[url('/images/General/ellipse503.svg')] bg-no-repeat bg-right" >
      <div className="bg-[url('/images/General/ellipse500.svg')] bg-no-repeat bg-left">
      <Header/>
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
      <ActiveSlider />
      </div>
<Footer />
    </div>
  )
}
