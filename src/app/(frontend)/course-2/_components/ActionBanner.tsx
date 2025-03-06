'use client'
import React, { useEffect, useRef, useState } from 'react'
import { bgImg } from '@/app/(frontend)/_assets/images'

const ActionBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const intervalId = setInterval(() => {
        setAnimationKey(prevKey => prevKey + 1)
      }, 2000)

      return () => clearInterval(intervalId)
    }
  }, [isVisible])
  return (
    <div style={{
      backgroundImage: `url(${bgImg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    ref={sectionRef}
      className='h-96 lg:bg-fixed'>
      <div className='h-full bg-foreground/70 flex items-center  text-background text-5xl max-lg:text-3xl max-md:text-2xl max-xs:font-semibold  font-bold'>
        <div className='flex flex-col justify-center text-center max-xs:gap-2  gap-8 max-lg:gap-4 items-center container mx-auto'>
          <h1 className='text-primary-300 relative mx-auto w-fit overflow-hidden'><div key={animationKey} className={`absolute bg-secondary w-full  top-1/2 h-2 max-lg:h-1  rounded-2xl ${isVisible ? 'animate-slide-ltr' : 'opacity-0'}`} />It&apos;s Time To Think</h1>
          <h2>It&apos;s Time To Take Action & Build Your Skills For a Better Future</h2>
        </div>
      </div>
    </div>
  )
}

export default ActionBanner
