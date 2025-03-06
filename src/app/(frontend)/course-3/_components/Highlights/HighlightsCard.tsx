'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import img1 from '../../_assets/images/industry.svg'
import img2 from '../../_assets/images/learning.svg'
import img3 from '../../_assets/images/guided.svg'
import { CircleCheck } from 'lucide-react'

const HighlightsCard = () => {
  return (
    <div className="relative lg:w-[78%] flex items-center">
      <div className=" flex lg:flex-col lg:gap-3 lg:items-center overflow-x-scroll scroll-smooth space-x-4 scrollbar-hidden">
        {/*============ 1st Box ============= */}
        <div className="bg-white border-2 border-black p-2 w-[90%] lg:w-full sm:h-[400px] lg:h-full rounded-xl flex-shrink-0 lg:flex lg:flex-row-reverse lg:flex-between hover:border-b-4 ">
          <div className="lg:w-[50%] overflow-hidden">
            <Image
              src={img1}
              alt="img"
              width={400}
              height={400}
              className="rounded-sm object-cover w-full sm:h-[300px]"
            />
          </div>
          <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-start lg:items-start lg:p-2 lg:mr-2">
            <h1 className="text-black text-sm lg:text-lg font-semibold mt-2">
              Industry-vetted curriculum
            </h1>
            <p className="text-gray-500 text-[10px] lg:text-[14px] mt-2">
              - With a project-based approach, this program is curated with hours of research and
              collaboration from hiring managers from top tech & product-based companies under the
              data analytics domain.
            </p>
          </div>
        </div>
        {/* ============ 2nd Box ================ */}
        <div className="bg-white border-2 border-black p-2 w-[90%] lg:w-full sm:h-[400px] lg:h-full rounded-xl flex-shrink-0 lg:flex lg:flex-row-reverse lg:flex-between hover:border-b-4 ">
          <div className="lg:w-[50%] overflow-hidden">
            <Image
              src={img2}
              alt="img"
              width={400}
              height={400}
              className="rounded-sm object-cover w-full sm:h-[300px]"
            />
          </div>
          <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-start lg:items-start lg:p-2 lg:mr-2">
            <h1 className="text-black text-sm lg:text-lg font-semibold mt-2">
              Cohort-Based Learning
            </h1>
            <p className="text-gray-500 text-[10px] lg:text-[14px] mt-2">
              Immerse yourself in a collaborative, cohort-based learning environment, prioritizing
              hands-on problem-solving abilities. Enhance your skills within a community that
              flourishes through shared growth.
            </p>
            <div className="flex gap-2 items-center mt-2 text-black">
              <CircleCheck width={80} fill="#FDB034" color="#ffffff" />
              <p className="text-gray-500 text-[10px] lg:text-[14px] mt-2">
                Participate in projects and discussions that tackle real-world challenges, boosting
                your problem-solving skills with collaborative insights.
              </p>
            </div>
            <div className="flex gap-2 items-center mt-2 text-black">
              <CircleCheck width={80} fill="#FDB034" color="#ffffff" />
              <p className="text-gray-500 text-[10px] lg:text-[14px] mt-2">
                Take advantage of a strong support network where peers inspire each other, fostering
                a spirit of growth and shared achievements.
              </p>
            </div>
          </div>
        </div>
        {/* ================ 3rd Box ================ */}
        <div className="bg-white border-2 border-black p-2 w-[90%] lg:w-full sm:h-[400px] lg:h-full rounded-xl flex-shrink-0 lg:flex lg:flex-row-reverse lg:flex-between hover:border-b-4 ">
          <div className="lg:w-[50%] overflow-hidden">
            <Image
              src={img3}
              alt="img"
              width={400}
              height={400}
              className="rounded-sm object-cover w-full sm:h-[300px]"
            />
          </div>
          <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-start lg:items-start lg:p-2 lg:mr-2">
            <h1 className="text-black text-sm lg:text-lg font-semibold mt-2">
              Guided by the Geeks
            </h1>
            <p className="text-gray-500 text-[10px] lg:text-[14px] mt-2">
              Thrive under the mentorship of seasoned industry mentors who impart their vast
              knowledge and insights. Each session is crafted to help you navigate the complexities,
              boosting your confidence as you master the craft. Incorporate advanced techniques and
              strategies from industry gurus keen to share their hidden formulas for excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightsCard
