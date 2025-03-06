import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface HeroProps {
    title: string;
    breadcrumbs: {
        label: string;
        href: string;
    }[];
    image: StaticImageData | string;
}


const Hero = ({ title, breadcrumbs, image }: HeroProps) => {
    return (
        <div className='bg-background'>
            <div className='flex container relative max-md:flex-col max-md:text-center max-md:items-center p-8 max-md:p-4 justify-between animate-slide-ltr'>
                <div className='my-auto'>
                    <h1 className='text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-xs:text-2xl max-xs:leading-6 font-bold'>{title}</h1><br />
                    <Breadcrumb className="pl-1 pb-2">
                        <BreadcrumbList className='font-semibold text-base max-sm:text-sm max-xs:text-xs text-foreground '>
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={crumb.href} className='hover:text-primary-400'>{crumb.label}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className='relative aspect-video w-2/3 max-md:w-full'>
                    <Image
                        alt='heroCourse2'
                        src={image}
                        fill
                        sizes=''
                        className='object-cover rounded-l-full rounded-r-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
