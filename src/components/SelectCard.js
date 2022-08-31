import React from 'react';

const SelectCard = (props) => {
    return (
        <div className="group relative overflow-hidden cursor-pointer">
            <img src={props.img} alt="" className='w-full h-full object-cover group-hover:scale-105 duration-500 ease-in-out' />
            <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/10 duration-500 ease-in-out"></div>
            <h3 className='absolute bottom-4 left-4 text-white'>{props.label}</h3>
        </div>
    );
};

export default SelectCard;