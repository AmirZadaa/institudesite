import { ClipboardCheck, Goal, GraduationCap, PencilLine } from 'lucide-react'
import React from 'react'

const Working = ({title}: any) => {
  return (
    <div className='container mx-auto  text-white lg:pt-20'>
        <div className="p-4 flex flex-col lg:flex-row items-center">
            <div className='animate-slide-ltr lg:w-[40%] flex flex-col justify-center items-center lg:justify-center lg:items-start lg:pr-32'>
                <h1 className='text-[32px] [line-height: 48px] font-semibold text-center text-black lg:text-start'>How Does This {title} Course Work?</h1>
                <button className="hidden lg:block bg-primary-500 p-4 rounded-xl text-white font-medium items-start w-40 my-4 hover:border-r-2 hover:border-b-2">Apply Now</button>
            </div>
            <div className='lg:w-[60%] flex flex-col cursor-pointer gap-0 mt-10 lg:mt-0'>
                {/* 1st Box */}
                <div className='border-dashed border-t border-l group border-b border-gray-500 m-0 py-8  hover:bg-gradient-to-r from-blue-100 to-blue-0 duration-300 ease-in-out'>
                    <div className="animate-slide-rtl flex flex-col lg:flex-row gap-5 lg:ml-10 lg:justify-start text-center lg:text-start items-center justify-center text-black lg:w-[80%]">
                        <GraduationCap  className='w-14 h-14 lg:w-16 lg:h-16 group-hover:text-primary-500' />
                        <div className='flex flex-col lg:flex-col lg:items-start gap-2 items-center'>
                            <div className='flex  gap-3 items-center' >
                                <h1 className="text-2xl font-bold">Learn</h1>
                                <span className="flex bg-yellow-300 rounded-xl py-1 px-2 text-[10px] font-medium gap-1">
                                    Live Classes 
                                    <li className='ml-2'>Self-Spaced</li>
                                </span>
                            </div>
                            <p className="text-[14px] font-medium text-gray-700">
                                Upskill yourself by gaining insights from leading professionals&apos; vast experience.
                            </p>
                        </div>
                    </div>
                </div>
                {/* 2nd Box */}
                <div className='border-dashed border-r group border-b m-0 border-gray-500 py-8 flex flex-col  lg:flex-row gap-2 lg:justify-start items-center justify-center text-black hover:bg-gradient-to-l from-blue-100 to-blue-0 duration-300 ease-in-out'>
                    <div className="animate-slide-ltr  flex flex-col lg:ml-24 lg:flex-row gap-5 lg:justify-start text-center lg:text-start items-center  justify-center text-black lg:w-[80%]">
                        <PencilLine  className='w-14 h-14 lg:w-16 lg:h-16 group-hover:text-primary-500' />
                        <div className='flex flex-col lg:flex-col lg:items-start gap-2 items-center'>
                            <div className='items-center' >
                                <h1 className="text-2xl font-bold">Practice</h1>
                            </div>
                            <p className="text-[14px] font-medium text-gray-700">
                                Sharpen your skills by learning through course assignments, live projects, and regular assessments and quizzes.
                            </p>
                        </div>
                    </div>
                </div>
                {/* 3rd Box */}
                <div className='border-dashed border-l group border-b m-0 border-gray-500 py-8 flex flex-col  lg:flex-row gap-2 lg:justify-start items-center justify-center text-black hover:bg-gradient-to-r from-blue-100 to-blue-0 duration-300 ease-in-out'>
                <div className="animate-slide-rtl flex flex-col lg:ml-10 lg:flex-row gap-5 lg:justify-start text-center lg:text-start items-center justify-center text-black lg:w-[80%]">
                        <ClipboardCheck className='w-14 h-14 lg:w-16 lg:h-16 group-hover:text-primary-500' />
                        <div className='flex flex-col lg:flex-col lg:items-start gap-2 items-center'>
                            <div className='items-center' >
                                <h1 className="text-2xl font-bold">Ask</h1>
                            </div>
                            <p className="text-[14px] font-medium text-gray-700">
                                Resolve your queries from industry experts with our dedicated one-to-one doubt-clearing sessions.
                            </p>
                        </div>
                    </div>
                </div>
                {/* 4th Box */}
                <div className='border-dashed border-r group border-b m-0 border-gray-500 py-8 flex flex-col  lg:flex-row gap-2 lg:justify-start items-center justify-center text-black hover:bg-gradient-to-l from-blue-100 to-blue-0 duration-300 ease-in-out'>
                <div className="animate-slide-ltr flex flex-col lg:ml-24 lg:flex-row gap-5 lg:justify-start text-center lg:text-start items-center justify-center text-black lg:w-[80%]">
                        <Goal  className='w-14 h-14 lg:w-16 lg:h-16 group-hover:text-primary-500' />
                        <div className='flex flex-col lg:flex-col lg:items-start gap-2 items-center'>
                            <div className='items-center' >
                                <h1 className="text-2xl font-bold">Build</h1>
                            </div>
                            <p className="text-[14px] font-medium text-gray-700">
                                Craft a diverse portfolio and appealing resume, and optimize LinkedIn to showcase your data analytics skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="lg:hidden bg-primary-500 p-4 rounded-xl text-white font-medium items-center w-40 my-4 hover:border-r-2 hover:border-b-2">Apply Now</button>
        </div>
    </div>
  )
}

export default Working