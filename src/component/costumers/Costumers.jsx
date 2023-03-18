
import React from 'react'
import bg from '../../homeImages/image22.webp'
import ellipse from '../../homeImages/ellipse30.webp'
import './review.css'
import { useRef } from 'react'
import Slider from "react-slick";

const Costumers = () => {
    const slide = React.useRef(null)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "150px",
        slidesToShow: 1,
        dots: true,

        autoplay: true,
        autoplaySpeed: 200,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,

                    infinite: true,
                    dots: true

                }
            },]


    };
    return (
        <div className='flex items-center flex-col justify-start gap-10 max-lg:ml-[5%]'>
            <p className='font-medium md:text-4xl max-md:text-3xl max-sm:text-2xl text-[#241330]  mt-10'>Our Happy Costumers</p>
            <p className='md:w-2/3 max-md:w-11/12 text-center text-[#000000] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
            <div className='w-11/12 overflow-hidden '>
                <Slider {...settings}>
                    <div className=''>
                        <div className='bg-cover bg-no-repeat  relative divParent md:mb-28 mx-10' style={{ backgroundImage: `url(${bg})` }}>

                            <img src={ellipse} alt="" className='absolute z-10 Imgclass' />
                            <div id='bg-white' className='bg-white  drop-shadow-xl md:pt-20 max-md:h-28 max-sm:h-32 max-md:pt-7 box-border px-5 pb-5 flex items-center   absolute z-0  flex-col  md:w-2/3 max-md:w-11/12'>

                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                                <p>-Jeo Stanlee</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='bg-cover bg-no-repeat   relative divParent' style={{ backgroundImage: `url(${bg})` }}>

                            <img src={ellipse} alt="" className='absolute z-20 Imgclass' />
                            <div id='bg-white' className='bg-white  drop-shadow-xl md:pt-20 max-md:h-28 max-sm:h-32 max-md:pt-7 box-border px-5 pb-5 flex items-center   absolute z-10  flex-col  md:w-2/3 max-md:w-11/12'>

                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                                <p>-Jeo Stanlee</p>
                            </div>

                        </div>
                    </div>

                </Slider>
            </div>


            <div className='flex  mt-14 mb-14 items-center flex-col gap-7 w-full'>
                <h1 className='sm:text-3xl  max-sm:text-base max-sm:font-semibold'>Let's talk about your Dream home</h1>
                <form action="" className="flex gap-10 max-md:flex-col items-center justify-center w-full">
                    <input type="text" className='border-b-[2px] md:w-1/4 max-md:w-2/3  focus:outline-0 ' placeholder='Name' />
                    <input type="email" className="border-b-[2px] focus:outline-0 max-md:w-2/3   md:w-1/4" placeholder='Email' />
                    <button style={{
                        width: '200px', height: '60px'
                    }} className="text-white font-bold  bg-[#4B2A63]  ">Send</button>

                </form>
            </div>

        </div>
    )
}

export default Costumers