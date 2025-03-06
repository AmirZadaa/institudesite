'use client'
import Image from 'next/image'
import type { UseEmblaCarouselType } from 'embla-carousel-react'
import { useState, useEffect } from 'react'
import { placeholderImg } from '../../_assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export default function HeroCard({eventData}) {
  const [carouselApi, setCarouselApi] = useState<UseEmblaCarouselType[1] | null>(null)

  useEffect(() => {
    if (carouselApi) {
      const timer = setInterval(() => {
        carouselApi?.scrollNext()
      }, 2000)
      return () => clearInterval(timer)
    }
  }, [carouselApi])

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      setApi={setCarouselApi}
      orientation="vertical"
      className="w-full max-w-sm  -z-10 max-lg:hidden"
    >
      <CarouselContent className="-mt-1 h-[33rem] ">
        {eventData.slice(0,6).map((eventImage, index) => (
          <CarouselItem key={index} className="pt-1 basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0 rounded-xl">
                  <div key={index} className="w-full aspect-[858/432] relative ">
                    <Image
                      priority={index === 0}
                      src={eventImage?.image?.url ?? placeholderImg }
                      fill
                      alt={eventImage?.image?.alt ?? "incorrect image url"}
                      className="rounded-xl"
                      sizes="380px"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
