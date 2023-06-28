import React, { useState, useEffect, useRef } from 'react'
import { navLinks } from '../constants/index'

const Nav = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNav, setshowNav] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const showNavBar = () => {
        setshowNav(current => !current)
        console.log(showNav)
    }

    const controlNavbar = () => {
        if (scrollY > 150) {
            setShow(true);
        }
        else {
            setShow(false)
        }
    };

    return (
        <>
            <nav className={`fixed flex w-full items-center justify-center py-10 z-50 gap-x-20 transition-all ease-in-out duration-[0.25s] ${show ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'}`}>
                {navLinks.map((links, i) =>
                    <a href={links.link} key={i} className='font-uncial text-white hover:text-yllw'><p>{links.name}</p></a>
                )}
            </nav>
        </>
    )
}

export default Nav