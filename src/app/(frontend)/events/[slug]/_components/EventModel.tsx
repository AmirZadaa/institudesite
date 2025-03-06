import { Button } from '@/components/ui/button'

import Image from 'next/image'
import {register} from '@/app/(frontend)/_assets/images'

import ModelForm from './ModelForm'
import { X } from 'lucide-react'

export function EventModel({ setIsOpenModel ,eventId ,slug } : {eventId:number ,setIsOpenModel:any, slug:string}) {
  return (
    <>
      <div
        onClick={() => setIsOpenModel(false)}
        className="w-full h-full fixed top-0 left-0 z-30 flex justify-center items-center bg-foreground/80 transition-all duration-300"
      ></div>
      
      <div className="fixed w-[96%] sm:w-[70%] grid grid-cols-2 max-lg:grid-cols-1  gap-8  top-10 -translate-x-1/2 left-1/2 z-50 bg-card h-fit rounded-xl p-4">
        <div className='space-y-6 bg-primary-400 p-8 rounded-xl max-lg:hidden'>
        
         <div>
          <Image src={register} alt="missing_img" sizes='400px' priority/>
         </div>
         <p className='text-2xl font-bold text-center text-card'>Let&#39;s enable fun learning experiences, together</p>
         </div>
        <div className='relative '>
        <button onClick={()=>setIsOpenModel(false)} className='absolute  -top-2 -right-2 w-fit ring-2 ring-foreground rounded-full'><X size={16}/></button>
          <ModelForm eventId = {eventId} slug = {slug}/>
        </div>
        
      </div>
    </>
  )
}
