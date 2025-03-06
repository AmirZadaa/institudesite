// hafeez
import React from 'react'
import ModuleCards from './_components/ModuleCards'
import StdReviews from './_components/StdReviews'
import Hero from './_components/Hero'
import ActionBanner from './_components/ActionBanner'
import CoursePromoSection from './_components/CoursePromoSection'
import AnnouncementBar from './_components/AnnouncementBar'
import heroCourse2 from '@/app/(frontend)/_assets/images/heroCourse2.webp';

const page = () => {
  return (
    <div>
      <AnnouncementBar
        announcementText="🎉 Digital Marketing Mentorship Program | Cohort 1 - Starting 26th Dec 2024 | Limited-Seats!"
        buttonText="Apply Now"
        buttonLink="/" />
      <Hero
        title="Course Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Course Details", href: "/" }
        ]}
        image={heroCourse2}
      />
      <ModuleCards />
      <ActionBanner />
      <div className='bg-background'>
        <iframe
          allowFullScreen
          scrolling="no"
          className="fp-iframe my-10 max-lg:my-4 container"
          src="https://heyzine.com/flip-book/9a7852f2bf.html"
          style={{ border: '1px solid lightgray', width: '100%', height: '400px' }} />
      </div>
      <StdReviews />
      <CoursePromoSection />
    </div>
  )
}

export default page
