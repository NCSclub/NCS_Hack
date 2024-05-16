import React from 'react'
import Image from 'next/image'
import pic from "../../../public/images/AboutNcsHack/pic.png"
export default function AboutNcsHack() {
  
  return (
    <div className=''>
      <h1 className='text-white text-center text-3xl pt-20'><span className='text-cyan-400'>WHAT</span> IS NCS HACK?</h1>

      <div className='pt-20 w-3/5 bg-black ml-72 flex'> 
        <p className='text-white p-20 mr-40  pt-5 pl-35'>NCS HACK is A 3-Day,2Night Hackathon
          Where IT Enthusiasts And Professionals
          Collaborate To Solve Real-World
          Challenges .Teams Develop Inventive
          Solutions ,Guided By Expert-Led
          Workshops And Mentors.
          <p className='pt-5 ' >The Event Concludes With Final
            Presentations And A Ceremony,Fostering
            Innovation,Entrepreneurship,And Networking In The Algerian IT Community.
          </p>
        </p>
        <div className='box-content bg-gray-600 py-0 -ml-48'>

          <Image  className='max-w-80 pr-0  lg: transition duration-75  hover:mt-32  '
          src={pic}
          alt="image"
          width={500}
          height={400}
          
          

          />
          
          <Image  className='max-w-80 pr-0 -mt-10 mr-10'
          src={pic}
          alt="image"
          width={500}
          height={400}
          
          

          />
        </div>
      </div>
      

    </div>
  )
}
