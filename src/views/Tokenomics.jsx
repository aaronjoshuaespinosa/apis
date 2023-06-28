import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Tokenomics = () => {
    const options = {
        triggerOnce: true,
        thresold: 0.5
    }

    const [aRef, aView] = useInView(options)
    const [bRef, bView] = useInView(options)
    const [cRef, cView] = useInView(options)
    const [dRef, dView] = useInView(options)

    return (
        <>
            <div className='h-auto w-full px-[2rem] md:px-[5rem] lg:px-[15rem] py-40 bg-black text-white font-inter flex flex-col items-center justify-center gap-y-10' id="tokenomics">
                <div className='text-center px-[5rem]'>
                    <motion.h1 className='font-uncial text-yllw md:text-5xl lg:text-7xl md:leading-[4rem] lg:leading-[6rem] text-shadow' ref={aRef} initial={{ opacity: 0, y: 30 }} animate={aView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>Apis the Sacred Bull</motion.h1>
                    <motion.h4 className='font-uncial text-3xl' ref={bRef} initial={{ opacity: 0, y: 30 }} animate={bView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>TOKENOMICS</motion.h4>
                </div>
                <motion.p className='max-w-[35rem] text-center text-sm md:text-base px-[2rem]' ref={cRef} initial={{ opacity: 0, y: 30 }} animate={cView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.4 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, possimus ipsum? Quidem commodi culpa odit!</motion.p>

                <motion.div className="flex flex-col justify-center items-center gap-y-10 py-10 px-[2rem] md:px-[5rem] lg:px-[10rem] bg-white/20 border-white border-solid border-[1px] rounded-[20px]" initial={{ opacity: 0, y: 30 }} ref={dRef} animate={dView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.6 }}>
                    <div className="flex justify-between gap-x-5 md:gap-x-10 lg:gap-x-20 px-[1rem] md:px-[5rem] lg:px-[10rem]  w-full items-center text-center">
                        <div className="">
                            <p className='font-uncial text-yllw text-6xl md:text-8xl lg:text-9xl'>0%</p>
                            <p>BUY TAX</p>
                        </div>
                        <div className='h-[8rem] md:h-[12rem] w-0 border-solid border-[1px] border-white'></div>
                        <div className="">
                            <p className='font-uncial text-yllw text-6xl md:text-8xl lg:text-9xl'>0%</p>
                            <p>SELL TAX</p>
                        </div>
                    </div>
                    <p className='font-uncial text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </motion.div>
            </div>
        </>
    )
}

export default Tokenomics