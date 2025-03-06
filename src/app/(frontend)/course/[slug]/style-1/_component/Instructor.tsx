import Image from 'next/image'
import React from 'react'
import { LinkedinIcon, Twitter } from 'lucide-react'

const Instructor = ({instructor}: any) => {
    return (
        <div className='flex bg-card border relative rounded-xl w-full shadow-md p-4 max-sm:p-2 gap-4 max-sm:gap-2'>
            <div className='relative aspect-square w-24 max-sm:w-16'>
                <Image
                    src={instructor?.profileImage?.url ?? "/placeHolders/NexusBerry_favi.jpg"}
                    alt={instructor?.profileImage?.alt ??"url not correct"}
                    fill
                    sizes='(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 10vw'
                    className='object-cover rounded-full'
                />
            </div>
            <div className='my-auto'>
                <h1 className='text-2xl max-sm:text-xl font-semibold'>{instructor?.name ?? "NexusBerry"}</h1>
                <p className='text-lg max-sm:text-base text-muted-foreground'>Instructor</p>
            </div>
            <div className='flex right-0 absolute gap-3 max-sm:gap-1 pr-4 max-sm:pr-1'>
                <LinkedinIcon size={20} strokeWidth={0.5} className='stroke-card fill-card bg-blue-500 max-sm:size-4 rounded-lg'/>
                <Twitter className='stroke-blue-500 max-sm:size-4 fill-blue-500'/>
            </div>

        </div>
    )
}

export default Instructor
