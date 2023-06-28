import React from 'react'
import { partners } from '../constants'

const Partners = () => {
    return (
        <>
            <div className='h-auto w-full px-[15rem] py-40 bg-black text-white font-inter flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-y-10'>
                    <h1 className='font-uncial text-yllw text-7xl'>PARTNERS</h1>
                    <p className='max-w-[35rem] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi quasi quibusdam molestias earum nihil ratione.</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center items-center">
                        {partners.map((partner, i) =>
                            <div className="bg-white/20 border-solid border-[1px] border-white rounded-[5px] px-10 py-5 flex gap-x-5 items-center justify-center cursor-pointer hover:bg-white/40" key={i}>
                                <img src={partner.img} alt="" className="" />
                                <p className='font-uncial text-4xl'>{partner.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners