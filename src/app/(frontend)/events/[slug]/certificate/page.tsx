'use server'
import Image from 'next/image'
import logo from '@/app/(frontend)/_assets/logo/reverse-logo.png'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { GenerateCertificate } from './GenerateCertificate'
import eventCertificatePic from './eventCertificatePic.jpg'
import Link from 'next/link'

const queryFeedbacks = async (slug: string) => {

  const payload = await getPayload({ config: configPromise })
  const feedback = await payload.find({
    collection: 'event-feedbacks',
    limit: 1,
    depth: 2,
    pagination: false,
    where: {
       'event.slug':{
        equals:slug,
       }
      
    },
  })
  return feedback.docs[0] || null
}
export default async function Page({params}) {

  const { slug } = await params

  const eventFeedback = await queryFeedbacks(slug)
  if (!eventFeedback) {
    return (
      <div className="text-center font-bold text-2xl p-10">
        No feebback found!
        <Link href={'/events'} aria-label="go to the events page" className="text-primary-400">
          click here
        </Link>
        to go the events page
      </div>
    )
  }
  return (
    <div className="bg-card lg:h-screen space-y-6 md:space-y-20 p-4">
      <div className="pt-10">
        <div className="w-72 rounded-lg mx-auto  aspect-[4/1] relative p-8 bg-primary">
          <Image src={logo} alt="logo" fill priority className="object-contain" sizes="288px" />
        </div>
      </div>

      <div className="flex w-[90%]  sm:w-[80%] mx-auto max-lg:flex-col gap-6 md:gap-20 items-center justify-center">
        <div className="relative sm:w-[500px] w-full aspect-[3/2] ">
          <Image src={eventCertificatePic} alt="certication" fill sizes="(max-width:640px,100vw),500px" />
        </div>
        <div className="bg-card flex flex-col justify-center gap-5 ">
          <h1 className="md:text-4xl text-xl font-bold">
            Congratulations! Your Certificate is generated.
          </h1>
          <div className="w-fit">
            {eventFeedback && (
              <GenerateCertificate
                name = {eventFeedback.registration instanceof Object ? eventFeedback.registration.name :null }
                title = {eventFeedback.event instanceof Object ? eventFeedback.event.title : null}
              />
            )}
          </div>
          <p>
            Download your certificate and share this on your Linkedin profile and dont forget to tag
            us.
          </p>
        </div>
      </div>
    </div>
  )
}
