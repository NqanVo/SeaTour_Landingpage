import React from 'react';
import bgVideo from '../assets/beachVid.mp4'
import { BiSearch } from 'react-icons/bi'

const Hero = () => {
    return (
        <section className='w-full h-screen relative' id='home'>
            <video src={bgVideo} autoPlay loop muted className='w-full h-full object-cover'></video>
            <div className="absolute inset-0 bg-gray-900/30"></div>

            <div className="absolute top-0 w-full h-full flex flex-col gap-4 justify-center items-center text-white p-4">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
                <form action="" className='w-full flex justify-center'>
                    <div className="flex bg-white p-2 w-full sm:w-[500px] lg:w-[700px] justify-between items-center rounded-[5px] gap-2">
                        <input
                            type="text"
                            placeholder="Search Destinations"
                            className='bg-transparent outline-none border-0 text-gray-700 text-sm flex-1'
                        />
                        <button className="max-w-[50px]" onClick={(e) => e.preventDefault()}>
                            <BiSearch size={20}></BiSearch>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Hero;