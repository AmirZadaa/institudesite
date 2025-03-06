import { Play } from 'lucide-react'
import React from 'react'

const CourseOutline = () => {
  return (
    <div className='flex border bg-card rounded-xl p-4 shadow-md gap-4'> 
      <div className='bg-background rounded-full my-auto p-3 h-fit'>
        <Play strokeWidth={3} size={14}/>
      </div>
      <div>
        <h1 className='text-lg'>Introduction</h1>
        <p className='text-primary-200'>Video._min</p>
      </div>
    </div>
  )
}

export default CourseOutline
