import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import Link from 'next/link'

import View1 from './style-1/view1'
import View2 from './style-2/view2'
import View3 from './style-3/view3'
import type { Course } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const courses = await payload.find({
    collection: 'courses',
    limit: 1000,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = courses.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Course({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  try {
    const course = await queryCourseBySlug({ slug })
    if (!course) {
      return <div className="py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary">
        <h1 className="text-center  text-red-500 font-bold sm:text-2xl ">course is not found</h1>
        <Link
          href={'/courses'}
          aria-label="go to the home"
          className="bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600"
        >
          Go To courses
        </Link>
      </div>
    }


    if (course.renderStyle === 'style-1') return <View1 course={course} />
    if (course.renderStyle === 'style-2') return <View2 course={course} />
    if (course.renderStyle === 'style-3') return <View3 course={course} />

    return <View1 course={course} />
  } catch (error) {
    return <div className="font-bold text-2xl text-red-500 text-center">{error.message}</div>
  }
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const course = await queryCourseBySlug({ slug })
  return generateMeta({ doc: course })
}

const queryCourseBySlug = cache(async ({ slug }: { slug: string }) => {

  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'courses',
    limit: 1,
    pagination: false,
    sort: 'orderInCourses',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
 

  return result.docs?.[0] || null
})
