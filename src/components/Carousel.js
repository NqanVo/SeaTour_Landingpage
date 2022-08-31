import React, { useState, useRef } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import SectionDefaultLayout from './SectionDefaultLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderData = [{
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
},
{
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
},
{
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
}
]
const Carousel = () => {
    return (
        <SectionDefaultLayout tailwind='px-4 xl:px-0 relative flex justify-center items-center' id='carousel'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{
                    clickable: true,
                }}

                className='h-48 lg:h-[500px]'
                modules={[Pagination, Navigation]}
            >
                {sliderData.map((item, index) => (
                    <SwiperSlide className={`overflow-hidden rounded-[5px]`} key={index}>
                        <img src={item.url} alt="" className='w-full h-full object-cover' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionDefaultLayout>
    );
};

export default Carousel;