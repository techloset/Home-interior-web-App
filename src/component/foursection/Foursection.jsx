import React from 'react'
import p1 from '../../homeImages/project_ghj.svg'
import p2 from '../../homeImages/project_xyz.svg'
import p3 from '../../homeImages/project_jkk.svg'
import p4 from '../../homeImages/project_asd.svg'

const Foursection = () => {
    return (
        <>

            <div className=" flex w-[100%]  py-14  md:flex-row flex-col items-center  ">
                <div className='flex  gap-x-6'>

                    <div className='flex flex-col gap-3 '>
                        <img src={p1} alt="" className='w-[377px] h-[379px]' />
                        <img src={p3} alt="" className='w-[382px] h-[189px]' />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <img src={p2} alt="" className='w-[382px] h-[189px]' />

                        <img src={p4} alt="" className='w-[378px] h-[373px]' />
                    </div>
                </div>
                <div className="w-[44%] h-[82%] text-black  flex justify-center absolute right-[1.8%] gap-2 bg-white bg-opacity-80    flex-col md:items-start md:text-left items-center text-center">
                    <h6 className='text-center font-medium pl-[35%] pb-14 text-4xl'>  Our Projects </h6>

                    <div className='flex flex-col justify-center items-center text-center w-[100%] pl-[15%] gap-9'>
                        <div className='font-normal text-md text-black'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                                porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        </div>
                        <div className=' font-normal text-md text-black'>
                            <p > magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                                elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        </div>
                        <div className='gap-9'>
                            <button className='w-[270px] h-[80px] bg-purple-900 font-semibold text-2xl text-white'>View all</button>
                        </div>
                    </div>
                </div>


                {/* <div className="w-[70%%] h-[89%]   flex    gap-2 bg-gray-500 bg-opacity-80    flex-col md:items-start md:text-left items-center text-center"> */}
                {/* <h6 className='text-center font-medium pl-[35%] pb-14 text-4xl'> Our Projects</h6>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                         lectus magna fringilla urna, porttitor
                         rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                </div> */}

                {/* <div className='flex flex-col justify-center items-center text-center w-[80%] pl-[20%] gap-9'>
                    <div >
                        <h1 className='text-3xl text-purple-900 font-semibold '>Explore</h1>
                        <p>Explore more than just modular design ideas with our experts.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-purple-900 font-semibold'>Design</h1>
                        <p>Complete the designs with painting, flooring and other decor solutions</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-purple-900 font-semibold'>Move-in</h1>
                        <p>Move in with ease, with our hassle-free civil work and installation services.</p>
                    </div>
                </div> */}
                {/* </div> */}
            </div>





        </>
    )
}

export default Foursection