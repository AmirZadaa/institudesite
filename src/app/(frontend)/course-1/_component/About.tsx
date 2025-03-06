import RichText from '@/components/RichText'
import React from 'react'

const About = ({learningOutcomes}: any) => {
  return (
    <div 
    className='padding-x padding-y bg-card lg:border max-lg:border-y max-lg:shadow-none shadow-md  lg:rounded-xl space-y-4 max-sm:space-y-2'
    >
      <h1 className='text-xl max-sm:text-lg font-semibold'>What you&#39;ll learn</h1>
      {/* <ul className='space-y-3 max-sm:space-y-2 text-lg max-sm:text-base relative list-disc list-outside pl-4 text-justify'>
        <li className=''>Learn to write and code more effectively with OpenAI Canvas, using features like targeted editing, in-line feedback, changing the reading level, final polish, reviewing code, and fixing bugs.</li>
        <li>Learn how to build practical use cases like creating a game app, generating Python code from plot screenshots, and creating SQL databases from architecture images.</li>
        <li>Gain knowledge of how GPT-4o was trained to bring the OpenAI Canvas features and functionalities to life.</li>
      </ul> */}
      <RichText data={learningOutcomes}/>
    </div>
  )
}

export default About
