'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import { format } from 'date-fns'
import { Calendar, Clock} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { imageSizes } from '@/app/(frontend)/_lib/ImageSizes'
import { placeholderImg } from '../../_assets/images'
import { Event } from '@/payload-types'

export default function EventCart({ eventsData }: any) {

  const [filteredEventsByDepartment, setFilteredEventsByDepartment] = React.useState('all')
  const filterEvent = eventsData.filter((event) =>
    filteredEventsByDepartment === 'all'
      ? event
      : event.department.title === filteredEventsByDepartment,
  )

  const filteredArray = eventsData
    .filter(({ department }) => department?.title && department.title)
    .map(({ department }) => department.title)
  const eventCategories: string[] = Array.from(new Set(filteredArray))

  const isEventPassed = (eventDate: string, startTime: string) => {
    const eventDateObj = new Date(eventDate)
    const startTimeObj = new Date(startTime)
    const combinedDate = new Date(
      eventDateObj.getFullYear(),
      eventDateObj.getMonth(),
      eventDateObj.getDate(),
      startTimeObj.getHours(),
      startTimeObj.getMinutes(),
    )
    return combinedDate.getTime() < Date.now()
  }

  const sizes = useMemo(
    () => ({
      '2xl': { padding: 42, cols: 4, gap: 10 },
      xl: { padding: 4, cols: 3, gap: 8 },
      lg: { padding: 4, cols: 2, gap: 8 },
      md: { padding: 4, cols: 2, gap: 8 },
      sm: { padding: 4, cols: 1, gap: 8 },
      xs: { padding: 4, cols: 1, gap: 8 },
    }),
    [],
  )

  return (
    <>
      <div className="flex  gap-2 px-4 flex-wrap  lg:px-10 mb-10 max-sm:mb-5">
        <Button
          onClick={() => setFilteredEventsByDepartment('all')}
          className={`${filteredEventsByDepartment === 'all' ? 'bg-primary text-card' : 'bg-card text-foreground'}  w-fit rounded-xl  border-2 border-foreground  hover:shadow-[2px_2px_0px_rgba(0,0,0,0.9)] duration-2000 hover:bg-primary hover:text-background`}
        >
          All Classes
        </Button>
        {!eventCategories.length
          ? ''
          : eventCategories.map((event, index) => (
              <Button
                key={index}
                onClick={() => setFilteredEventsByDepartment(event)}
                className={`${filteredEventsByDepartment === event ? 'bg-primary text-card' : 'bg-card text-foreground'} w-fit rounded-xl   border-2 border-foreground  hover:shadow-[2px_2px_0px_rgba(0,0,0,0.9)] duration-2000 hover:bg-primary hover:text-background`}
              >
                {event}{" "}({filteredArray.filter((str) => str === event).length})
              </Button>
            ))}
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 px-4 lg:px-10  gap-8 ">
        {!eventsData.length ? (
          <div className="font-bold text-2xl  text-center text-red-500 py-6">
            events are not found
          </div>
        ) : (
          filterEvent.map((event: any, index: any) => (
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
                <h1 className="text-[1.1rem] font-semibold leading-7">
                  {event.title || 'please! include title'}
                </h1>
                <div className="space-y-3">
                  <div className="flex  items-center gap-2">
                    <Calendar size={18} className="inline" />
                    <span className="text-sm">{format(new Date(event.date), 'MMMM dd, yyyy')}</span>
                    {/* <span></span> */}
                  </div>
                  <div className="flex  items-center gap-2">
                    <Clock size={18} className="inline" />
                    <span className="text-sm">
                      {format(new Date(event.startTime), 'h:mm a')}{' '}
                      {event.endTime ? `- ${format(new Date(event.endTime), 'h:mm a')}` : ''}
                    </span>
                  </div>
                </div>
                <Link
                  href={isEventPassed(event.date, event.startTime) ? '#' : `/events/${event.slug}`}
                  className={`block pt-10 ${isEventPassed(event.date, event.startTime) ? 'cursor-not-allowed' : ''}`}
                  aria-label="Read more"
                >
                  <Button
                    disabled={isEventPassed(event.date, event.startTime)}
                    className={`w-full rounded-xl hover:bg-primary-400 border-2 border-foreground text-background hover:shadow-[2px_2px_0px_rgba(0,0,0,0.9)] bg-primary `}
                  >
                    {isEventPassed(event.date, event.startTime) ? 'Event ended' : 'Register Now'}
                  </Button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}
