import React from 'react'

const Tokenomics = () => {
    return (
        <>
            <div className='h-auto w-full px-[15rem] py-40 bg-black text-white font-inter flex flex-col items-center justify-center gap-y-10'>
                <div className='text-center'>
                    <h1 className='font-uncial text-yllw text-7xl text-shadow'>Apis the Sacred Bull</h1>
                    <h4 className='font-uncial text-3xl'>TOKENOMICS</h4>
                </div>
                <p className='max-w-[35rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, possimus ipsum? Quidem commodi culpa odit!</p>

                <div className="flex flex-col justify-center items-center gap-y-10 py-10 bg-white/20 border-white border-solid border-[1px] rounded-[20px]">
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
                </div>
            </div>
        </>
    )
}

export default Tokenomics