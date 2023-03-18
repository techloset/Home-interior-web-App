// import React from 'react'
// import Facebook from '../../homeImages/facebook.svg'
// import Linkedin from '../../homeImages/linkedin.svg'
// import Twitter from '../../homeImages/twitter.svg'
// import Youtube from '../../homeImages/youtube.svg'
// import Instagram from '../../homeImages/insta.svg'
// // import Footerlogo from '../../homeImages/footerlogo.svg'
// import artboard from '../../homeImages/Artboard22.webp'




// const Footer = () => {
//   return (
//     <>
//     <footer className="text-[#3D3D3D] body-font bg-gray-100 flex justify-evenly pt-12 pb-6" >
//                 {/* <div className=" px-5 py-24 mx-auto text-left flex  md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"> */}
//                     <div className="w-[27%]">
//                         {/* <a className="flex title-font font-medium items-center md:justify-start  justify-start cursor-pointer"> */}
//                             <img src={artboard} alt="" className='pr-5' />
//                         {/* </a> */}
//                         <p className="mt-2 text-sm leading-7 text-[#3D3D3D] lg:block max-lg:hidden"> We introduce our selves as  LAND Interior and Architectural Design Consultancy –
//                          one of the best interior designers in Chennai. Chennai Luxury Interior and Architectural Design Consultancy
//                           has challenged the conventional way of interior designing and given new dimensions
//                            to the art of interior designing.</p>
//                             <div className='flex flex-row gap-2 mt-3'>
//                                 <img src={Facebook} alt="" />
//                                 <img src={Linkedin} alt="" />
//                                 <img src={Twitter} alt="" />
//                                 <img src={Youtube} alt="" />
//                                 <img src={Instagram} alt="" />
//                             </div>
//                     </div>
//                     {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"> */}
//                         <div className="lg:w-1/4 md:w-1/2 w-full px-24 py-16 max-sm:hidden">
//                             <h2 className="  font-semibold text-gray-700 tracking-widest text-base mb-3">WHAT WE DO</h2>
//                             <nav classNameName="list-none ">
//                                 <div className='mt-10 '>

//                                 <ol>
//                                     <a className="text-[#4F4F4F] leading-10 font-medium text-lg hover:text-gray-700">Interior Design</a>
//                                 </ol>
//                                 <ol>
//                                     <a className="text-[#4F4F4F] leading-10  font-medium text-lg hover:text-[#4F4F4F]">Kitchen</a>
//                                 </ol>
//                                 <ol>
//                                     <a className="text-[#4F4F4F] leading-10 font-medium text-lg hover:text-[#4F4F4F]">Ceiling</a>
//                                 </ol>
//                                 <ol>
//                                     <a className="text-[#4F4F4F] leading-10  font-medium text-lg hover:text-[#4F4F4F]">Bedroom</a>
//                                 </ol>
//                                 <ol>
//                                     <a className="text-[#4F4F4F] leading-10 font-medium text-lg hover:text-[#4F4F4F]">Smart Home</a>
//                                 </ol>
//                                 </div>
//                             </nav>
//                         </div>
//                         <div className="lg:w-1/4  md:w-1/2 w-full px-4 py-16">
//                             <h2 className="font-semibold text-#4F4F4F tracking-widest text-base mb-3">Get in touch</h2>
//                             <nav classNameName="list-none mb-10 text-sm sm:flex flex-col">
//                                 <div className='mt-10'>

//                                 <ol>
//                                     <a className="text-[#4F4F4F] leading-10 font-medium text-lg hover:text-[#4F4F4F]">landinteriors@gmail.com</a>
//                                 </ol>
//                                 <ol>
//                                     <a className="text-[#4F4F4F] leading-10 font-medium text-lg hover:text-[#4F4F4F]">+91 98987 65656</a>
//                                 </ol>
//                                 </div>
//                             </nav>
//                         </div>
//                     {/* </div> */}
//                 {/* </div> */}

//             </footer>

//     </>
//   )
// }

// export default Footer


import React from 'react'
// import webLogo from "./Artboard 22 2.png";
// import logo1 from "./akar-icons_twitter-fill.png";
// import logo2 from "./ant-design_youtube-filled.png";
// import logo3 from "./brandico_facebook-rect.png";
// import logo4 from "./bx_bxl-instagram.png";
// import logo5 from "./brandico_linkedin-rect.png";
import Facebook from '../../homeImages/facebook.svg'
import Linkedin from '../../homeImages/linkedin.svg'
import Twitter from '../../homeImages/twitter.svg'
import Youtube from '../../homeImages/youtube.svg'
import Instagram from '../../homeImages/insta.svg'
import artboard from '../../homeImages/Artboard22.webp'
import { Link } from 'react-router-dom';
// import logo5 from "./akar-icons_twitter-fill.png";

const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] flex   justify-center max-lg:items-center max-xl:gap-20 xl:gap-28 p-5 lg:h-[auto] ' >
            <ul className='w-1/3 flex flex-col gap-10 sm:gap-20 sm:py-3 '>
                <li><img src={artboard} className='max-lg:pl-[20%] 
                max-sm:pl-[30%] max-md:pb-6' alt="" /></li>

                <li className='max-lg:hidden text-[#3D3D3D] font-normal text-[18px]'><p>We introduce our 
                    selves as  LAND Interior and Architectural Design Consultancy - 
                    one of the best interior designers in Chennai. Chennai Luxury 
                    Interior and Architectural Design Consultancy has challenged 
                    the conventional way of interior designing and given new
                     dimensions to the art of interior designing.</p></li>
                <li className='flex sm:gap-3 max-md:pt-10 '>
                    <img src={Facebook} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Instagram} alt="" />

                </li>
            </ul>
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
                <li className='max-lg:absolute max-lg:text-center max-lg:left-[32%]  max-lg:right-[50%] text-[#4F4F4F] text-[18px] font-medium' >
                    <li>
                        landinteriors@gmail.com
                    </li>
                    <li className='whitespace-nowrap'>
                        +91 98987 65656
                    </li>
                    <ul className='flex gap-10  max-lg:hidden mb-[10%] mt-[25%]'>
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