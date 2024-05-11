import Image from 'next/image'
import React from 'react'
import IN4 from './In4'

function AboutNcs() {
  return (
    <section className='mb-16 mt-16'>
      <h1 className='text-7xl text-center font-semibold mb-16  mt-4'><span className='text-[#0EC9E3]'>About</span> us </h1>
      <div className=' container lg:space-x-24  flex flex-col-reverse lg:flex-row justify-center items-center '>
        <div className=' w-fit flex-col justify-center items-center'>
          <Image width={500} height={200} src='images\AboutNcs\group9260.svg'/>
        </div>
        <div className=' text-center lg:p-0  max-w-2xl flex flex-col  justify-between items-center  space-y-8' >
          <Image width={400} height={100} src='/images/LOGO.png' />
          <p className=' text-white text-3xl lg:text-start	 '>
          The NCS club is a student organization
 at Numidia Institute of  Technology, 
that provides an inclusive platform for tech  enthusiasts 
to boost their computer science skills. Through workshops  and projects, they foster community growth.
          </p>
        </div>
      </div>
      <IN4/>
    </section>
  )
}

export default AboutNcs
