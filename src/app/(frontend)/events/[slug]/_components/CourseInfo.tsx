'use client'
import React,{useState} from 'react'
import { learning, placeholderImg } from '@/app/(frontend)/_assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { EventModel } from './EventModel'
import { masterClassBenefits } from '@/app/(frontend)/_constants/data'


export default function CourseInfo({eventId,slug}) {
   const [isOPenModel,setIsOpenModel] = useState(false)
  return (
    <div className="grid grid-cols-2 max-xl:grid-cols-1  bg-primary-100 xl:p-8   xl:h-[30rem] mb-10">
      <div className="flex flex-col  text-center xl:text-start justify-center space-y-4 max-xl:py-10 max-lg:px-2 max-xl:space-y-8">
        <h1 className="text-5xl font-semibold max-xs:text-2xl xl:leading-[4rem] leading-[4rem] max-sm:leading-[3rem]  ">
          Why Join NexusBerry <br className="xl:hidden " />
          Masterclasses?
        </h1>
        <p className="xl:text-justify text-center text-sm  max-xl:w-[70%] max-xl:mx-auto">
          Engage in unique learning opportunities from industry leaders through simple, accessible
          sessions designed to empower your career. Learn through practical experiences that
          transform theory into real-world skills in just a few hours! Discover the joy of mastering
          new tools and concepts that could launch your next career leap!
        </p>
        <Link
          href="#"
          aria-label="register yourself"
          className="max-lg:mx-auto max-lg:w-1/2 max-sm:w-full pt-20"
        >
          <Button onClick={()=> setIsOpenModel(true)} className="bg-primary-400  w-fit max-lg:w-full max-lg:mx-auto hover:bg-primary-400 font-bold py-8 px-8 rounded-xl hover:shado-1px-4px-0px-rgb hover:shadow-[4px_4px_0px_rgba(181,20,36,0.9)] duration-300">
            Register for free!!
          </Button>
        </Link>
      </div>
      <div className="max-xl:grid gap-2 grid-flow-col   overflow-x-auto max-xl:pb-8 xl:pr-4 ">
        {masterClassBenefits &&
          masterClassBenefits
          .map((masterClassBenefit, index) => (
            <div
              key={index}
              className="bg-card w-[23rem] xl:w-[80%] sticky top-0 xl:mb-56  shadow-[5px_5px_0px_rgba(0,0,0,0.9)]  rounded-[20px] py-6 px-6 xl:float-end  hover:shadow-none  space-y-2 "
            >
              <div className="w-56 relative aspect-[178/115]">
                <Image
                  fill
                  src={masterClassBenefit?.img ?? placeholderImg}
                  alt={masterClassBenefit.title}
                  className="rounded-xl"
                  sizes="217px"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 pb-5">
                <h2 className="text-[18px] font-semibold ">{masterClassBenefit.title}</h2>
                <p className="text-sm ">
                   {masterClassBenefit.description}
                </p>
              </div>
            </div>
          ))}
      </div>
       {
             isOPenModel && 
            <EventModel setIsOpenModel = {setIsOpenModel} eventId = {eventId} slug = {slug} />
            }
    </div>
  )
}
