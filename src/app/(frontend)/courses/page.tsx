// amir
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import CoursesCard from './_components/CoursesCard'
import DepartmentsBar from './_components/DepartmentsBar'
import { unstable_cache } from 'next/cache'
import Link from 'next/link'

export const dynamic = 'force-static'

const queryDepartments = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'departments',
      pagination: false,
      sort: 'orderInDepartments',
      depth: 5,
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
    })
    
    return result.docs || null
  },
  [],
  {
    tags: ['departments','courses'],
  },
)

const page = async () => {
  try {
    
    const departments:any = await queryDepartments();
    if(!departments){
      return <div className='py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary'>
      <h1 className='text-center  text-red-500 font-bold sm:text-2xl '>Your requested departments doesn&#39;t exist in our data</h1>
      <Link href={"/"} aria-label='go to the home' className='bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600'>Go To Home</Link>
    </div>
    }
    return (
      <div>
        <DepartmentsBar departments={departments.map(({ relatedCourses, ...rest }) => rest)} />
        <CoursesCard departments={departments} />
      </div>
    )
  } catch (error) {
   return <div className='font-bold text-2xl text-red-500 text-center py-8'>{error.message}</div>
  }
}

export default page

export async function generateMetadata() {
  // const post = await queryCategories()

  // return generateMeta({ doc: post })
  return {
    title: 'All Courses | NexusBerry',
  }
}
