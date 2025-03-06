import JoinUs from "./_components/JoinUs";
import WhatsppCommunity from "./_components/WhatsppCommunity";
import Success from './_components/Success'
import { getPayload } from 'payload'
import { cache } from 'react'
import Link from "next/link"
import configPromise from '@payload-config'
import { generateMeta } from '@/utilities/generateMeta'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const events = await payload.find({
    collection: 'events',
    limit: 100,
    depth: 2,
    select: {
      slug: true,
    },
  })
  const params = events.docs.map(({ slug }) => {
    return { slug }
  })
  return params
}

export default async function RegistrationSuccessPage({params}) {
  const {slug = ""} = await params

  const event = await queryEventBySlug({slug}) 
  
  if(!event){
    return <div className='py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary'>
      <h1 className='text-center  text-red-500 font-bold sm:text-2xl '>Your requested event doesn&#39;t exist in our data</h1>
      <Link href={"/events"} className='bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600'>Go To Events</Link>
    </div>
  }
  
  
  return (
    <div >
      <Success/>
      <JoinUs instructor = {event.instructor } startTime= {event.startTime} endTime = {event.endTime} date={event.date} title = {event.title}/>
      <WhatsppCommunity whatsappLink = {event.whatsappLink} whatsappQrCode = {event.whatsappQrCode}/>
    </div>
  )
}


export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const event = await queryEventBySlug({ slug })
    return generateMeta({ doc: event })

}

const queryEventBySlug = cache(async ({ slug }: { slug: string }) => {

    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'events',
      limit: 4,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },  
      },
    })

    return result.docs?.[0] 

})