import React from 'react'

const Hero = () => {

    return (
        <>
            <div className='min-h-screen flex items-center justify-center w-full'>
                {/* hero content */}
                <div className='flex flex-col text-center overflow-hidden'>
                    <p>THE ANCIENT GOLDEN BULL</p>
                    <h1>Apis</h1>
                    <h4>the Sacred Bull</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit cursus dolor vitae euismod. </p>
                    <div className="flex gap-[1rem] items-center justify-center">
                        <button className="bg-yllw text-white py-[1rem] px-[2rem] rounded-[3rem]">But Token</button>
                        <button className="bg-transparent text-white py-[1rem] px-[2rem] rounded-[3rem] border-solid border-yllw border-[3px]">Charts</button>
                    </div>
                    <img src="/src/assets/hero-dessert.webp" alt="hero-image" className='w-full absolute bottom-0 left-0 z-[-1]' />
                </div>
            </div>
        </>
    )
}

export default Hero