import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const links =[
        { href:"https://facebook.com", icon: <FaFacebook/> },
        { href:"https://linkedin.com", icon: <FaLinkedin/> },
        { href:"https://instagram.com", icon: <FaInstagram/>},
        { href:"https://twitter.com", icon: <FaTwitter/> },
    ]
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className=' text-sm  w-full text-center md:text-left'>
                &copy;2025 Zentry. All rights reserved
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((item)=>(
                    <a key={item} href={item.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                        {item.icon}
                    </a>
                ))}
            </div>
            <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
                Privacy Policy
            </a>
        </div>

    </footer>
  )
}

export default Footer