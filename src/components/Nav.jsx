import React from 'react'
import { navLinks } from '../constants/index'

const Nav = () => {
    return (
        <>
            <nav className='fixed flex w-full items-center justify-center py-10 z-50 gap-x-20'>
                {navLinks.map((links, i) =>
                    <a href={links.link} key={i} className='font-uncial text-white hover:text-yllw'><p>{links.name}</p></a>
                )}
            </nav>
        </>
    )
}

export default Nav