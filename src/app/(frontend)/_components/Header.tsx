import NavBar from './NavBar'
import { unstable_cache } from 'next/cache'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const queryDepartments = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'departments',
      // limit: 6,
      pagination: false,
      sort: 'orderInDepartments',
      depth: 1,
      select: {
        title: true,
        slug: true,
        // image: true,
        // description: true,
      },
    })

    return result.docs || null
  },
  ['courses'],
  {
    tags: ['courses'],
  },
)

const Header = async () => {
  const results = await queryDepartments()
  const departments = results?.map(({ slug , title }) => {
      return { slug: slug, title }
    })
  

  return <NavBar departments={departments} />
}

export default Header
