
"use server"

import { getPayload } from 'payload'
import configPromise from "@payload-config";
import { EventFeedback } from '@/payload-types';


export const queryExistingMumber = async (userInputNumber: Number, eventSlug: string) => {


    if (!eventSlug) {
        return {
            success: true,
            result: undefined,
        }
    }
    try {
        const payload = await getPayload({ config: configPromise })
        const user = await payload.find({
            collection: 'event-registrations',
            limit: 4,
            depth: 3,
            pagination: false,
            where: {
                phoneNumber: {
                    equals: userInputNumber
                },
                'event.slug': {
                    equals: eventSlug
                }
            }
        })

        return {
            success: true,
            result: user.docs[0],
        }

    } catch (error) {
       
        return {
            succes: false,
            result: undefined,
            error: error instanceof Error ? error.message : "unknown message occur"
        }

    }

}


interface formData {
    registration: number,
    event:  number,
    rating: number;
    reason: EventFeedback["reason"],
    otherReason: string | undefined;
    mentorship: EventFeedback["mentorship"],
}

export const createFeedbacks = async (data:formData,eventSlug:string) => {


    try {
        const payload = await getPayload({ config: configPromise })
        const checkDuplicate = await payload.find({
            depth: 2,
            pagination: false,
            collection: "event-feedbacks",
            where: {
              registration: {
                    equals: data.registration
                },
                'event.slug':{
                    equals: eventSlug
                }
            }
        })

        if(checkDuplicate.docs.length){
        return {
            success: false,
            message: "",
            error: "You have already submitted feedback for this event",
        }
       }

        await payload.create({
            collection: "event-feedbacks",
            data
        })
        return {
            success: true,
            message: "Feedback submitted successfully",
            error: null,
        }

    } catch (error) {
        return {
            success: false,
            message: "",
            error: error instanceof Error ? error.message : error,
        }
    }
}
