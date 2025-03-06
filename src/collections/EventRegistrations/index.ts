import { title } from 'process';
import { CollectionConfig } from 'payload';
import { format } from 'date-fns'
import { render } from "@react-email/render";

import {GenerateEmailBody} from '../../email/index'
export const EventRegistrations: CollectionConfig = {
  slug: "event-registrations",
  admin: {
    useAsTitle: "name",
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {

        if (!Array.isArray(doc.event) || doc.event.length === 0) {
          return;
        }

        const event = doc.event[0];
        
        if (!event.date) {
          return;
        }

        const formattedDate = format(new Date(event.date), 'do MMMM yyyy, EEEE');
        const isValidDate = (date: any) => date && !isNaN(new Date(date).getTime());
        const startTimeParsed = isValidDate(event.startTime) ? new Date(event.startTime) : null;
        const endTimeParsed = isValidDate(event.endTime) ? new Date(event.endTime) : null;

        const startTime = startTimeParsed ? format(startTimeParsed, 'hh:mm a') : 'N/A';
        const endTime = endTimeParsed ? format(endTimeParsed, 'hh:mm a') : '';

       

          
          await req.payload.sendEmail({
            to: doc.email,
            subject: 'Event Registration Confirmation',
            html: `<div style="font-family: Arial, sans-serif ; background-color: #f3f4f6; padding: 20px;">
            <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <h1>Hello, ${doc.name}</h1>
              <p>Thank you for registering for the event: <strong>${event.title}</strong></p>
              <p>📅 <strong>Date:</strong> ${formattedDate}</p>
              <p><strong>⏰ Time:</strong> ${startTime} ${endTime ? `- ${endTime}` : ''} IST</p>
              <p>We look forward to seeing you!</p>
            </div>`
          })
      }
    ]
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true
    },
    {
      name: "phoneNumber",
      type: "text",
      required: true,
    },
    {
      name: 'event',
      type: "relationship",
      relationTo: "events",
      required: true,
      hasMany:true,
    }

  ]
}

// function isValidDate(date: any): boolean {
//   return !isNaN(Date.parse(date));
// }
