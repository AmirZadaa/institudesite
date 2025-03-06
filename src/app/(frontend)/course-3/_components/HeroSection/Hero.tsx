import React from 'react'
import { BadgeCheck, Linkedin, Network, Star, ThumbsUp, UsersRound } from 'lucide-react'
import Image from 'next/image'
import heroImg from '../../_assets/images/hero.png'

const Hero = ({title, summary}: any) => {
  return (
    <section className=" bg-[#14386A] text-card ">
      <div className='container mx-auto flex flex-col lg:flex-row py-8 px-4'>
        {/* left side */}
        <div className="lg:w-[50%]">
          <div className="hidden  bg-yellow-600 md:w-[240px] lg:w-[33%] lg:flex items-center justify-center gap-2 py-1 px-2 text-black rounded-full ">
            <BadgeCheck className='w-[1rem]' />
            <h1 className="text-[14px] font-medium">Job Ready Program</h1>
          </div>
          <h1 className="animate-fadeIn text-[2rem] lg:text-[40px] font-semibold text-center lg:text-start">{title} with NexusBerry
          </h1>
          <p className='animate-slide-btt text-[1rem] lg:text-[18px] text-center lg:text-start [line-height: 27px] mt-5'>
            {summary}
          </p>
          <hr className='mt-8 w-[95%]' />
          <ul className=' flex justify-around py-4'>
            <li className='animate-slide-ltr flex flex-col gap-2 items-center'>
              <div className="flex flex-col lg:flex-row  gap-2 items-center">
                <Star className='lg:w-7 lg:h-7' />
                <span className="text-[1rem] lg:text-[22px] font-semibold [line-height: 33px]">4.9</span>
              </div>
              <span className='text-[14px] lg:text-[1rem] [line-height: 24px]'>( 919 Reviews )</span>
            </li>
            <li className='animate-slide-ltr flex flex-col gap-2 items-center'>
              <div className="flex flex-col lg:flex-row  gap-2 items-center">
                <UsersRound className='lg:w-7 lg:h-7' />
                <span className="text-[18px] lg:text-[22px] font-semibold [line-height: 33px]">17,000+</span>
              </div>
              <span className='text-[14px] lg:text-[1rem] [line-height: 24px]'>Aspirants Mentored</span>
            </li>
            <li className='animate-slide-ltr flex flex-col gap-2 items-center'>
              <div className="flex flex-col lg:flex-row  gap-2 items-center">
                <Network className='lg:w-7 lg:h-7' />
                <span className="text-[18px] lg:text-[22px] font-semibold [line-height: 33px]">11+</span>
              </div>
              <span className='text-[14px] lg:text-[1rem] [line-height: 24px]'>Industry Mentors</span>
            </li>
          </ul>
          <hr className='mb-8 w-[95%]' />
          <div className="hidden lg:flex flex-col lg:flex-row gap-4 justify-center">
            <button className='font-semibold text-[18px] text-center w-[219px] h-[56px] bg-blue-600 hover:border-b-2 hover:border-white rounded-xl tracking-wider'>Book Demo Now</button>
            <button className='font-semibold text-[18px] text-center w-[219px] h-[56px] bg-card text-black hover:border-b-2 hover:border-blue-600 rounded-xl tracking-wider'>Download Curriculum</button>
          </div>
        </div>
        {/* Image Side */}
        <div className="lg:w-[50%]">
          <div className="animate-fadeIn w-full  lg:w-[70%] h-[95%] lg:ml-32 bg-card rounded-xl text-black flex flex-col  lg:justify-end relative">
            <div className='ml-20'>
              <Image src={heroImg} alt="heroImg" className='w-64' />
            </div>
            <div className='flex'>
              <div className='bg-gray-100 w-[50%] h-40 flex flex-col items-center justify-center gap-2 '>
                <Linkedin color="#1434A4" fill='#1434A4' className="w-7" />
                <h1 className="text-[20px] font-semibold">3,200++</h1>
                <p className="text-[12px] text-gray-700">Jobs on LinkedIn Alone</p>
              </div>
              <div className='bg-gray-200 w-[50%] h-40 flex flex-col items-center justify-center gap-2 '>
                <ThumbsUp color="#1434A4" fill='#1434A4' className="w-7" />
                <h1 className="text-[20px] font-semibold">PKR 500,000</h1>
                <p className="text-[12px] text-gray-700">Maximum Compensation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col lg:flex-row gap-4 mt-4 justify-center items-center">
          <button className='font-semibold text-[18px] text-center w-full h-[56px] bg-blue-600 hover:border-b-2 hover:border-white rounded-xl tracking-wider'>Book Demo Now</button>
          <button className='font-semibold text-[18px] text-center w-full h-[56px] bg-card text-black hover:border-b-2 hover:border-blue-600 rounded-xl tracking-wider'>Download Curriculum</button>
        </div>
      </div>
      {/* bottom Hero */}
      <div className='flex flex-col items-center justify-center gap-4 pb-4 mt-4'>
        <h1 className='text-[1rem] lg:text-lg font-semibold'>Our learners work at top companies</h1>
        <div className=" overflow-hidden ">
          <div className='animate-stream-rtl hover:[animation-play-state:paused] flex items-center justify-center gap-4'>
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-adobe-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-mamaearth-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-accenture-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-google-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-meta-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-airbnb-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-expedia-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-lens-cart-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-ola-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-wallmart-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-duolingo-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-adobe-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-mamaearth-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-accenture-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-google-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-meta-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-airbnb-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-expedia-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-lens-cart-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-ola-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-wallmart-icon.svg" alt="img" width={140} height={140} />
            <Image src="https://deen3evddmddt.cloudfront.net/images/home-images/company-logo/white-duolingo-icon.svg" alt="img" width={140} height={140} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
