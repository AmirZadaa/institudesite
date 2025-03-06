import Image from 'next/image'
import React, { useMemo } from 'react'
import { data, placeholderImg } from '@/app/(frontend)/_assets/images'
import { Calendar, ChevronRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { imageSizes } from '@/app/(frontend)/_lib/ImageSizes'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { format } from 'date-fns'

export const queryEvents = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    const events = await payload.find({
      collection: 'events',
      limit: 3,
      pagination: false,
      select: {
        title: true,
        date: true,
        image: true,
        slug: true,
        startTime: true,
        endTime: true,
      },
      where: {
        date: {
          greater_than_equal: new Date(),
        },
      },
    })
    return events.docs || null
  },
  ['events'],
  {
    revalidate: 6,
  },
)
const sizes = {
  '2xl': { padding: 42, cols: 4, gap: 10 },
  xl: { padding: 4, cols: 3, gap: 8 },
  lg: { padding: 4, cols: 2, gap: 8 },
  md: { padding: 4, cols: 2, gap: 8 },
  sm: { padding: 4, cols: 1, gap: 8 },
  xs: { padding: 4, cols: 1, gap: 8 },
}
export default async function UpcomingClasses() {
  const data = await queryEvents()
  return (
    <div className="mt-20 max-sm:mt-10 mb-6">
      <div className="flex justify-between items-center mb-10 lg:px-10 px-4 max-lg:flex-col max-lg:space-y-4">
        <h1 className="text-4xl font-semibold leading-[48px] max-sm:text-center max-md:text-[32px] ">
          Upcoming Masterclasses
        </h1>
        <Link href="/events" className="inline-block  text-sm text-primary-400 font-bold">
          See all the Master classes{' '}
          <ChevronRight className="inline-block stroke-primary-400" size={18} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 px-4 lg:px-10 gap-8">
        {data.slice(0, 3).map((event: any, index) => (
          <div key={index} className="space-y-2 ring-2 ring-foreground rounded-xl bg-card">
            <div className="w-full aspect-[858/432] relative">
              <Image
                src={event?.image?.url ?? placeholderImg}
                fill
                alt={event?.image?.alt ?? 'incorrect url image'}
                className="rounded-xl"
                sizes={imageSizes(sizes)}
                loading="lazy"
              />
            </div>
            <div className="space-y-4 p-4">
              <h1 className="text-[1.1rem] font-semibold leading-7">{event.title}</h1>
              <div className="space-y-3">
                <div className="flex  items-center gap-2">
                  <Calendar size={18} className="inline" />
                  <span className="text-sm">{format(new Date(event.date), 'MMMM dd, yyyy')}</span>
                </div>
                <div className="flex  items-center gap-2">
                  <Clock size={18} className="inline" />
                  <span className="text-sm">
                    {format(new Date(event.startTime), 'h:mm a')}{' '}
                    {event.endTime ? `- ${format(new Date(event.endTime), 'h:mm a')}` : ''}
                  </span>
                </div>
              </div>
              <Link href={`/events/${event.slug}`} className="block pt-10" aria-label="Read more">
                <Button className="w-full rounded-xl hover:bg-primary-400    border-2 border-foreground text-background hover:shadow-[2px_2px_0px_rgba(0,0,0,0.9)] duration-300 bg-primary ">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
