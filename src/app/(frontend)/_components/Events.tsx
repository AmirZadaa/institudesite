import React from 'react'
import Link from 'next/link'

export default function Events() {
  return (
    <div className="py-6 px-4 space-y-4 w-[50%] max-sm:w-[90%] shadow-lg my-6 mx-auto rounded-lg ring-2 ring-primary">
      <h1 className="text-center  text-primary font-bold sm:text-2xl ">Go to the Events Page</h1>
      <Link
        href={'/events'}
        aria-label="go to the home"
        className="bg-primary w-fit mx-auto text-background py-2 px-4 rounded-xl ring-2 ring-primary font-bold block hover:bg-background hover:text-primary-600"
      >
        Go To events
      </Link>
    </div>
  )
}
