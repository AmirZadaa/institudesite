
import React from 'react'
import Hero from './_components/Hero'
import EventCart from './_components/EventCart'
import WhatsppCommunity from './_components/WhatsppCommunity'
import JoinUs from './_components/JoinUs'
import LearnerFeedback from './_components/LearnerFeedback'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import Link from 'next/link'
import type { Metadata } from 'next/types'


const queryEvents = unstable_cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const events = await payload.find({
    collection: 'events',
    limit: 100,
    pagination: false,
  })
  return events.docs || null
},
  ["events"],
  {
    tags:["events"],
  }
)



export default async function Page() {
  try {
    const eventsData:any = await queryEvents()
    if(!eventsData.length){
      return <div className='py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary'>
      <h1 className='text-center  text-red-500 font-bold sm:text-2xl '>Your requested events doesn&#39;t exist in our data</h1>
      <Link href={"/"} aria-label='go to the black' className='bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600'>Go To Home</Link>
    </div>
    }
    return (
      <div className='max-w-[1600px] mx-auto '>
        <Hero eventData = {eventsData}/>
        <EventCart eventsData={eventsData} />
        <WhatsppCommunity whatsappLink = {eventsData.whatsappLink} whatsappQrCode = {eventsData.whatsappQrCode}  />
        <JoinUs />
        <LearnerFeedback />
      </div>
    )
    
  } catch (error) {
   return <div className='font-bold text-2xl text-red-500 text-center '>{error.message}</div>
  }
}


export function generateMetadata(): Metadata {
  return {
    title: `Events`,
    description: "This is events page that all events show here you can register from here",
}
}