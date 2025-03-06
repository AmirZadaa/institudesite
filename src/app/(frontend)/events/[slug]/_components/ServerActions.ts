'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { cookies } from 'next/headers'
interface FormData {
    email: string,
    phoneNumber: string,
    name: string,
    event: number
}

export default async function CreateEventRegistration(data: FormData) {

    try {
        const payload = await getPayload({ config })

        const checkExistingRegistration = await payload.find({
            collection: 'event-registrations',
            where: {
                phoneNumber: {
                    equals: data.phoneNumber
                },
            },
            depth: 1
        })

        if (checkExistingRegistration.docs.length) {
            const checkExistingEvent = [...checkExistingRegistration.docs[0].event.map(ev => typeof ev === 'object' ? ev.id : ev)].includes(data.event)
            if (checkExistingEvent) {
                return {
                    success: false,
                    message: null,
                    error: "You have already registered for this event"
                }
            }
            else {
                await payload.update({
                    collection: "event-registrations",
                    id: checkExistingRegistration.docs[0].id,
                    data: {
                        event: [
                            data.event,
                            ...(checkExistingRegistration.docs[0].event.map(ev => typeof ev === 'object' ? ev.id : ev))
                        ]
                    }
                })
                return {
                    success: true,
                    message: "registration successfully",
                    error: null
                }
            }
        }

        await payload.create({
            collection: 'event-registrations',
            data: {
                email: data.email,
                phoneNumber: data.phoneNumber,
                name: data.name,
                event: [data.event]
            }
        })
        const storeCookie = await cookies()
        storeCookie.set('name', data.name)

        return {
            success: true,
            message: "registration successfully",
            error: null
        }
    } catch (error) {
        return {
            success: false,
            message: null,
            error: error instanceof Error ? error.message : error
        }
    }

}
