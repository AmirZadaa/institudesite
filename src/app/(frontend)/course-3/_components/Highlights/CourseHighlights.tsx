import React from 'react'
import HighlightsCard from './HighlightsCard'

const CourseHighlights = ({title}: any) => {
  return (
    <div className="container mx-auto bg-background">
      <div className="py-4">
        <div className="animate-slide-btt text-center my-4">
          <h1 className="text-[2rem] [line-height: 48px] text-center font-semibold">
            {title} Course Highlights
          </h1>
          <p className="text-[14px] font-medium text-gray-700 mt-2">
            Highlighting the Best Course Features.
          </p>
        </div>
        <div className="mx-2 flex gap-4 sticky">
          <div className="hidden lg:flex flex-col gap-2 justify-start w-[22%] h-44">
            <div className="bg-transparent hover:border-r-4 hover:outline-2 hover:bg-[#FDB034] px-5 py-4  rounded-xl mt-4">
              <span className="text-[14px] font-semibold text-black">
                Industry-vetted curriculum
              </span>
            </div>
            <div className="bg-transparent hover:border-r-4 hover:outline-2 hover:bg-[#FDB034] px-5 py-4  rounded-xl mt-4">
              <span className="text-[14px] font-semibold text-black">Cohort-Based Learning</span>
            </div>
            <div className="bg-transparent hover:border-r-4 hover:outline-2 hover:bg-[#FDB034] px-5 py-4  rounded-xl mt-4">
              <span className="text-[14px] font-semibold text-black">Guided by the Geeks</span>
            </div>
          </div>
          <HighlightsCard />
        </div>
      </div>
    </div>
  )
}

export default CourseHighlights
