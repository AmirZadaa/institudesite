// amir
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'

// import { generateMeta } from '@/utilities/generateMeta'

// import { PayloadRedirects } from '@/components/PayloadRedirects'
import DepartmentsBar from '../courses/_components/DepartmentsBar'
import CoursesCard from "../courses/_components/CoursesCard"
import { unstable_cache } from 'next/cache'

export const dynamic = 'force-static'

const queryDepartments = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'departments',
      pagination: false,
      sort: "orderInDepartments",
      depth: 5,
      select: {
        title: true,
        slug: true,
        relatedCourses: true
      },
      joins: {
        relatedCourses: {
          sort: "orderInCourses",
        },
      },
      populate: {
        courses: {
          title: true,
          slug: true,
          image: true,
          duration: true,
          price:true,
          subTitle:true,
          difficultyLevel:true,
        }
      }
    })

    return result.docs || null
  },
  ['courses'],
  {
    tags: ['courses','departments'],
  }
)


const page = async () => {

  const departments:any = await queryDepartments()

  if(!departments){
    return <div className='py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary'>
    <h1 className='text-center  text-red-500 font-bold sm:text-2xl '>Your requested departments doesn&#39;t exist in our data</h1>
    <Link href={"/"} aria-label='go to the home' className='bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600'>Go To Home</Link>
  </div>
  }

  // if (!categories) return <PayloadRedirects url={'/'} />

  return (
    <div>
      <DepartmentsBar departments={departments.map(({ relatedCourses, ...rest }) => rest)} />
      <CoursesCard departments={departments} />
    </div>
  )
}

export default page

export async function generateMetadata() {
  // const post = await queryCategories()

  // return generateMeta({ doc: post })
  return {
    title: "All Courses | NexusBerry"
  }
}
