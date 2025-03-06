import React from 'react'
import BgSvg from './BgSvg'
import { Button } from '@/components/ui/button'

export default function Offer() {
  return (
    <div className='container mx-auto grid grid-cols-3 max-lg:grid-cols-1 gap-20 bg-gradient-to-r from-primary to-secondary-400 mb-10 max-md:mt-8 rounded-xl'> 
      <div className='space-y-8 col-span-2 flex  flex-col justify-center pl-12 max-lg:p-10 max-sm:text-center '>
        <h1 className='text-4xl max-md:text-2xl font-bold text-background'>Course access is free for a limited time during the DeepLearning.AI learning platform beta!</h1>
        <Button className='p-7 max-md:p-6 rounded-xl bg-card hover:bg-background text-foreground font-semibold max-md:font-medium text-lg w-fit max-sm:mx-auto'>Enroll for Free</Button>
      </div>
      <section className='flex justify-end -mx-8 max-lg:hidden'>
         <BgSvg/>
      </section>
    </div>
  )
}
