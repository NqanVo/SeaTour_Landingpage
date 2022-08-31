import React from 'react';
import { BsPerson } from 'react-icons/bs'
import { BiSearch, BiMenuAltRight } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react';
import { BsFacebook, BsPinterest, BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'


import { Link } from 'react-router-dom'
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className='flex justify-between items-center h-20 px-4 absolute z-10 text-white w-full'>
            <Link to='/' className=' z-50'><h1 className={`${openMenu && 'text-primary'} cursor-pointer hover:text-primary duration-500 ease-in-out`}>BEACHES</h1></Link>
            <ul className='hidden lg:flex lg:flex-row items-center'>
                <li className=''>Home</li>
                <li className=''><a href="#destinations">Destinations</a></li>
                <li className=''><a href="#travel">Travel</a></li>
                <li className=''><a href="#select">View</a></li>
                <li className=''>Book</li>
            </ul>
            <ul className={`hidden lg:flex lg:flex-row items-center`}>
                <li className='p-4 cursor-pointer'><BiSearch size={20}></BiSearch> </li>
                <li className='p-4 cursor-pointer'><BsPerson size={20}></BsPerson> </li>
            </ul>

            {/* Reponsive moblie */}
            <div className="z-50 lg:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <IoClose size={30}></IoClose> : <BiMenuAltRight size={30}></BiMenuAltRight>}
            </div>
            <div className={`${openMenu ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'} text-black z-30 flex flex-col gap-4 lg:hidden fixed top-0  w-full p-4 pt-20 bg-gray-100/90 shadow-md duration-500 ease-in-out`}>
                <ul className='block w-full' onClick={() => setOpenMenu(!openMenu)}>
                    <li className='font-medium p-4 cursor-pointer border-b border-b-gray-800'>Home</li>
                    <li className='font-medium p-4 cursor-pointer border-b border-b-gray-800'><a href="#destinations">Destinations</a></li>
                    <li className='font-medium p-4 cursor-pointer border-b border-b-gray-800'><a href="#travel">Travel</a></li>
                    <li className='font-medium p-4 cursor-pointer border-b border-b-gray-800'><a href="#select">View</a></li>
                    <li className='font-medium p-4 cursor-pointer border-b border-b-gray-800'>Book</li>
                </ul>
                <div className="flex flex-col gap-4">
                    <button className=' cursor-pointer'>Search</button>
                    <button className=' cursor-pointer'>Account</button>
                </div>
                <ul className="flex justify-between items-center text-2xl my-5 text-primary">
                    <li className='cursor-pointer'><BsFacebook></BsFacebook> </li>
                    <li className='cursor-pointer'><BsTwitter></BsTwitter> </li>
                    <li className='cursor-pointer'><AiOutlineInstagram></AiOutlineInstagram> </li>
                    <li className='cursor-pointer'><BsPinterest></BsPinterest> </li>
                    <li className='cursor-pointer'><AiFillYoutube></AiFillYoutube> </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;