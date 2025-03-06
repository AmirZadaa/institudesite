import React from 'react'

import { Clock } from 'lucide-react'
import Image from 'next/image'
import logo from '@/app/(frontend)/_assets/logo/reverse-logo.png'
import { Button } from '@/components/ui/button'
import HeroVideo from './HeroVideo'
import HeroBgTmg from '@/app/(frontend)/_assets/images/herobackImg.webp'
import HeroNavigation from './HeroNavigation'
import beginer from '@/app/(frontend)/_assets/images/beginer.svg'

export default function Hero({title, image, courseFormat, difficultyLevel, duration, instructorName}:any) {
  return (
    <div className="bg-primary">
      <div className='container mx-auto grid grid-cols-2 gap-8 padding-y padding-x max-lg:gap-5 max-lg:grid-cols-1'>
        <section className='order-1 hidden max-lg:block'>
          <HeroNavigation title={title}/>
        </section>
        <div className=" text-background space-y-8 max-lg:space-y-0 max-lg:order-3">
          <section className='max-lg:hidden'>
            <HeroNavigation title={title}/>
          </section>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-4 capitalize">
              <span className="ring-1 ring-background rounded-lg px-2 py-1 max-sm:text-sm">{courseFormat}</span>
              <span className="ring-1 ring-background rounded-lg px-2 py-1 flex gap-1 max-sm:text-sm  "><Image src={beginer} alt='beginer' className='invert inline-block' />{difficultyLevel}</span>
              <span className="ring-1 ring-background rounded-lg px-2 py-1 max-sm:text-sm ">
                <Clock size={14} className="inline mr-1" /> {duration} Weaks
              </span>
            </div>
            <h2 className="pt-3 text-4xl max-lg:text-2xl font-bold">
            {title} with NexusBerry training and solutions
            </h2>
            <div>
              Instructor: <span className="font-bold">{instructorName}</span>
            </div>
            <div>
              <div className="w-72 max-md:w-60 max-sm:w-44 aspect-[4/1] relative">
                <Image src={logo} alt="logo" fill priority className="object-cover" />
              </div>
            </div>
          </div>
          <Button className="text-bold bg-card text-primary-950 hover:bg-background max-md:hidden text-xl p-9 rounded-xl">Enroll For Free</Button>
        </div>
        <section
          className="w-full order-3 max-lg:order-2"
          style={{
            backgroundImage: `url(${HeroBgTmg.src})`,
            backgroundSize: '80%',
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <HeroVideo image={image} />
        </section>
      </div>
    </div>

  )
}
