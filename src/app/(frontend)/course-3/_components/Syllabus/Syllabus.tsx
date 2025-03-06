import { BookOpen, Clock4, PanelsTopLeft, Repeat } from 'lucide-react'
import React from 'react'
import SyllabusCard from './SyllabusCard'
import Image from 'next/image'

const Syllabus = ({title, duration, projects, totalLectures}: any) => {
  return (
    <div className="container mx-auto bg-background text-card pt-12">
      <div className="p-4 flex flex-col">
        {/* 1st Part */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-4      lg:gap-20">
          <div className="animate-slide-btt flex flex-col justify-start items-start">
            <h1 className="text-[30px] text-black font-semibold text-center lg:text-start">
              {title} Course Syllabus
            </h1>
            <p className="text-[14px] font-medium text-center lg:text-start text-gray-700 mt-2">
              A detailed overview of the course, including key topics, objectives, and module
              sequence.
            </p>
          </div>
          <button className="bg-primary-500 p-4 rounded-xl text-white font-semibold items-start w-40t-4 mb-4 hover:border-r-2 hover:border-b-2">
            Download Curriculum
          </button>
        </div>
        {/* 2nd Part */}
        <div className="text-black flex w-full mt-10 lg:mt-16 items-center justify-center relative">
          <div className="border border-black grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2 w-full lg:w-[80%] rounded-xl lg:rounded-full py-4 pl-8 lg:py-6 lg:px-12">
            <div>
              <span className="flex gap-2 text-gray-500 text-sm lg:text-base items-center">
                <Clock4 className="w-4" /> Duration
              </span>
              <h2 className="text-lg lg:text-xl font-semibold">{duration} Weaks</h2>
            </div>
            <div>
              <span className="flex gap-2 text-gray-500 text-sm lg:text-base items-center">
                <Repeat className="w-4" /> Mode
              </span>
              <h2 className="text-lg lg:text-xl font-semibold ">Online</h2>
            </div>
            <div>
              <span className="flex gap-2 text-gray-500 text-sm lg:text-base items-center">
                <BookOpen className="w-4" /> Live Sessions
              </span>
              <h2 className="text-lg lg:text-xl font-semibold ">{totalLectures}+ Lectures</h2>
            </div>
            <div>
              <span className="flex gap-2 text-gray-500 text-sm lg:text-base items-center">
                <PanelsTopLeft className="w-4" /> Projects
              </span>
              <h2 className="text-lg lg:text-xl font-semibold ">{projects}+</h2>
            </div>
          </div>
          <div className="absolute top-8 right-[197px]">
            <Image
              src="https://deen3evddmddt.cloudfront.net/images/courses-details/with-smile-img.svg"
              alt="with"
              width={200}
              height={200}
              className="hidden lg:block w-3/4 h-3/4 rounded-full"
            />
          </div>
          <div className="absolute bottom-0 right-[8rem]">
            <Image
              src="https://deen3evddmddt.cloudfront.net/images/courses-details/placement-img.svg"
              alt="with"
              width={90}
              height={90}
              className="hidden lg:block  rounded-full"
            />
          </div>
          <div className="hidden lg:flex lg:justify-end border border-black lg:w-[20%] rounded-full lg:px-0 lg:py-6 bg-gradient-to-br from-blue-50 to-blue-300 overflow-hidden">
            <h1 className="text-lg font-semibold ml-20 w-[50%]">
              Placement Support <span className="border border-white rounded-full"> &#128525;</span>
            </h1>
          </div>
        </div>
        {/* 3rd Part */}

        <SyllabusCard />
      </div>
    </div>
  )
}

export default Syllabus
