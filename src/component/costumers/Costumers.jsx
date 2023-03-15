
import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import bg from '../../homeImages/ellipse_bg.svg'
import ellipse from '../../homeImages/ellipse.svg'

const Costumers = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <>

            <div class="flex flex-col justify-center items-center ">
                <div class=" md:text-3xl text-gray-900 font-medium text-xl ">Our Happy Costumers</div>
                <div class="text-black text-sm text-center w-[50%] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                    luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim
                </div>
            </div>

            <Slider  {...settings}>
                <div className="mx-36 relative h-full py-28">
                    <img src={bg} width='80%' height='100%' />


                    <div class="bg-white shadow-lg flex absolute left-[15%] bottom-[7%] flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-[50%]">
                        <div class="-mt-20 ">
                            <img src={ellipse} class="rounded-full " alt="" />
                        </div>
                        <p class="text-center text-sm p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                            purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                        <div class="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                            <h1 class="text-black text-xl font-semibold">-Jeo Stanlee</h1>
                        </div>
                    </div>


                </div>

            </Slider>
            <h1 className="text-left pl-20 mt-7 font-normal text-3xl">Let talk about ypur Dream home</h1>
            <div className="flex justify-evenly py-16">
                <input type="text" name="" id="" placeholder="Name" 
                class="border-b border-gray-500 focus:outline-none  text-gray-500 font-normal text-2xl md:w-72 lg:w-[340px] " />
                <input type="text" name="" id="" placeholder="Phone / Email"
                class="border-b border-gray-500 focus:outline-none  text-gray-500 font-normal text-2xl md:w-72 lg:w-[340px] "  />
                <button className='w-[260px] h-[70px] bg-purple-900 font-semibold text-2xl text-white'>Send</button>
            </div>



        </>
    );
}

export default Costumers