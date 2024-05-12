import Vortex from "./vortex";

const VortexDemo = () => {
  return (
    <div className="">
      <div className="w-[365px] mx-auto my-6">
        <h1 className="text-white text-center text-3xl font-bold">Frequently Asked <span className="text-[#3BC3EE]">Questions</span></h1>
      </div>
      <div className="flex">
      <div className="w-72 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
            <p className="text-[#3BC3EE] text-center text-3xl">01</p>
            <h4 className="text-[#F9DAFB] py-4 font-bold text-xl">NCS hack</h4>
            <h4 className="text-white">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-white text-center text-3xl">02</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl">NCS hack</h4>
            <h4 className="text-white">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-white text-center text-3xl">03</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl">NCS hack</h4>
            <h4 className="text-white">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
      <div className="w-72 mx-auto rounded-[60px] h-max overflow-hidden border-4 border-[#F9DAFB]/45">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="text-center">
          <p className="text-white text-center text-3xl">04</p>
            <h4 className="text-[#F9DAFB] py-4 text-xl">NCS hack</h4>
            <h4 className="text-white">1. What is Ncs Hack about?</h4>
            <p className="text-[#F9DAFB]">TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.</p>
          </div>
        </Vortex>
      </div>
        
    </div>
    </div>
  );
};

export default VortexDemo;
