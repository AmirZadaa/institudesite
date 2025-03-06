'use client'
import Image from 'next/image'
import { useState } from 'react'
import {  whtsppIcon, scan, placeholderImg } from '@/app/(frontend)/_assets/images'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from '@/components/CountDownTimer'
import { EventModel } from './EventModel'

export default function JoinUs({ instructor, title, date, eventId ,whatsappLink,whatsappQrCode,slug}: any) {
  const timeLeft = CountdownTimer({ date: date })
  const [isOPenModel, setIsOpenModel] = useState(false)

  return (
    <section
      className="mx-10 my-20 max-sm:my-6 flex gap-4 max-xl:flex-col max-sm:mx-2"
      id="show_footer"
    >
      <div className="flex bg-secondary-100 w-[70%] gap-8 rounded-2xl max-xl:w-full  max-lg:flex-col  px-4 ">
        <div className="relative w-full max-lg:w-96 max-sm:w-72 max-lg:mx-auto aspect-[128/187] flex">
          <Image
            src={instructor?.profileImage?.url ?? '/nexusberryLogo.png' } 
            alt={instructor?.profileImage?.alt ?? 'incorrect url image'} 
            fill
            className="object-contain"
            sizes="(max-width: 768px) 288px,(max-width: 1024px) 384px, (max-width: 1280px) 358px, 307px"
          />
          <div className="absolute bottom-16 max-lg:w-full max-lg:bottom-0  text-center ">
            <div className="glassEffect rounded-full flex flex-col justify-center items-center py-2w">
              <span>Mentored by</span>
              <h1 className="font-bold">{instructor?.name ?? "NexusBerry"}</h1>
              <span>Sr. {title} at NexusBerry</span>
            </div>
            <span className=" font-semibold text-sm text-center max-lg:hidden">
              From guidance to insider tips, get everything!!
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-end space-y-8 px-4 py-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold max-lg:text-center">
              Hurry up and mark your calendars!!
            </h2>
            <p className="max-lg:text-center  text-sm">
              If you will passionate about building a career in {title}, This can be your chance!
            </p>
            <ul className="flex gap-4 max-lg:hidden">
              {[
                `${timeLeft.days} Day`,
                `${timeLeft.hours} Hours`,
                `${timeLeft.minutes} Mints`,
                `${timeLeft.seconds} Second`,
              ].map((slot, ind) => (
                <li
                  key={ind}
                  className="text-nowrap px-4 bg-background  py-2 rounded-full  text-sm ring-1 ring-foreground"
                >
                  {slot}
                </li>
              ))}
            </ul>
            <div className="flex gap-5 text-2xl font-semibold lg:hidden max-sm:text-sm  max-sm:gap-2 justify-center">
              <div className="flex flex-col gap-1  items-center">
                <div>{timeLeft.days}</div>
                <div className="text-sm font-semibold">Days</div>
              </div>
              <div>:</div>
              <div className="flex flex-col gap-1 items-center">
                <div>{timeLeft.hours}</div>
                <div className="text-sm font-semibold">Hours</div>
              </div>
              <span>:</span>
              <div className="flex flex-col gap-1 items-center">
                <div>{timeLeft.minutes}</div>
                <div className="text-sm font-semibold">Minuts</div>
              </div>
              <span>:</span>
              <div className="flex flex-col gap-1 items-center">
                <div>{timeLeft.seconds}</div>
                <div className="text-sm font-semibold">seconds</div>
              </div>
            </div>
          </div>
          <a
            //  href={`${whatsappLink ? whatsappLink : "#"}`}
            aria-label="register yourself"
            className="max-lg:mx-auto max-lg:w-1/2 max-sm:w-full"
          >
            <Button
              onClick={() => setIsOpenModel(true)}
              className="bg-primary-400 w-fit max-lg:w-full max-lg:mx-auto hover:bg-primary-400 font-bold py-6 rounded-xl hover:shado-1px-4px-0px-rgb hover:shadow-[4px_4px_0px_rgba(181,20,36,0.9)] duration-300"
            >
              Register for free!!
            </Button>
          </a>
        </div>
      </div>

      <div className="w-[30%] text-center space-y-4 bg-primary-100 rounded-2xl p-8 max-xl:w-full">
        <div className="w-[60px] aspect-[1/1] mx-auto  relative">
          <Image
            src={whtsppIcon}
            fill
            alt="whatspp community"
            className="object-contain"
            sizes="60px"
          />
        </div>
        <p className="font-semibold w-1/2 text-center mx-auto tex-[15px]">
          Join this event&apos;s WhatsApp Group
        </p>
        <div className="flex flex-col gap-2 py-4 ">
          <div className="w-40 aspect-[1/1] max-xl:hidden mx-auto relative rounded-lg ring-1 ring-green-400">
            <Image fill src={whatsappQrCode?.url ?? placeholderImg} alt="scan" className="rounded-lg" sizes="160px" />
          </div>
          <Link
            href={`${whatsappLink ? whatsappLink : "#"}`}
            aria-label="whtspp"
            className="text-primary-400 text-sm font-semibold text-nowrap text-center"
            target = "_blank"
          >
            Join from PC instead
          </Link>
        </div>
      </div>
      {isOPenModel && <EventModel setIsOpenModel={setIsOpenModel} eventId={eventId} slug = {slug} />}
    </section>
  )
}
