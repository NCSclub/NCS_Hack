import Image from 'next/image'
import React from 'react'

function AboutNcs() {
  return (
    <div>
      <h1 className='text-7xl text-center font-semibold mb-16 mt-4'><span className='text-[#0EC9E3]'>About</span> us </h1>
      <div className='  flex flex-col-reverse lg:flex-row justify-center items-center '>
        <div className=' flex-col justify-center items-center'>
          <Image width={500} height={200} src='images\AboutNcs\group9260.svg'/>
        </div>
        <div className=' flex flex-col justify-center items-center text-center space-y-8' >
          <Image width={400} height={100} src='/images/LOGO.png' />
          <p className=' text-white text-3xl w-1/2'>
          The NCS club is a student organization
 at Numidia Institute of  Technology, 
that provides an inclusive platform for tech  enthusiasts 
to boost their computer science skills. Through workshops  and projects, they foster community growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutNcs
