'use server'

import { Check } from 'lucide-react'
import { cookies } from 'next/headers'
import React from 'react'

export default async function Success() {
  const cookieStore = await cookies()
  const applicant = cookieStore.get('name')
  
  
  return (
    <div className="flex  text-card flex-col  pt-16  items-center mx-auto h-[25rem] space-y-6 p-4 bg-primary-400 ">
      <div className="bg-green-500 rounded-full h-fit  animate-ping w-fit p-4  ">
        <Check strokeWidth={4} size={30} className="stroke-card" />
      </div>
      <h1 className="text-2xl font-bold">Hello , {(applicant?.value ?? 'User').toString()}</h1>
      <p className="max-sm:text-center">Your registration has been done successfully.</p>
    </div>
  )
}
