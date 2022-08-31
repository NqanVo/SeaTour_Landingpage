import React from 'react';
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import SectionDefaultLayout from './SectionDefaultLayout';


const Destinations = () => {
    return (
        <SectionDefaultLayout tailwind='px-4 xl:px-0 flex flex-col gap-6 justify-center items-center' id='destinations'>
            <h1>All-InCluSive Resorts</h1>
            <span>On the Caribbean's Best Beaches</span>
            <div className="grid grid-rows-none lg:grid-cols-5 gap-2 lg:gap-4">
                <div className="col-span-2 lg:col-span-3 row-span-2 overflow-hidden">
                    <img className='w-full h-full object-cover' src={borabora} alt="" />
                </div>
                <div className="overflow-hidden">
                    <img className='w-full h-full object-cover ' src={borabora2} alt="" />
                </div>
                <div className="overflow-hidden">
                    <img className='w-full h-full object-cover ' src={maldives} alt="" />
                </div>
                <div className="overflow-hidden">
                    <img className='w-full h-full object-cover ' src={maldives2} alt="" />
                </div>
                <div className="overflow-hidden">
                    <img className='w-full h-full object-cover ' src={keywest} alt="" />
                </div>
            </div>
        </SectionDefaultLayout>
    );
};

export default Destinations;