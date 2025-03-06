import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function page() {
  const payload = await getPayload({ config })
  const courses = await payload.find({
    collection: 'courses',
    depth: 4,
    select: {
      title: true,
      subTitle: true,
      image: true,
      department: true,
    },
    populate: {
      departments: {
        title: true,
        slug: true,
      },
    },
    where: {
      'department.slug': {
        equals: 'mobile-development',
      },
    },
  })
 

  return (
    <pre>
      {JSON.stringify(courses, null, 2)}
      {/* <span>this is test pages</span> */}
    </pre>
  )
}
   