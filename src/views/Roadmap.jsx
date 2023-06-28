import React from 'react'
import { roadmap } from '../constants'

const Roadmap = () => {
    return (
        <>
            <div className="h-auto w-full px-[15rem] py-40 bg-black text-white font-inter flex flex-col items-center justify-center">
                <div className='flex flex-col gap-y-7 w-full'>
                    {roadmap.map((roadmaps, i) =>
                        <div className='flex rounded-[15px] overflow-hidden w-full' key={i}>
                            <div className="flex items-center justify-center bg-yllw w-[25rem]">
                                <div className="flex flex-col items-end">
                                    <h1 className='text-9xl leading-[7rem] font-bold'>{roadmaps.quarter}</h1>
                                    <h2 className='text-4xl leading-[2.5rem] font-medium text-black'>{roadmaps.year}</h2>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center bg-white/20 w-full px-10 py-10 gap-y-5">
                                <h4 className='font-uncial text-6xl'>{roadmaps.title}</h4>
                                {roadmaps.content.map((texts, j) =>
                                    <ul className='list-disc list-inside'>
                                        <li key={j} className='leading-[2rem] text-lg'>{texts.text}</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Roadmap