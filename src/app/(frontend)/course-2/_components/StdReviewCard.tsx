'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { RanaAjmal } from '@/app/(frontend)/_assets/images'

interface StdReviewCardProps {
  name: string
  course: string
  review: string
  image: string
}

const StdReviewCard = ({ name, course, review, image }: StdReviewCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='border-2 p-2 border-primary-400 border-dotted rounded-lg text-justify'>
      <p className={`${!isExpanded && 'line-clamp-4'}`}>
        {review}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className='text-primary-600 hover:text-primary-800 text-sm mt-2'
      >
        {isExpanded ? 'See Less' : 'See More'}
      </button>
      <div className='flex gap-3 mt-4'>
        <div className='relative w-16 h-16'>
            <Image
              alt='student'
              src={RanaAjmal}
              fill
              sizes='190px'
              className='object-cover rounded-full min-w-16'
            />
        </div>
        <div className='my-auto text-start'>

            <h1 className='text-primary text-lg font-semibold'>{name}</h1>
            <h2>{course}</h2>

        </div>
      </div>
    </div>
  )
}

export default StdReviewCard
