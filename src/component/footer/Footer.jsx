import React from 'react'
import Facebook from '../../homeImages/facebook.svg'
import Linkedin from '../../homeImages/linkedin.svg'
import Twitter from '../../homeImages/twitter.svg'
import Youtube from '../../homeImages/youtube.svg'
import Instagram from '../../homeImages/insta.svg'
import artboard from '../../homeImages/Artboard22.webp'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] mt-[5.9375rem] max-lg:contents lg:flex   justify-between lg:gap-20  ' >
            <div className='xl:w-[25%] flex flex-col max-lg:items-center  lg:ml-[12.5625rem] my-[63px]'>
                <div className='' ><img src={artboard} className='w-[111px] h-[111px]' alt="" /></div>
                <div className='max-lg:hidden text-[#3D3D3D] font-normal text-[18px] pt-[6px]'>
                    We introduce our 
                    selves as  LAND Interior and Architectural Design Consultancy - 
                    one of the best interior designers in Chennai. Chennai Luxury 
                    Interior and Architectural Design Consultancy has challenged 
                    the conventional way of interior designing and given new
                     dimensions to the art of interior designing.
                     </div>
                   <div className='lg:hidden mt-4 self-center'>
                   <p>
                        landinteriors@gmail.com
                    </p>
                    <p className='whitespace-nowrap'>
                        +91 98987 65656
                    </p>
                    </div> 
                   
                <div className='flex max-sm:gap-3 sm:gap-3 mt-[26px]'>
                    <img src={Facebook} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Instagram} alt="" />
                </div>
                       
            </div>
            <ul className='self-center flex flex-col gap-10 max-lg:hidden'>
                <li className='text-[#4F4F4F] text-[16px] font-semibold'>WHAT WE DO</li>
                <li className='text-[#4F4F4F] text-[18px] font-medium'>
                    <li> Interior Design</li>
                    <li>  Kitchen </li>
                    <li> Ceiling </li>
                    <li>Bedroom</li>
                    <li>Smart Home</li>
                </li>
            </ul>
            <ul className='lg:self-end flex flex-col lg:gap-10 '>
                <li  className='text-[#4F4F4F] max-lg:hidden text-[16px] font-semibold'>Get in touch</li>
                <li className='max-lg:absolute max-lg:hidden max-lg:text-center max-lg:left-[32%]  max-lg:right-[50%] text-[#4F4F4F] text-[18px] font-medium' >
                    <li>
                        landinteriors@gmail.com
                    </li>
                    <li className='whitespace-nowrap'>
                        +91 98987 65656
                    </li>
                    <ul className='flex gap-10 mr-[3rem] max-lg:hidden mb-[10%] mt-[25%]'>
                        <li>
                            About
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Studio
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Contact
                        </li>

                    </ul>
                </li>

            </ul>


        </div>
    )
}

export default Footer


