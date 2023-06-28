import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

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
            <div className='min-h-screen flex items-center justify-center w-full h-full bg-[#102240] box-border' >
                <div className="z-0 absolute top-0 left-0 h-screen w-full" ref={myRef}></div>
                {/* hero content */}
                <div className='flex flex-col gap-y-20 text-center overflow-hidden font-inter items-center relative w-full h-screen'>

                    <div className="flex flex-col gap-y-10 z-20 h-full justify-center">
                        <div className='flex flex-col gap-y-5 items-center'>
                            <p className='tracking-[0.5rem] font-medium text-sm text-yllw'>THE ANCIENT GOLDEN BULL</p>
                            <div className='w-[8rem] border-solid border-[1px] border-yllw'></div>
                        </div>
                        <div className="font-uncial text-white">
                            <h1 className='text-[12rem] leading-[13rem]'>Apis</h1>
                            <h4 className='text-[3rem] leading-[4rem]'>the Sacred Bull</h4>
                        </div>
                        <p className='text-white max-w-[30rem] font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit cursus dolor vitae euismod. </p>
                        <div className="flex gap-[1rem] items-center justify-center font-uncial">
                            <button className="bg-yllw text-white py-[1rem] px-[2rem] rounded-[7px] border-solid border-yllw border-[2px]">But Token</button>
                            <button className="bg-transparent text-white py-[1rem] px-[2rem] rounded-[7px] border-solid border-yllw border-[2px]">Charts</button>
                        </div>
                    </div>

                    <img src="/hero-dessert.webp" alt="hero-image" className='w-full absolute -bottom-20 left-0 z-0' />
                    <div className="w-full h-[35rem] bg-gradient-to-t from-brwn to-transparent z-10 absolute bottom-0 pointer-events-none"></div>
                </div>
            </div>
        </>
    )
}

export default Hero