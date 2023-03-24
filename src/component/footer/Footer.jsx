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



// import React from 'react'

// import Facebook from '../../homeImages/facebook.svg'
// import Linkedin from '../../homeImages/linkedin.svg'
// import Twitter from '../../homeImages/twitter.svg'
// import Youtube from '../../homeImages/youtube.svg'
// import Instagram from '../../homeImages/insta.svg'
// import artboard from '../../homeImages/Artboard22.webp'

// const Footer = (props) => {
//     return (
//         <div className='bg-[#F8F8F8]' id='footer'>
//             <div className='flex   pt-[63px] max-lg:pt-[37px] pb-[50px] max-lg:pb-[33px]'>
//                 <div className='ml-[200px] max-lg:mx-auto max-xl:ml-[100px]'   >
//                     <div className='flex justify-center lg:justify-start'>
//                         <img src={artboard} alt="" /><br />
//                     </div><br />
//                     <div className='text-center lg:hidden '>
//                     <ul className=' mb-6'>
//                         <li>hafizmudusar37@gmail.com</li>
//                         <li>+927487 78797989</li>
//                     </ul>
//                     </div>
//                     <div className='max-lg:hidden'>

//                         <h1 className='ml-8 text-[18px] font-[400] text-[#3D3D3D]'>We introduce our selves as  LAND Interior and <br />
//                             Architectural Design Consultancy – one of the
//                             <br /> best interior designers in Chennai.
//                             <br /> Chennai Luxury Interior and Architectural Design
//                             <br /> Consultancy has challenged the conventional <br />
//                             way of interior designing and given new <br />
//                             dimensions to the art of interior designing.   </h1><br />
//                     </div>
//                     <div className='flex gap-7 items-center ml-8'>
//                         <div>

//                             <img src={Facebook} alt="" />
//                         </div>
//                         <div>

//                             <img src={Linkedin} alt="" />
//                         </div>
//                         <div>

//                             <img src={Twitter} alt="" />
//                         </div>
//                         <div>

//                             <img src={Youtube} alt="" />
//                         </div>
//                         <div>

//                             <img src={Instagram} alt="" />
//                         </div>
//                     </div>

//                 </div>
//                 <div className='max-lg:hidden ml-[248px] max-xl:ml-[100px]'>
//                     <br /> <br />
//                     <h1 className='text-xl font-[600] text-[#4F4F4F]'>WHAT WE DO</h1>
//                     <br /><br />
//                     <ul className='text-[18px] font-[500] text-[#4F4F4F]'>
//                         <li>Interior Design</li>
//                         <li>Kitchen</li>
//                         <li>Ceiling</li>
//                         <li>Bedroom</li>
//                         <li>Smart Home</li>
//                     </ul>

//                 </div>

//                 <div className='max-lg:hidden ml-[275px] max-xl:ml-[150px]'>
//                     <br /><br />
//                     <h1 className='text-xl font-[600] text-[#4F4F4F]'>
//                         Get in touch
//                     </h1>
//                     <br /><br />
//                     <ul className='text-[18px] font-[500] text-[#4F4F4F]'>
//                         <li>hafizmudusar37@gmail.com</li>
//                         <li>+927487 78797989</li>
//                     </ul>
//                     <br /><br /><br />
//                     <div className=' flex justify-center mt-10 pb-12' >
//                         <ul className='flex gap-x-[83px] flex-wrap text-[18px] text-[#4F4F4F]' >
//                             <li>About</li>
//                             <li>Projects</li>
//                             <li>Studio</li>
//                             <li>Blog</li>
//                             <li>Contact</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer