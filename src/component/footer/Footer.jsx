import React from 'react'
import Facebook from '../../homeImages/facebook.svg'
import Linkedin from '../../homeImages/linkedin.svg'
import Twitter from '../../homeImages/twitter.svg'
import Youtube from '../../homeImages/youtube.svg'
import Instagram from '../../homeImages/insta.svg'
import Footerlogo from '../../homeImages/footerlogo.svg'



const Footer = () => {
  return (
    <>
    <footer className="text-gray-700 body-font bg-gray-100 flex justify-evenly pt-12 pb-6" >
                {/* <div className=" px-5 py-24 mx-auto text-left flex  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"> */}
                    <div className="w-[27%]">
                        {/* <a className="flex title-font font-medium items-center md:justify-start  justify-start cursor-pointer"> */}
                            <img src={Footerlogo} alt="" className='pr-5' />
                        {/* </a> */}
                        <p className="mt-2 text-sm leading-7 text-gray-400"> We introduce our selves as  LAND Interior and Architectural Design Consultancy –
                         one of the best interior designers in Chennai. Chennai Luxury Interior and Architectural Design Consultancy
                          has challenged the conventional way of interior designing and given new dimensions
                           to the art of interior designing.</p>
                            <div className='flex flex-row gap-2 mt-3'>
                                <img src={Facebook} alt="" />
                                <img src={Linkedin} alt="" />
                                <img src={Twitter} alt="" />
                                <img src={Youtube} alt="" />
                                <img src={Instagram} alt="" />
                            </div>
                    </div>
                    {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"> */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-24 py-16 max-sm:hidden">
                            <h2 className="  font-semibold text-gray-700 tracking-widest text-base mb-3">WHAT WE DO</h2>
                            <nav classNameName="list-none ">
                                <div className='mt-10 '>

                                <ol>
                                    <a className="text-gray-700 leading-10 font-medium text-lg hover:text-gray-700">Interior Design</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-700 leading-10  font-medium text-lg hover:text-gray-700">Kitchen</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-700 leading-10 font-medium text-lg hover:text-gray-700">Ceiling</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-700 leading-10  font-medium text-lg hover:text-gray-700">Bedroom</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-700 leading-10 font-medium text-lg hover:text-gray-700">Smart Home</a>
                                </ol>
                                </div>
                            </nav>
                        </div>
                        <div className="lg:w-1/4  md:w-1/2 w-full px-4 py-16">
                            <h2 className="font-semibold text-gray-700 tracking-widest text-base mb-3">Get in touch</h2>
                            <nav classNameName="list-none mb-10 text-sm sm:flex flex-col">
                                <div className='mt-10'>

                                <ol>
                                    <a className="text-gray-700 leading-10 font-medium text-lg hover:text-gray-700">landinteriors@gmail.com</a>
                                </ol>
                                <ol>
                                    <a className="text-gray-700 leading-10 font-medium text-lg hover:text-gray-700">+91 98987 65656</a>
                                </ol>
                                </div>
                            </nav>
                        </div>
                    {/* </div> */}
                {/* </div> */}

            </footer>

    </>
  )
}

export default Footer