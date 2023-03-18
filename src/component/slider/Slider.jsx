import React, { } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from '../../homeImages/image11.webp'
import blog2 from '../../homeImages/image12.webp'
import blog3 from '../../homeImages/image13.webp'
import blog4 from '../../homeImages/image20.webp'
import blog5 from '../../homeImages/image12.webp'
import Vector from '../../homeImages/vector.svg'
import Vector1 from '../../homeImages/Group6.svg'
import { useRef } from "react";


const MySlider = () => {
  const slider = useRef(null);

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[90%]">
          <h1 className="text-4xl font-medium title-font mb-8 pl-6 text-[#241330] ">Blogs</h1>
          <Slider ref={slider} {...settings}>

            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg    mb-4" src={blog1} />
                <div className="w-full text-start ">
                  <h2 className="title-font font-medium  text-2xl text-[#4B2A63] ">Modular Kitchen</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg  mb-4" src={blog2} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-[#4B2A63]">Exterior Project</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>


                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg  mb-4" src={blog3} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-[#4B2A63]">Grey Beauty</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>

                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg mb-4" src={blog4} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-[#4B2A63]">Plantation interior</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>

                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0  rounded-lg mb-4" src={blog5} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-[#4B2A63]">Role of furnitures</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>

                </div>
              </div>
            </div>
          </Slider>
        </div>
        <button onClick={() => slider?.current?.slickNext()} className=""> <img src={Vector} alt="" /> </button>

      </div>
      <div className='flex justify-center py-16'>
        <button className='px-20 py-5 bg-[#4B2A63] font-semibold text-2xl text-white'>View all</button>
      </div>
     


    </>

  );
}
export default MySlider
