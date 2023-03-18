import React from 'react'
import dokitchen from '../../homeImages/image3.webp'
import dobedroom from '../../homeImages/image4.webp'
import doliveroom from '../../homeImages/image8.webp'
import dooffice from '../../homeImages/image9.webp'

const Herothird = () => {
    return (
        <>


            <section >
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center sm:text-center md:px-8 lg:text-center w-full mb-20">
                        <h1 className="text-4xl font-medium animate__animated animate__wobble title-font mb-4 text-[#000000]">What we do?</h1>
                    </div>
                    <div className="flex flex-wrap max-md:justify-center">
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg  h-[75%] w-[84%] object-cover object-center mb-4" src={dokitchen} />
                                <div className="w-full">
                                    <h2 className="title-font font-semibold text-2xl text-[#4B2A63]">Modular Kitchen</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg h-[75%] w-[84%] object-cover object-center mb-4" src={dobedroom} />
                                <div className="w-full">
                                    <h2 className="title-font font-semibold text-2xl text-[#4B2A63]">Bedroom</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg h-[75%] w-[84%] object-cover object-center mb-4" src={doliveroom} />
                                <div className="w-full">
                                    <h2 className="title-font font-semibold text-2xl text-[#4B2A63]">Living room</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg h-[75%] w-[84%] object-cover object-center mb-4" src={dooffice} />
                                <div className="w-full">
                                    <h2 className="title-font font-semibold text-2xl text-[#4B2A63]">Henry Letham</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-center mx-auto w-[64%] hidden sm:block  font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                         porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                   
                </div>

            </section>

        </>
    )
}

export default Herothird