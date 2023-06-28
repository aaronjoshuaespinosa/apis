import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import { motion } from 'framer-motion';

const Hero = () => {
    const [vantaEffect, setVantaEffect] = useState(null)


    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,
                backgroundColor: 0x102240,
                points: 10.00,
                maxDistance: 5.00,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <>
            <div className='min-h-screen flex items-center justify-center w-full h-full bg-[#102240] box-border' id="home" >
                <div className="z-0 absolute top-0 left-0 h-screen w-full" ref={myRef}></div>
                {/* hero content */}
                <div className='flex flex-col gap-y-20 text-center overflow-hidden font-inter items-center relative w-full h-screen'>

                    <div className="flex flex-col gap-y-10 z-20 h-full justify-center items-center">
                        <div className='flex flex-col gap-y-5 items-center'>
                            <motion.p className='tracking-[0.3rem] md:tracking-[0.5rem] font-medium text-xs md:text-sm text-yllw' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1 }}>THE ANCIENT GOLDEN BULL</motion.p>
                            <motion.div className='w-[8rem] border-solid border-[1px] border-yllw' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1, delay: 0.3 }}></motion.div>
                        </div>
                        <motion.div className="font-uncial text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1, delay: 0.6 }}>
                            <h1 className='text-[7.5rem] md:text-[12rem] leading-[7.5rem] md:leading-[13rem]'>Apis</h1>
                            <h4 className='text-[2rem] md:text-[3rem] md:leading-[4rem]'>the Sacred Bull</h4>
                        </motion.div>
                        <motion.p className='text-white max-w-[15rem] md:max-w-[30rem] font-extralight text-sm md:text-base' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1, delay: 0.9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit cursus dolor vitae euismod. </motion.p>
                        <motion.div className="flex gap-[1rem] items-center justify-center font-uncial" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1, delay: 1.2 }}>
                            <button className="bg-yllw hover:bg-yllw/70 text-white py-[1rem] px-[2rem] rounded-[7px] border-solid border-yllw border-[2px] text-sm md:text-base">But Token</button>
                            <button className="bg-transparent hover:bg-yllw/20 text-white py-[1rem] px-[2rem] rounded-[7px] border-solid border-yllw border-[2px] text-sm md:text-base">Charts</button>
                        </motion.div>
                    </div>

                    <motion.img src="/hero-dessert.webp" alt="hero-image" className='w-full absolute -bottom-20 left-0 z-0' initial={{ opacity: 0, y: 250 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1 }} />
                    <div className="w-full h-[35rem] bg-gradient-to-t from-brwn to-transparent z-10 absolute bottom-0 pointer-events-none"></div>
                </div>
            </div>
        </>
    )
}

export default Hero