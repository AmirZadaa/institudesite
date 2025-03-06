import React from 'react'
import Hero from './_components/Hero'
import CourseDetail from './_components/CourseDetail'
import JoinUs from './_components/JoinUs'
import CourseInfo from './_components/CourseInfo'
import UpcomingClasses from './_components/UpcomingClasses'
import RegistrationFooter from './_components/RegistrationFooter'
import Review from './_components/Review'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { Metadata } from 'next'
import Link from 'next/link'

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

export default async function SlugPage({ params }) {
  
  const { slug } = await params
  const event: any = await queryEventsBySlug({ slug })
  if (!event) {
    return (
      <div className="py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary">
        <h1 className="text-center  text-red-500 font-bold sm:text-2xl ">
          Your requested event doesn&#39;t exist in our data
        </h1>
        <Link
          href={'/events'}
          className="bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600"
        >
          Go To Events
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1600px] mx-auto bg-card">
      <Hero
        title={event.title}
        date={event.date}
        startTime={event.startTime}
        endTime={event.endTime}
        instructor={event.instructor}
        eventId={event.id}
        slug = {event.slug}
      />
      <CourseDetail learningOutcomes={event.learningOutcomes} image={event.image} />
      <JoinUs
        instructor={event.instructor}
        title={event.title}
        date={event.date}
        eventId={event.id}
        slug = {event.slug}
        whatsappLink={event.whatsappLink}
        whatsappQrCode={event.whatsappQrCode}
      />
      <Review title = {event.title}  slug = {slug} />
      <CourseInfo eventId ={event.id}   slug = {event.slug} />
      <UpcomingClasses />
      <RegistrationFooter
        date= {event.date}
        startTime= {event.startTime}
        endTime= {event.endTime}
        eventId= {event.id}
        slug = {event.slug}
      />
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const event = await queryEventsBySlug({ slug })
  return generateMeta({ doc: event })
}

const queryEventsBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'events',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return result.docs?.[0]
})
