import React from 'react'
import StdReviewCard from './StdReviewCard'
import { Button } from '@/components/ui/button'

type StudentReview = {
  id: number
  name: string
  course: string
  review: string
  image: string
}

const studentReviews: StudentReview[] = [
  {
    id: 1,
    name: "Rana Ajmal",
    course: "Digital Marketing",
    review: "It was an amazing journey , I learned alot and i feel much confident now. I am now growing my business and I have started consulting other online startups as well. Thanks to IDM and All trainers. They taught us really well and all trainers are very helpful",
    image: "/students/sarah.jpg"
  },
  {
    id: 2,
    name: "Ali Ahmed",
    course: "Web Development",
    review: "It was an amazing journey , I learned alot and i feel much confident now. I am now growing my business and I have started consulting other online startups as well. Thanks to IDM and All trainers. They taught us really well and all trainers are very helpful",
    image: "/students/ali.jpg"
  },
  {
    id: 3,
    name: "Rana Ajmal",
    course: "Digital Marketing",
    review: "It was an amazing journey , I learned alot and i feel much confident now. I am now growing my business and I have started consulting other online startups as well. Thanks to IDM and All trainers. They taught us really well and all trainers are very helpful",
    image: "/students/sarah.jpg"
  },
  {
    id: 4,
    name: "Ali Ahmed",
    course: "Web Development",
    review: "It was an amazing journey , I learned alot and i feel much confident now. I am now growing my business and I have started consulting other online startups as well. Thanks to IDM and All trainers. They taught us really well and all trainers are very helpful",
    image: "/students/ali.jpg"
  },
]

function StdReviews() {
  return (
    <div className='bg-background'>
      <div className='container max-md:px-4 mx-auto text-center'>
        <h1 className='text-primary text-xl font-semibold pb-3'>Students Reviews</h1>
        <h2 className='text-5xl max-md:text-3xl max-xs:text-2xl font-bold'>Meet some of our students who graduated from
          IDMP Pakistan.</h2>
        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 py-10 max-md:py-6 gap-8'>
          {studentReviews.map((review) => (
            <StdReviewCard
              key={review.id}
              name={review.name}
              course={review.course}
              review={review.review}
              image={review.image}
            />
          ))}
        </div>
        <Button className='p-6 text-lg font-semibold hover:bg-primary-400 shadow-[5px_5px_0px_hsl(var(--primary-400))] hover:shadow-[5px_5px_0px_hsl(var(--primary-500))]'>View More</Button>
      </div>
    </div>
  )
}

export default StdReviews
