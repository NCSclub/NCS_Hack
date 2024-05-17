"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const socialMediaLinks = [
  {
    href: "https://www.linkedin.com/company/numidia-computer-society",
    src: "/images/Footer/linkdInIcon.svg",
    alt: "LinkedIn"
  },
  {
    href: "https://www.instagram.com/ncs._club/",
    src: "/images/Footer/instagramIcon.svg",
    alt: "Instagram"
  },
  {
    href: "https://discord.gg/FFAsdkx9",
    src: "/images/Footer/discordIcon.svg",
    alt: "Discord"
  },
  {
    href: "https://www.tiktok.com/@nit_computer_society",
    src: "/images/Footer/tiktokIcon.svg",
    alt: "TikTok"
  },
  {
    href: "mailto:numidiacomputersociety@gmail.com",
    src: "/images/Footer/emailIcon.svg",
    alt: "Email"
  }
];

export default function Footer() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end ">
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-shadow"></div>
      <div className="absolute inset-0 bg-contain bg-no-repeat bg-center bg-arrow"></div>
      <div className="absolute inset-0  bg-left bg-no-repeat  bg-cube"></div>
      <div className="flex justify-center mb-10">
       {/* <a src='https://tripetto.app/run/YTZACWEMES'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
          
        >
          Register Now
        </motion.button>
        </a> */}
      </div>
      <footer className="relative w-full bg-black bg-opacity-70 py-6 flex flex-col items-center md:flex-row md:justify-between md:px-8">
        <div className="mb-4 md:mb-0 flex-shrink-0">
          <Image
            src="/images/Footer/whiteNcsHackLogo.svg"
            alt="NCS Hack Logo"
            width={150}
            height={50}
          />
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="flex space-x-4 mb-4">
            {socialMediaLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={40}
                  height={40}
                />
              </a>
            ))}
          </div>
          <div>
            <p className="text-white">Made with ❤️ by NCS</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-gray-700 hover:rounded-md p-2"
          >
            <a href="#navbar" className="flex items-center gap-2">
              <span className="text-white font-bold">Back to the top</span>
              {/* Uncomment and use the appropriate arrow image if necessary */}
              {/* <Image alt="Top Arrow" src="/images/Footer/backGroundArrow.svg" width={20} height={20} /> */}
            </a>
          </motion.button>
        </div>
      </footer>
    </section>
  );
}
