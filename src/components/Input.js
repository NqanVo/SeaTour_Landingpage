import React from 'react';

const Input = (props) => {
    return (
        <div className='flex flex-col gap-1'>
            <span className='font-medium'>{props.label}</span>
            <input type={props.type} className='w-full p-2 text-gray-700 cursor-pointer outline-none border border-gray-300 rounded-[5px]' />
        </div>
    );
};

export default Input;