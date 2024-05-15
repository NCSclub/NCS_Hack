import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sponsors() {
  const sponsors = [
    { name: 'test', path: '/images/Sponsors/ncshacklogo_c1.svg' },
    { name: 'test', path: '/images/Sponsors/ncshacklogo_c1.svg' },
    { name: 'test', path: '/images/Sponsors/ncshacklogo_c1.svg' },
    { name: 'test', path: '/images/Sponsors/ncshacklogo_c1.svg' },

  ]
  return (
    <section className='mt-8 mb-8'>
      <h1 className='text-center text-5xl md:text-7xl font-semibold'><span className=' text-[#0EC9E3]'>our</span> sponsors</h1>
      <p className='text-center uppercase font-light mt-4'>we have beeN working with some fortune + 500 client </p>
      
      <ul className='flex flex-col md:flex-row justify-center items-center'>
        {sponsors.map((logo, key) => (

          <li>

            <Link href='#'><img alt="" loading="lazy" width="300" height="400" decoding="async" data-nimg="1" class="  hover:brightness-100 object-contain  hover:grayscale-0 transition-all duration-300 ease-in-out  brightness-75 grayscale" src={logo.path} /></Link>
          </li>

        ))}
      </ul>
    </section>

  )
}
