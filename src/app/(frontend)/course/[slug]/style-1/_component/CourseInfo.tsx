import React from 'react'
import CollaboratCard from './CollaborateCard'
import Instructor from './Instructor'
import CourseOutline from './CourseOutline'
import About from './About'

const CourseInfo = ({title, courseFormat, duration, instructor, projects,learningOutcomes, totalLectures}:any) => {
    return (
        <section className="container mx-auto flex padding-x padding-y max-md:px-0 max-md:mt-5 gap-8 max-lg:flex-col-reverse">
            <div className=" lg:w-[67%] space-y-10 max-md:space-y-6">
                <About learningOutcomes={learningOutcomes}/>
                <div className='space-y-4 max-md:px-3'>
                    <h1 className='font-semibold text-2xl max-sm:text-xl'>Course Outline</h1>
                    <CourseOutline />
                </div>
                <div className='space-y-4 max-md:px-3'>
                    <h1 className='font-semibold text-2xl max-sm:text-xl'>Instructor</h1>
                    <Instructor instructor={instructor}/>
                </div>
            </div>
            <div className="lg:w-[33%] lg:sticky top-24 h-fit ">
                <CollaboratCard title={title}
                courseFormat={courseFormat}
                duration={duration}
                instructorName={instructor?.name || "nexusberry"}
                projects={projects}
                totalLectures={totalLectures}/>
            </div>
        </section>
    )
}

export default CourseInfo

