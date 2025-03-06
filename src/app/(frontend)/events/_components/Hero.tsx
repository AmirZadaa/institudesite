import React from 'react'
import { eventsBanner } from '../../_assets/images'
import HeroCard from './HeroCard'   

export default function Hero({eventData}) {
  return (
    <div style={{ backgroundImage: `url(${eventsBanner.src})`,backgroundPosition:'center',backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className='flex items-center  justify-between px-2 py-10 relative lg:px-10 lg:gap-10 shadowcss max-lg:justify-center max-lg:items-center mb-10 max-sm:mb-5'>
      <div className='space-y-8 z-10 text-center lg:text-start'>
        <h1 className='lg:text-[40px] text-[32px] max-sm:text-[20px] max-xs:leading-[30px]  font-semibold  xl:leading-[48px] leading-[50px]'>NexusBerry Solutions <span className='text-primary-400 py-1 lg:block'>Masterclasses,</span><span className='block max-xl:leading-[32px] '>You cannot afford to miss it!</span></h1>
        <p className='leading-5 text-sm'>Register for free masterclasses led by Industry Maestros and <br className='hidden xl:block'/>  give an extra edge to your Career game plan!</p>
        <div className='flex gap-4  lg:gap-6 text-background max-lg:justify-center '>
            <div className='flex flex-col rounded-xl px-4 py-4 gap-1 justify-center items-center tracking-widest bg-primary-400'>
                <h2 className='font-semibold text-lg lg:text-lg '>42521</h2>
                <span className='text-xs'>Attendees Till Date</span>
            </div>
            <div className='flex flex-col py-4 px-4  rounded-xl xl:px-2 xl:py-4 gap-1 text-foreground  justify-center items-center  tracking-widest bg-secondary-400'>
                <h2 className='font-semibold text-lg lg:text-lg '>42521</h2>
                <span className='text-xs '>Completed By Learner</span>
            </div>
        </div>
      </div>
      <HeroCard eventData={eventData}/>
    </div>
  )
}
