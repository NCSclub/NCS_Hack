import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sponsors() {
  const sponsors = [
    { name: 'realistic security', path: '/images/Sponsors/logo2.png' ,LINK:'https://www.realistic-security.com/' },
    { name: 'NIT', path: '/images/Sponsors/nitLogo.png', LINK:'https://www.facebook.com/profile.php?id=100064208677225' },
    { name: 'ADEX', path: '/images/Sponsors/ADEX.png' , LINK:'https://www.adextechnology.dz/'},
    
  ]

  return (
    <section className='py-16'>
      <h1 className='text-center text-5xl md:text-7xl font-semibold'>
        <span className='text-[#0EC9E3]'>our</span> sponsors
      </h1>
  
      
      <ul className='flex flex-col p-12 md:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12'>
        {sponsors.map((logo, index) => (
          <li key={index}>
            <Link href={logo.LINK} target="_blank" >
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
