import Footer from "@/components/Footer";


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
