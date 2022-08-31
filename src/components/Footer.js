import React from 'react';
import SectionDefaultLayout from './SectionDefaultLayout';
import { BsFacebook, BsPinterest, BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className='bg-gray-200'>
            <SectionDefaultLayout tailwind='' id='footer'>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between">
                        <h1 className={`cursor-pointer hover:text-primary duration-500 ease-in-out`}>BEACHES</h1>
                        <ul className="flex justify-center items-center text-2xl text-primary gap-2 lg:justify-end">
                            <li className='cursor-pointer'><BsFacebook></BsFacebook> </li>
                            <li className='cursor-pointer'><BsTwitter></BsTwitter> </li>
                            <li className='cursor-pointer'><AiOutlineInstagram></AiOutlineInstagram> </li>
                            <li className='cursor-pointer'><BsPinterest></BsPinterest> </li>
                            <li className='cursor-pointer'><AiFillYoutube></AiFillYoutube> </li>
                        </ul>
                    </div>
                    <div className="flex flex-row text-center lg:text-left justify-between">
                        <ul className='flex flex-col lg:flex-row gap-2'>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                        <ul className='flex flex-col lg:flex-row gap-2'>
                            <li>Home</li>
                            <li>Destinations</li>
                            <li>Travel</li>
                            <li>View</li>
                            <li>Book</li>
                        </ul>
                    </div>
                </div>
            </SectionDefaultLayout>
        </footer>
    );
};

export default Footer;