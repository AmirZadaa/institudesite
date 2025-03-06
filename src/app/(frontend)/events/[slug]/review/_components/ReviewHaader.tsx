import { unstable_cache } from "next/cache"
import { getPayload } from "payload"
import config from "@payload-config"
const queryEventBySlug = unstable_cache(async (slug:string) => {
  const payload = await getPayload({ config })
   const response = await payload.find({
      collection: 'events',
      limit: 1,
      pagination : false,
      select: {
        title: true,
        slug: true,
        },
      where: {
        slug: {
          equals: slug,
        },
      },
   })
   return response.docs[0] || undefined
  })

export default async function ReviewHaader({eventSlug}) {
    const {title} = await  queryEventBySlug(eventSlug)

  return (
    <div className='w-70% space-y-2 mt-4'>
        <h1 className="text-3xl font-bold text-center">Review Form</h1>
         <p className="text-center text-gray-600 mb-4">Please fill your details to get your certificate.</p>
        <h2 className="text-lg font-semibold text-center mb-6">
          {title}
        </h2>
    </div>
  )
}
