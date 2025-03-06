import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface AnnouncementBarProps {
    announcementText: string
    buttonText: string
    buttonLink: string
}

const AnnouncementBar = ({ announcementText, buttonText, buttonLink }: AnnouncementBarProps) => {
    return (
        <div className='flex max-lg:text-sm lg:justify-center items-center max-lg:justify-end gap-2 bg-primary-100 py-3 max-lg:py-0.5'>
            <div className='overflow-hidden '>
                <div className='max-lg:animate-stream-rtl flex gap-72'>
                    <p className=' text-nowrap '>{announcementText}</p>
                    <p className=' text-nowrap lg:hidden'>{announcementText}</p>
                </div>
            </div>
            <Link href={buttonLink}>
                <Button className='rounded-3xl max-lg:bg-inherit max-lg:text-primary-400 max-lg:font-semibold hover:bg-primary-400'>{buttonText}</Button>
            </Link>
        </div>
    )
}

export default AnnouncementBar
