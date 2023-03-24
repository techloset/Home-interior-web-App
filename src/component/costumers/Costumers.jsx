
import React from 'react'
import bg from '../../homeImages/image22.webp'
import ellipse from '../../homeImages/ellipse30.webp'
import Vector from '../../homeImages/vector.svg'
import './review.css'
import { useRef } from 'react'
import Slider from "react-slick";

const Costumers = () => {
    const slider = React.useRef(null)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        centerPadding: '200px',
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    prevArrow: null,
                    nextArrow: null,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 800,
                settings: {
                    prevArrow: null,
                    nextArrow: null,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 500,
                settings: {
                    prevArrow: null,
                    nextArrow: null,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]


    };
    return (
        <>
        <div className='flex flex-col lg:items-center ml-[3rem] sm:ml-[7rem]  mt-[8rem]'>

            <h1 className='  font-medium md:text-4xl md:leading-[3.375rem] max-md:text-3xl max-sm:text-2xl text-[#241330] max-sm:self-start '>Our Happy Costumers</h1>
            <p className='lg:w-[55%] sm:w-[85%]  lg:text-center text-[#000000] text-start text-2xl pt-[3rem] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p> 
        </div>

            <div className='flex items-center flex-col justify-start '>
                <div className='w-11/12  overflow-hidden mt-[4.5rem]'>
                    <Slider {...settings}>
                        <div className="">
                            <div className=' max-md:mx-10 mx-20 relative  '><img src={bg} height={536} className='max-sm:h-[300px]' alt="" />
                                <div className='absolute h-[45%] w-[60%] overflow-visible z-10 bg-gray-50 max-lg:w-[75%] max-lg:left-[12%] max-md:w-[90%] max-md:bottom-[10%] max-md:left-[5%] max-md:h-[70%] left-[20%] bottom-[-10%] flex flex-col justify-center  text-center'>
                                    <div className='flex justify-center '>
                                        <img src={ellipse} className='mt-[-10%]' alt=" profile img" width={100} height={100} />
                                    </div>
                                    <h1 className='mt-0 max-md:mt-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing   <span className="max-sm:hidden"> <br /></span> elit ut aliquam, purus sit amet luctus venenatis, lectus <span className="max-sm:hidden"> <br /></span> magna fringilla urna, porttitor</h1>
                                    <div className="">
                                        <h1 className='text-2xl font-semibold mt-[10] ' >-Jeo Stanlee</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=' max-md:mx-10 mx-20 relative  '><img src={bg} height={536} className='max-sm:h-[300px]' alt="" />
                                <div className='absolute h-[45%] w-[60%] overflow-visible z-10 bg-gray-50 max-lg:w-[75%] max-lg:left-[12%] max-md:w-[90%] max-md:bottom-[10%] max-md:left-[5%] max-md:h-[70%] left-[20%] bottom-[-10%] flex flex-col justify-center  text-center'>
                                    <div className='flex justify-center '>
                                        <img src={ellipse} className='mt-[-10%]' alt=" profile img" width={100} height={100} />
                                    </div>
                                    <h1 className='mt-0 max-md:mt-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing   <span className="max-sm:hidden"> <br /></span> elit ut aliquam, purus sit amet luctus venenatis, lectus <span className="max-sm:hidden"> <br /></span> magna fringilla urna, porttitor</h1>
                                    <div className="">
                                        <h1 className='text-2xl font-semibold mt-[10] ' >-Jeo Stanlee</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <h1 className='text-2xl md:text-4xl mx-[3rem]  sm:mx-[6rem] xl:ml-[12.75rem] mt-[7.125rem] max-sm:text-base max-sm:font-semibold'>Let's talk about your Dream home</h1>
            <div className=' mx-[3rem] xl:mx-[12.75rem] max-xl:mt-[5rem]  xl:mt-[5.5625rem] max-xl:flex  max-xl:flex-row  sm:mx-[6rem] '>
                <div action="" className="flex   max-xl:flex-col  max-xl:w-[90%]">
                    <input type="text" className='border-b-[2px]  md:w-[100%]   focus:outline-0 ' placeholder='Name' />
                    <input type="email" className="border-b-[2px] max-xl:mt-[5rem] md:w-[100%] xl:ml-[9.4375rem] focus:outline-0  " placeholder='Phone / Email' />
                    <button className="text-white font-bold xl:ml-[3rem] max-xl:mt-[4rem] max-xl:w-[200px] xl:px-[104px] py-[22px] bg-[#4B2A63]   ">Send</button>
                </div>
            </div>
        </>
    )
}

export default Costumers