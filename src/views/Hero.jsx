import React from 'react'

const Hero = () => {

    return (
        <>
            <div className='min-h-screen flex items-center justify-center w-full h-full bg-[#102240]'>
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
                            <button className="bg-yllw text-white py-[1rem] px-[2rem] rounded-[3rem]">But Token</button>
                            <button className="bg-transparent text-white py-[1rem] px-[2rem] rounded-[3rem] border-solid border-yllw border-[3px]">Charts</button>
                        </div>
                    </div>

                    <img src="/src/assets/hero-dessert.webp" alt="hero-image" className='w-full absolute -bottom-20 left-0 z-0' />
                    <div className="w-full h-[35rem] bg-gradient-to-t from-brwn to-transparent z-10 absolute bottom-0"></div>
                </div>
            </div>
        </>
    )
}

export default Hero