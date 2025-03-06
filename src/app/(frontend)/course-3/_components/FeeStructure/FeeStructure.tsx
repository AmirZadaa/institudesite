import Image from 'next/image'
import React from 'react'
import img from "../../_assets/images/free.webp"
import { CircleCheck } from 'lucide-react'

const FeeStructure = () => {
  return (
    <div className="container mx-auto mt-20 py-4 px-4 lg:px-40">
        <div className=" text-center my-4">
            <h1 className="animate-slide-btt text-[2rem] text-black font-semibold ">
                Fee structure of this program
            </h1>
        </div>
        <div className="flex px-4 mt-8 border border-black border-r-4 border-b-4 rounded-2xl py-2 lg:py-6 text-black">
            <div className="hidden lg:w-[50%] lg:block">
                <Image src={img} alt="img" width={400} height={400} />
            </div>
            <div className="flex flex-col my-7 justify-start lg:gap-2">
                <p className="text-[14px] lg:text-[12px] text-center ml-8 mb-4 lg:mb-0 lg:ml-0 lg:text-start font-medium text-gray-500">Total Program Fee:</p>
                <h1 className="text-2xl lg:text-3xl font-semibold">PKR 24,999/- <del className="text-[1rem] font-medium text-gray-500">PKR 35,000/-</del></h1>
                <ul className="mt-4">
                    <div className="flex mb-2 gap-2 items-center">
                        <CircleCheck fill="#FDB034" color="#ffffff" className='w-5 h-5 lg:w-6 lg:h-6' />
                        <li className="text-[12px]  font-medium text-gray-500"><span className="font-semibold text-gray-700">Live instruction</span> from Industry Veterans</li>
                    </div>
                    <div className="flex mb-2 gap-2 items-center">
                        <CircleCheck fill="#FDB034" color="#ffffff" className='w-5 h-5 lg:w-6 lg:h-6'/>
                        <li className="text-[12px] mb-2 font-medium text-gray-500"><span className="font-semibold text-gray-700">Official certification</span> in Human Resources</li>
                    </div>
                    <div className="flex mb-2 gap-2 items-center">
                        <CircleCheck  fill="#FDB034" color="#ffffff" className='w-5 h-5 lg:w-6 lg:h-6' />
                        <li className="text-[12px] mb-2 font-medium text-gray-500"><span className="font-semibold text-gray-700">Vibrant community</span> just like a College Campus</li>
                    </div>
                    <div className="flex mb-2 gap-2 items-center">
                        <CircleCheck fill="#FDB034" color="#ffffff" className='w-5 h-5 lg:w-6 lg:h-6' />
                        <li className="text-[12px] mb-2 font-medium text-gray-500"><span className="font-semibold text-gray-700">Hand-on curriculum</span> with Real-Life Projects</li>
                    </div>
                </ul>
                <button className="bg-primary-500 p-3 rounded-xl text-white font-semibold  items-center w-32 mt-4 hover:border-r-2 hover:border-b-2">Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default FeeStructure