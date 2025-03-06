import React from 'react'
import { modulebg } from '../_assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { placeholderImg } from '../_assets/images'

import { queryDepartments } from './Header'

export default async function TopDepartments() {
  try {
    const departments:any = await queryDepartments()
    if(!departments.length){
      return <div className='text-2xl text-center font-bold py-6 text-primary'>departments are not found</div>
    }
    return (
      <div className="bg-gradient-to-r from-primary-400 to-primary-800 bg-primary ">
        <div
          className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  px-10  py-10 max-sm:px-2 max-sm:gap-2 space-y-1"
          style={{
            backgroundImage: `url(${modulebg.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col  justify-center gap-4 text-card max-lg:items-center mb-6 ">
            <h1 className="font-semibold text-3xl leading-10 max-lg:text-center">
              Explore Top Career Domains
            </h1>
            <p className="lg:text-sm max-lg:text-center space-x-1 ">
              Discover career paths that truly resonate with your passion & explore{' '}
              <br className="max-lg:hidden" /> mentorship programs that align perfectly with you.
              <Link
                href="/courses"
                aria-label="go to the explore page under"
                className="underline font-semibold"
              >
                Explore all Courses
              </Link>
            </p>
          </div>
          {departments.map((department: any) => (
            <Link
              href={`/departments/${department.slug}`}
              aria-label={department.slug}
              key={department.title}
            >
              <div className="bg-background flex flex-col items-center  justify-center gap-4  rounded-2xl hover:-translate-y-2 duration-700 h-72  py-14">
                <div className="w-20 aspect-square relative">
                  <Image
                    src={department.image?.url || placeholderImg}
                    alt={department.image?.alt || "upload image"}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h1 className="lg:text-[20px] font-semibold text-sm text-center ">
                  {department.title}
                </h1>
                <span
                  // href={`/department/${department.slug}`}
                  // aria-label={module.href}
                  className="text-primary-400 text-sm leading-[22px]"
                >
                  See Programs <ChevronRight className="inline" size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
    
  } catch (error) {
    return <div className='font-bold text-2xl text-primary text-center py-2'>{error.message}</div>
    
  }
 
}
