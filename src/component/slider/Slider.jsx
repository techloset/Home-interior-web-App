import React, { } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import blog1 from '../../homeImages/blog_iop.svg'
import blog2 from '../../homeImages/blog_yui.svg'
import blog3 from '../../homeImages/blog_rty.svg'
import blog4 from '../../homeImages/blog_qwe.svg'
import blog5 from '../../homeImages/blog_nmv.svg'
import { useRef } from "react";


const MySlider = () => {
  const slider = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <>
      <div className="flex justify-center ">

        <div className="w-[90%]">
          <h1 className="text-4xl font-medium title-font mb-8 pl-6 text-gray-900">Blogs</h1>
          <Slider ref={slider} {...settings}>

            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg    mb-4" src={blog1} />
                <div className="w-full text-start ">
                  <h2 className="title-font font-medium  text-2xl text-black">Modular Kitchen</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg  mb-4" src={blog2} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-black">Exterior Project</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>


                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg  mb-4" src={blog3} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-black">Grey Beauty</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>

                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg mb-4" src={blog4} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-black">Plantation interior</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>

                </div>
              </div>
            </div>
            <div className=" lg:w-1/4 md:w-1/2 px-4">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg mb-4 w-[100%] h-[275px]" src={blog5} />
                <div className="w-full text-start">
                  <h2 className="title-font font-medium  text-2xl text-black ">Plantation interior</h2>
                  <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>

                </div>
              </div>
            </div>





          </Slider>
        </div>

      </div>
      <div className="relative">
        <button onClick={() => slider?.current?.slickPrev()}><img src="img/vector 2.svg" alt="" className="relative bottom-[290px]" /></button>
        <button onClick={() => slider?.current?.slickNext()}> <img src="img/vector 1.svg" alt="" className="absolute bottom-[290px] left-[98.5%] " /> </button>
      </div>

      <div className='flex justify-center py-16'>
        <button className='w-[270px] h-[80px] bg-purple-900 font-semibold text-2xl text-white'>View all</button>
      </div>



    </>

  );
}
export default MySlider
