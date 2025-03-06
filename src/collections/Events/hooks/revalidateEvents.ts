import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Event } from '../../../payload-types'

export const revalidateEvents: CollectionAfterChangeHook<Event> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/events/${doc.slug}`

    payload.logger.info(`Revalidating post at path: ${path}`)

    revalidatePath("/events")
    revalidatePath(path)
    revalidateTag('events-sitemap')
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Event> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/events/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('events-sitemap')
  }

  return doc
}
