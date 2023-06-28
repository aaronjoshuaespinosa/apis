import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const About = () => {
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
            <div className='h-auto w-full px-[15rem] py-40 bg-gradient-to-b from-brwn to-black text-white font-inter' id="about">
                <div className="flex w-full relative">
                    <motion.img src="/apis sacred bull.png" alt="golden-bull" className='absolute left-[-27rem] top-[-7rem] w-[40rem]' ref={aRef} initial={{ opacity: 0, x: -60 }} animate={aView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.2 }} />

                    <div className="w-full flex">  </div>

                    <div className="flex flex-col gap-y-5">
                        <div>
                            <motion.h4 className="font-uncial text-3xl" ref={bRef} initial={{ opacity: 0, y: 30 }} animate={bView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>History of the Sacred Bull</motion.h4>
                            <motion.h1 className="font-uncial text-yllw text-7xl leading-[6rem]" ref={cRef} initial={{ opacity: 0, y: 30 }} animate={cView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>LEGEND OF APIS</motion.h1>
                        </div>
                        <div className='flex flex-col gap-y-5'>
                            <motion.p className="" ref={dRef} initial={{ opacity: 0, y: 30 }} animate={dView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.4 }}>
                                Once upon a time, in the ancient lands of Egypt, there lived a magnificent bull named Apis. Apis was no ordinary bull; he was believed to be a sacred embodiment of the god Ptah. With his sleek black coat, powerful build, and majestic horns, Apis roamed the fertile fields and brought prosperity to the people.
                            </motion.p>
                            <motion.p className="" ref={dRef} initial={{ opacity: 0, y: 30 }} animate={dView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.6 }}>
                                The pharaoh of Egypt, Amenhotep III, held Apis in the highest regard and considered him a symbol of divine power. The bull's presence at royal ceremonies was considered an auspicious sign, and his blessings were sought by all. People traveled from far and wide to catch a glimpse of Apis, hoping to receive his blessings and be granted good fortune.
                            </motion.p>
                            <motion.p className="" ref={dRef} initial={{ opacity: 0, y: 30 }} animate={dView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.8 }}>
                                As years passed, Apis grew older, and his strength began to wane. The people of Egypt grew concerned about their beloved bull's well-being. They offered prayers and sacrifices, hoping to restore his vitality. The pharaoh ordered his finest veterinarians and priests to care for Apis, but no remedy seemed to work. It became clear that the time of Apis's departure was drawing near.
                            </motion.p>
                            <motion.p className="" ref={dRef} initial={{ opacity: 0, y: 30 }} animate={dView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 1.0 }}>
                                When the fateful day arrived, a solemn atmosphere descended upon Egypt. The pharaoh and his subjects gathered to bid farewell to their cherished bull. Apis, sensing the weight of his role, walked with regal grace, his horns held high. He acknowledged the love and reverence of the people with gentle nods of his head.
                            </motion.p>
                            <motion.p className="" ref={dRef} initial={{ opacity: 0, y: 30 }} animate={dView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 1.2 }}>
                                As the sun set on that somber day, Apis peacefully passed away, surrounded by the pharaoh and his loyal subjects. The land mourned the loss of their divine bull, but they knew that Apis would forever be etched in their hearts as a symbol of strength, abundance, and the connection between the mortal and divine realms. And so, Apis The Bull became a legendary figure, inspiring generations to honor the sacredness of life and the power of the gods that watch over them.
                            </motion.p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About