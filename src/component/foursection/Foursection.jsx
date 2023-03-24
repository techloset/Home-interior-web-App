import React from 'react'
import p1 from '../../homeImages/image11.webp'
import p2 from '../../homeImages/image17.webp'
import p3 from '../../homeImages/image19.webp'
import p4 from '../../homeImages/image18.webp'

const Foursection = () => {
    return (
        <>

            <div className=" flex   lg:mt-[3.5rem] lg:mx-[6rem]  ml-[45px] md:ml-[130px]  max-lg:flex-col   ">
                <h6 className='font-medium self-start text-4xl text-[#241330] lg:hidden max-lg:block mt-[54px]'>  Our Projects </h6>
                <div className='flex  max-lg:w-[80%] sm:gap-x-6 gap-x-2 mt-[27px]'>
                    <div className='flex flex-col sm:gap-3 gap-2 '>
                        <img src={p1} alt="" height='auto' />
                        <img src={p3} alt="" height='auto' />
                    </div>
                    <div className='flex flex-col sm:gap-y-4 gap-y-2'>
                        <img src={p4} alt="" height='auto' />
                        <img src={p2} alt="" height='auto' />
                    </div>
                </div>
                <div className="lg:w-[997px] max-lg:w-[80%] animate__animated animate__slideInLeft mt-[54px] lg:mt-[80px] right-[5%]  text-black 
                 flex flex-col justify-center items-center text-center lg:absolute  bg-white bg-opacity-80">
                    <h6 className='font-medium self-center text-[#241330] text-4xl lg:block max-lg:hidden mt-[4rem]'>  Our Projects </h6>
                    <p className='font-normal lg:pl-20  text-start lg:text-center text-[15px] sm:text-[18px] lg:mt-[3rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                    <p className='font-normal lg:pl-20  text-start lg:text-center text-[15px] sm:text-[18px] lg:mt-[3rem] mt-[1rem]'> magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                    <button className='sm:px-20 px-14  lg:mb-[48px] whitespace-nowrap py-5 bg-[#4B2A63] font-semibold text-lg lg:text-2xl text-white mt-[39px]'>View all</button>
                </div>
            </div>





        </>
    )
}

export default Foursection