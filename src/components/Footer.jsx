import React from 'react'
import { footerLogos } from '../constants'

const Footer = () => {
    return (
        <>
            <footer className='h-auto w-full md:px-[5rem] lg:px-[15rem] py-7 bg-black text-white font-inter flex flex-col gap-y-5 md:flex-row items-center md:justify-between'>
                <p className='text-sm md:text-base'>contact@apis.com</p>
                <div className="flex gap-x-4">
                    {footerLogos.map((logo, i) =>
                        <a href={logo.link} key={i}><img src={logo.logo} alt={logo.name} className='h-8' /></a>
                    )}
                </div>
            </footer>
        </>
    )
}

export default Footer