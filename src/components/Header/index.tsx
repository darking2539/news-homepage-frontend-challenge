import React, { useState } from 'react'
import MenuIcon from '../../assets/images/icon-menu.svg'
import CloseIcon from '../../assets/images/icon-menu-close.svg'

export default function index() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const menuOpenClick = () => {
        setMenuOpen(true)
    }

    const menuCloseClick = () => {
        setMenuOpen(false)
    }

    return (
        <div className='flex justify-between'>
            <div className="text-4xl font-extrabold">
                W.
            </div>

            <div className="hidden md:flex gap-6 md:gap-10">
                <div className='font-sans text-stone-400 cursor-pointer'>Home</div>
                <div className='font-sans text-stone-400 cursor-pointer'>New</div>
                <div className='font-sans text-stone-400 cursor-pointer'>Popular</div>
                <div className='font-sans text-stone-400 cursor-pointer'>Trending</div>
                <div className='font-sans text-stone-400 cursor-pointer'>Categories</div>
            </div>

            <div className='flex items-center md:hidden pt:5 cursor-pointer'>
                <img src={MenuIcon} onClick={menuOpenClick} />
            </div>

            {menuOpen && (
                <div style={{ top: "0px", right: "0px", position: "fixed", zIndex: 2, backgroundColor: "rgba(0,0,0,0.4)", width: "100%", height: "100%" }}>
                    <div style={{ top: "0px", right: "0px", position: "fixed", zIndex: 2, backgroundColor: "rgb(255,255,255,255)", width: "70%", height: "100%" }}>
                        <div className='flex justify-end p-6'><img className='cursor-pointer' src={CloseIcon} onClick={menuCloseClick} /></div>
                        <div className='flex flex-col p-[10%]'>
                            <div className='font-sans text-2xl text-gray-600 cursor-pointer pt-5'>Home</div>
                            <div className='font-sans text-2xl text-gray-600 cursor-pointer pt-5'>New</div>
                            <div className='font-sans text-2xl text-gray-600 cursor-pointer pt-5'>Popular</div>
                            <div className='font-sans text-2xl text-gray-600 cursor-pointer pt-5'>Trending</div>
                            <div className='font-sans text-2xl text-gray-600 cursor-pointer pt-5'>Categories</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
