import React, { } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog5 from '../../homeImages/image20.webp'
import blog2 from '../../homeImages/image12.webp'
import blog3 from '../../homeImages/image13.webp'
import blog4 from '../../homeImages/image14.webp'
// import blog4 from '../../homeImages/image20.webp'
// import blog1 from '../../homeImages/image21.webp'
import Vector from '../../homeImages/vector.svg'
import Vector1 from '../../homeImages/Group6.svg'
import { useRef } from "react";


const MySlider = () => {
  const slider = useRef(null);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <div className="overflow-hidden relative">
        <h1 className="text-4xl font-medium  mb-8 md:pl-[4rem] sm:ml-[4rem] ml-[3rem] text-[#241330] mt-[4.8rem] lg:mt-[6rem]">Blogs</h1>
        <Slider ref={slider} {...settings} className="w-[100%] md:pl-[4rem] sm:ml-[4rem] ml-[3rem]">

          <div>
            <div className="  mr-[3.4375rem]">
              <img alt="team" className="rounded-lg mb-4" src={blog5} />
              <div className=" text-start ">
                <h2 className="title-font font-medium  text-2xl text-[#000000]">Modern Interior</h2>
                <p className="pt-4 text-[#000000] text-[17px] ">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,</p>
              </div>
            </div>
          </div>
          <div>
            <div className="  mr-[3.4375rem]">
              <img alt="team" className=" rounded-lg  mb-4" src={blog2} />
              <div className="w-full text-start">
                <h2 className="title-font font-medium  text-2xl text-[#000000]">Exterior Project</h2>
                <p className="pt-4 text-[#000000] text-[17px]">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,</p>
              </div>
            </div>
          </div>
          <div>
            <div className="  mr-[3.4375rem]">
              <img alt="team" className=" rounded-lg  mb-4" src={blog3} />
              <div className="w-full text-start">
                <h2 className="title-font font-medium  text-2xl text-[#000000]">Grey Beauty</h2>
                <p className="pt-4 text-[#000000] text-[17px]">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,</p>
              </div>
            </div>
          </div>
          <div>

            <div className="  mr-[3.4375rem]">
              <img alt="team" className=" rounded-lg mb-4" src={blog4} />
              <div className="w-full text-start">
                <h2 className="title-font font-medium  text-2xl text-[#000000]">Plantation interior</h2>
                <p className="pt-4 text-[#000000] text-[17px]">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,</p>
              </div>
            </div>

          </div>
          <div>
            <div className="  mr-[3.4375rem]">
              <img alt="team" className="  rounded-lg mb-4" src={blog5} />
              <div className="w-full text-start">
                <h2 className="title-font font-medium  text-2xl text-[#000000]">Role of furnitures</h2>
                <p className="pt-4 text-[#000000] text-[17px]">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,</p>
              </div>
            </div>
          </div>
          <div>
            <div className="  mr-[3.4375rem]">
              <img alt="team" className="  rounded-lg mb-4" src={blog5} />
              <div className="w-full text-start">
                <h2 className="title-font font-medium  text-2xl text-[#000000]">Role of furnitures</h2>
                <p className="pt-4 text-[#000000] text-[17px]">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,</p>
              </div>
            </div>
          </div>
        </Slider>
        <button onClick={() => slider?.current?.slickNext()} className="absolute right-0 bottom-[40%]"> <img src={Vector} alt="" /> </button>
      </div>


      <div className='flex justify-center py-16 max-lg:hidden'>
        <button className='px-20 py-5 bg-[#4B2A63] font-semibold text-2xl text-white'>View all</button>
      </div>



    </>

  );
}
export default MySlider
