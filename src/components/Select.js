import React from 'react';
import SectionDefaultLayout from './SectionDefaultLayout';
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives3.jpg'
import SelectCard from './SelectCard';
const Select = () => {
    return (
        <SectionDefaultLayout tailwind='px-4 xl:px-0 text-center' id='select'>
            <h1 className='py-4'>Views</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <SelectCard img={borabora} label='Bora Bora'></SelectCard>
                <SelectCard img={borabora2} label='Bora Bora'></SelectCard>
                <SelectCard img={keywest} label='Key West'></SelectCard>
                <SelectCard img={maldives} label='Maldives'></SelectCard>
                <SelectCard img={maldives2} label='Maldives'></SelectCard>
                <SelectCard img={maldives3} label='Maldives'></SelectCard>
            </div>
        </SectionDefaultLayout>
    );
};

export default Select;