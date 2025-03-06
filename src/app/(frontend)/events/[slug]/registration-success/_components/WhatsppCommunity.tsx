import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { placeholderImg} from '@/app/(frontend)/_assets/images'


export default function WhatsppCommunity({whatsappLink,whatsappQrCode}) {
 
  
  return (
    <div className="relative -top-16 bgImg flex justify-between  gap-20 mx-10 p-8 bg-primary-100 rounded-xl max-lg:mx-4 max-lg:p-4 mt-10 max-sm:mt-5 mb-4">
      <div className="space-y-8">
        <div className="space-y-2 max-lg:text-center">
          <h1 className="font-semibold text-2xl">Join NexusBerry WhatsApp Community</h1>
          <p className="text-lg">to get regular updates on Masterclasses </p>
          <Link  href={`${whatsappLink || '#'}`} target = {'_blank'}  aria-label="whtspp" className="text-primary-400 text-lg font-semibold text-nowrap hidden max-lg:block py-4">
          Join from PC instead
          </Link> 
        </div>
        <div className="flex gap-4 max-lg:flex-wrap max-lg:text-center  ">
          <div className='max-lg:space-y-4'>
            <h2 className="font-semibold text-lg">Project-Based Approach</h2>
            <p className="text-sm max-lg:text-base">
              Practical and engaging learning can be achieved through a hands-on project.
            </p>
          </div>
          <div className='max-lg:space-y-4'>
            <h2 className="font-semibold text-lg">Free Prep Material</h2>
            <p className="text-sm max-lg:text-base">
              Access additional study resources at no extra cost to prepare more effectively.
            </p>
          </div>
          <div className='max-lg:space-y-4'>
            <h2 className="font-semibold text-lg">Expert Career Guidance</h2>
            <p className="text-sm max-lg:text-base">
              Get professional guidance on steering your career in the right direction and make
              well-informed choices.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-4 max-lg:hidden">
        <div className="w-full aspect-[1/1] relative rounded-lg ring-1 ring-green-400">
          <Image fill src={whatsappQrCode?.url || placeholderImg} alt="scan" className="rounded-lg" sizes='148px' loading='lazy' />
        </div>
        <Link
          href={`${whatsappLink || '#'}`}
          aria-label="whtspp"
          className="text-primary-400 text-sm font-semibold text-nowrap"
          target='_blank'
        >
          Join from PC instead
        </Link>
      </div>
    </div>
  )
}
