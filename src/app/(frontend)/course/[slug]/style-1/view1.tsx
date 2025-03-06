// hafeez
import { Button } from "@/components/ui/button"
import Hero from "./_component/HeroSection/Hero"
import Offer from "./_component/Offer"
import RegistrationForm from "./_component/RegistrationForm"
import CourseInfo from "./_component/CourseInfo"
import Link from "next/link"

const View1 = ({ course }) => {
  const {
    title, image, courseFormat, difficultyLevel,
    duration, instructor, projects, learningOutcomes,
    totalLectures

  } = course

  return (
    <div>
      <Hero title={title }
        image={image}
        courseFormat={courseFormat}
        difficultyLevel={difficultyLevel}
        duration={duration }
        instructorName={instructor?.name || "Nexusberry"} />
      <CourseInfo title={title}
        courseFormat={courseFormat}
        duration={duration}
        instructor={instructor}
        projects={projects || ""}
        learningOutcomes={learningOutcomes }
        totalLectures={totalLectures || ""} />
      <div className="max-md:mx-5">
        <Offer />
      </div>
      <section className="bg-primary-600 padding-x max-sm:px-4">
        <div className="flex container max-lg:flex-col mx-auto pt-28 max-sm:pt-16 text-background space-y-4">
          <div className="space-y-4 max-lg:text-center ">
            <h1 className="text-5xl font-bold max-lg:text-3xl max-lg:font-semibold max-sm:taxt-xl ">Want to learn more about Generative AI?</h1>
            <p className="text-xl max-sm:text-base text-center">Keep learning with updates on curated AI news, courses, and events, as well as Andrews thoughts from DeepLearning.AI!</p>
          </div>
          <RegistrationForm />
        </div>
      </section>
      <div className="bg-card p-4 lg:hidden w-full fixed bottom-0">
        <Link href={'/enroll-now'}><Button className='w-full text-lg max-sm:text-base py-7 max-sm:py-6 rounded-xl bg-secondary hover:bg-secondary-400'>Enroll for Free</Button></Link>
      </div>
    </div>
  )
}

export default View1
