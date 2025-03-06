import CoursesCard from '../../courses/_components/CoursesCard'
import type { Metadata } from 'next'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const departments = await payload.find({
    collection: 'departments',
    depth: 4,
    select: {
      slug: true,
    },
  })

  const params = departments.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

export default async function page({ params }) {
  const departments = await queryDepartmentBySlug(params)
 
  if(!departments.length){
    return <div className='py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary'>
    <h1 className='text-center  text-red-500 font-bold sm:text-2xl '>Your requested course  doesn&#39;t exist in our data</h1>
    <Link href={"/departments"} aria-label='go to the home' className='bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600'>Go To Home</Link>
  </div>
  }
  
  return <CoursesCard departments={departments} />

}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const departments = await queryDepartmentBySlug({ slug })
  return generateMeta({ doc: departments[0] })
}

const queryDepartmentBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'departments',
    depth: 4,
    select: {
      title: true,
      slug: true,
      relatedCourses: true,
    },
    joins: {
      relatedCourses: {
        sort: 'orderInCourses',
      },
    },
    populate: {
      courses: {
        title: true,
        slug: true,
        image: true,
        difficultyLevel: true,
        price: true,
        subTitle: true,
        duration: true,
      },
    },
    where: {
      slug: {
        equals: slug,
      },
    },
  })


  return result.docs || null
})
