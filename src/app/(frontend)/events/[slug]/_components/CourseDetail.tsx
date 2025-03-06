import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { placeholderImg } from '@/app/(frontend)/_assets/images'

export default function CourseDetail({ learningOutcomes, image }) {
  return (
    <div className='grid grid-cols-2 mx-10 mt-20 max-lg:grid-cols-1 max-sm:mt-8'>
       {learningOutcomes ? 
      <div>
       
        {/* <div className='space-y-6'> */}
          {/* <h1 className='font-bold text-4xl max-lg:text-center max-xs:text-2xl'>What you will Learn?</h1> */}
          <RichText data={learningOutcomes} className='min-w-full p-0 m-0 list-item list-outside font-serif' />
          {/* <div className='space-y-4 pt-6'> */}
            {/* {Array(4).fill(0).map((_, i) =>
              <div className="flex gap-2" key={i}>
                <div className='h-5 w-5 flex items-center justify-center  rounded-full  bg-secondary'><Check size={12} strokeWidth={4} className='inline   stroke-background' /></div>
                <span className='font-sans text-sm'>Introduction to Data Visualisation</span>
              </div>
            )} */}
          {/* </div> */}
        {/* </div> */}

      </div>:<div className='text-red-500 font-bold'>No Richtext Found</div>
      }
      <div className='max-lg:hidden'>
        <div className='w-[80%] aspect-[258/245] relative bg-primary-50 border-[30px] rounded-2xl border-primary-50 float-end'>
          <Image
            src={image?.url ?? placeholderImg}
            alt={image?.alt ?? "incorrect url image"}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-1280px),192px,420px"
          />
        </div>
      </div>
    </div>
  )
}
