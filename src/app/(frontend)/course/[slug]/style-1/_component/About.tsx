import RichText from '@/components/RichText'
import React from 'react'

const About = ({ learningOutcomes }) => {
  

  return (
    <div className="padding-y padding-x bg-card lg:border max-lg:border-y max-lg:shadow-none shadow-md lg:rounded-xl space-y-4 max-sm:space-y-2">
      {learningOutcomes ? (
        <RichText data={learningOutcomes} className="px-0 mx-0 min-w-full font-serif" />
      ) : (
        <h1 className='text-red-400'>No Text Found</h1>
      )}
    </div>
  )
}

export default About
