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
            <div className='h-auto w-full px-[15rem] py-40 bg-black text-white font-inter flex flex-col items-center justify-center gap-y-10' id="tokenomics">
                <div className='text-center'>
                    <motion.h1 className='font-uncial text-yllw text-7xl text-shadow' ref={aRef} initial={{ opacity: 0, y: 30 }} animate={aView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>Apis the Sacred Bull</motion.h1>
                    <motion.h4 className='font-uncial text-3xl' ref={bRef} initial={{ opacity: 0, y: 30 }} animate={bView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>TOKENOMICS</motion.h4>
                </div>
                <motion.p className='max-w-[35rem] text-center' ref={cRef} initial={{ opacity: 0, y: 30 }} animate={cView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.4 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, possimus ipsum? Quidem commodi culpa odit!</motion.p>

                <motion.div className="flex flex-col justify-center items-center gap-y-10 py-10 bg-white/20 border-white border-solid border-[1px] rounded-[20px]" initial={{ opacity: 0, y: 30 }} ref={dRef} animate={dView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.6 }}>
                    <div className="flex justify-between gap-x-20 px-[10rem]  w-full items-center text-center">
                        <div className="">
                            <p className='font-uncial text-yllw text-9xl'>0%</p>
                            <p>BUY TAX</p>
                        </div>
                        <div className='h-[12rem] w-0 border-solid border-[1px] border-white'></div>
                        <div className="">
                            <p className='font-uncial text-yllw text-9xl'>0%</p>
                            <p>SELL TAX</p>
                        </div>
                    </div>
                    <p className='font-uncial'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </motion.div>
            </div>
        </>
    )
}

export default Tokenomics