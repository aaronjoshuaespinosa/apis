import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { partners } from '../constants'

const Partners = () => {
    const options = {
        triggerOnce: true,
        thresold: 0.5
    }

    const [aRef, aView] = useInView(options)
    const [bRef, bView] = useInView(options)
    const [cRef, cView] = useInView(options)

    return (
        <>
            <div className='h-auto w-full px-[15rem] py-40 bg-black text-white font-inter flex flex-col items-center justify-center' id="partners">
                <div className='flex flex-col items-center justify-center gap-y-10'>
                    <motion.h1 className='font-uncial text-yllw text-7xl text-shadow' ref={aRef} initial={{ opacity: 0, y: 30 }} animate={aView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>PARTNERS</motion.h1>
                    <motion.p className='max-w-[35rem] text-center' ref={bRef} initial={{ opacity: 0, y: 30 }} animate={bView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi quasi quibusdam molestias earum nihil ratione.</motion.p>
                    <motion.div className="flex flex-wrap gap-x-5 gap-y-5 justify-center items-center" ref={cRef} initial={{ opacity: 0, y: 30 }} animate={cView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.4 }}>
                        {partners.map((partner, i) =>
                            <div className="bg-white/20 border-solid border-[1px] border-white rounded-[5px] px-10 py-5 flex gap-x-5 items-center justify-center cursor-pointer hover:bg-white/40" key={i}>
                                <img src={partner.img} alt="" className="" />
                                <p className='font-uncial text-4xl'>{partner.name}</p>
                            </div>
                        )}
                    </motion.div >
                </div >
            </div >
        </>
    )
}

export default Partners