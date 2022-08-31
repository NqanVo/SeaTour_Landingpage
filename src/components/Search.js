import React from "react";
import { MdAddCall, MdImageSearch } from 'react-icons/md'
import Input from "./Input";
import SectionDefaultLayout from "./SectionDefaultLayout";
const Search = () => {
    return (
        <SectionDefaultLayout tailwind="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 xl:px-0" id="travel">
            <div className="lg:col-span-2 flex flex-col gap-4 text-center lg:text-left">
                <h2 className="uppercase">Luxury included vacations for two people</h2>
                <p className=" font-medium text-sm text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
                    veritatis quis rem. Culpa, omnis distinctio! Esse similique non illum
                    possimus itaque quia delectus architecto, beatae quisquam magni eius
                    expedita suscipit?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
                    veritatis quis rem. Culpa, omnis distinctio! Esse similique non illum
                    possimus itaque quia delectus architecto, beatae quisquam magni eius
                    expedita suscipit?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
                    veritatis quis rem. Culpa, omnis distinctio! Esse similique non illum
                    possimus itaque quia delectus architecto, beatae quisquam magni eius
                    expedita suscipit?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
                    veritatis quis rem. Culpa, omnis distinctio! Esse similique non illum
                    possimus itaque quia delectus architecto, beatae quisquam magni eius
                    expedita suscipit?
                </p>
                <div className="grid lg:grid-cols-2 py-8 gap-4 justify-center items-center">
                    <div className="flex lg:flex-row flex-col items-center gap-4">
                        <div className="p-4 bg-gradient-to-r from-primary to-[#C493FF] rounded-[5px] justify-start text-white">
                            <MdAddCall size={30}></MdAddCall>
                        </div>
                        <div className="text-center">
                            <h3>LEADING SERVICE</h3>
                            <p className="uppercase">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center gap-4">
                        <div className="p-4 bg-gradient-to-r from-primary to-[#C493FF] rounded-[5px] justify-start text-white">
                            <MdImageSearch size={30}></MdImageSearch>
                        </div>
                        <div className="text-center">
                            <h3>LEADING SERVICE</h3>
                            <p className="uppercase">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center gap-4 w-full border border-gray-300 rounded-[5px] p-2 lg:p-4">
                    <span>GET AN ADDITIONAL 10% OFF</span>
                    <span>12 HOURS LEFT</span>
                    <a href="/" className="w-full p-2 font-medium text-base text-white bg-gray-700 cursor-pointer duration-500 flex justify-center ease-in-out ">BOOK NOW AND SAFE</a>
                </div>
                <form action="" className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <span className='font-medium'>Destination</span>
                        <select name="" id="" className="w-full p-2 text-gray-700 cursor-pointer outline-none border border-gray-300 rounded-[5px]">
                            <option value="">Vietnam</option>
                            <option value="">Phi</option>
                            <option value="">Sin</option>
                        </select>
                    </div>
                    <Input label='Check-in' type='date'></Input>
                    <Input label='Check-out' type='date'></Input>
                    <button onClick={(e) => e.preventDefault()}><input type="submit" className="block cursor-pointer" value='Rates & Availabilities' /></button>
                </form>
            </div>
        </SectionDefaultLayout>
    );
};

export default Search;
