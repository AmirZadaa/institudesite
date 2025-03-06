'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { RanaAjmal, Majid } from '@/app/(frontend)/_assets/images'

const TutorInfo = ({instructor}: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
  return (
    <div
      ref={sectionRef}
      className='container my-20 max-sm:my-10 flex px-14 max-md:px-0 max-sm:px-14 max-xs:px-4 gap-10 max-lg:flex-col'>
      <div className='flex-none w-5/12 max-lg:w-8/12 max-sm:w-full border-2 border-dashed border-primary-400 rounded-2xl relative aspect-square bg-card hover:shadow-2xl '>
        <Image
          src={instructor.profileImage.url}
          alt='Rana Ajmal'
          fill
          priority
          sizes='(max-width: 1200px) 30vw,(max-width: 480px) 100vw'
          className={`object-cover p-4 ${isVisible ? 'animate-slide-ltr' : 'opacity-0'}`}
        />
      </div>
      <div className='my-auto font-semibold space-y-2 max-sm:space-y-1 leading-tight max-md:text-center '>
        <legend className='text-primary-400 text-2xl max-xs:text-xl'>Meet Your Trainer</legend>
        <h1 className='text-4xl max-xs:text-3xl font-bold'>{instructor.name}</h1>
        <h2 className='text-secondary-400 text-2xl max-xs:text-xl'>Expertise:</h2>
        <p>{instructor.expertise}</p>
        <h2 className='text-secondary-400 text-2xl max-xs:text-xl'>Experence Level:</h2>
        <p>25+ Years</p>
        <h2 className='text-secondary-400 text-2xl max-xs:text-xl'>Why Learn From {instructor.name}:</h2>
        <p>With over half a decade experience of wordpress and website creation, there is no one better than Mr Hamiz to make you an expert in website creation!</p>
      </div>

    </div>
  )
}

export default TutorInfo
