import React from 'react'
import Photos from './photos'

export default function AboutNcsHack() {
  return (
  <section className='flex flex-col justify-center  items-center w-full '>
      <h1 className=' text-5xl lg:text-7xl text-center font-semibold mb-16  mt-4'><span className='text-[#0EC9E3]'>what</span> is Ncs Hack ? </h1>
    <div className=' flex  justify-between items-center container px-4 md:pr-32 lg:p-32  '>
      <div className='  text-2xl lg:text-3xl space-y-5 md:w-1/2 lg:w-1/2'>
<p>NCS HACK is a 3-day, 2-night hackathon where IT enthusiasts and professionals collaborate to solve real-world challenges. Teams develop inventive solutions, guided by expert-led workshops and mentors. </p>
     <p>The event concludes with final presentations and a ceremony, fostering innovation, entrepreneurship, and networking in the Algerian IT community.</p>
      </div>
      <div className=''>
<Photos/>
      </div>
    </div>
    </section>
  )
}
