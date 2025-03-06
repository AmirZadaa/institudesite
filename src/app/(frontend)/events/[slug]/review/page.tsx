import React from 'react'
import ReviewForm from './_components/ReviewForm'
import ReviewHaader from './_components/ReviewHaader'


export default async  function Page({ params }) {
  const {slug} = await  params
  
  return (
    <div>
      <ReviewHaader eventSlug = {slug} />
      <ReviewForm eventSlug = {slug}/>
    </div>
  )
}
