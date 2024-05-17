import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sponsors() {
  const sponsors = [
    { name: 'test', path: '/images/Sponsors/logo2.png' },
    { name: 'test', path: '/images/Sponsors/nitLogo.png' },
  ]

  return (
    <section className='py-16'>
      <h1 className='text-center text-5xl md:text-7xl font-semibold'>
        <span className='text-[#0EC9E3]'>our</span> sponsors
      </h1>
      <p className='text-center uppercase font-light mt-4'>
        we have beeN working with some fortune + 500 client
      </p>
      
      <ul className='flex flex-col md:flex-row justify-center items-center'>
        {sponsors.map((logo, index) => (
          <li key={index}>
            <Link href='#'>
              <img 
                alt={logo.name} 
                loading="lazy" 
                width="300" 
                height="400" 
                decoding="async" 
                data-nimg="1" 
                className="hover:brightness-100 object-contain hover:grayscale-0 transition-all duration-300 ease-in-out brightness-75 grayscale" 
                src={logo.path} 
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
