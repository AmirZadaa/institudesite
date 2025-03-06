import React from 'react'
import ModuleOverview from './_components/ModuleOverview'
import TutorInfo from './_components/TutorInfo'
import ModuleCards from '../course-2/_components/ModuleCards'
import FreeSection from './_components/FreeSection'
import FAQs from './_components/FAQs'
import ModelHero from './_components/ModelHero'
import Overview from './_components/Overview'
import CoursePromoSection from '../course-2/_components/CoursePromoSection'

const page = () => {

    const course = {
        "id": 1,
        "title": "MERN Stack",
        "slug": "mern-stack",
        "slugLock": true,
        "image": {
          "id": 2,
          "alt": null,
          "caption": null,
          "prefix": "media",
          "updatedAt": "2025-01-15T08:03:35.795Z",
          "createdAt": "2025-01-15T08:03:35.795Z",
          "url": "/api/media/file/fs_dm_438e4ec1a0.jpg",
          "thumbnailURL": "/api/media/file/fs_dm_438e4ec1a0-300x300.jpg",
          "filename": "fs_dm_438e4ec1a0.jpg",
          "mimeType": "image/jpeg",
          "filesize": 122540,
          "width": 1080,
          "height": 1080,
          "focalX": 50,
          "focalY": 50,
          "sizes": {
            "thumbnail": {
              "url": "/api/media/file/fs_dm_438e4ec1a0-300x300.jpg",
              "width": 300,
              "height": 300,
              "mimeType": "image/jpeg",
              "filesize": 20942,
              "filename": "fs_dm_438e4ec1a0-300x300.jpg"
            },
            "square": {
              "url": "/api/media/file/fs_dm_438e4ec1a0-500x500.jpg",
              "width": 500,
              "height": 500,
              "mimeType": "image/jpeg",
              "filesize": 44353,
              "filename": "fs_dm_438e4ec1a0-500x500.jpg"
            },
            "small": {
              "url": "/api/media/file/fs_dm_438e4ec1a0-600x600.jpg",
              "width": 600,
              "height": 600,
              "mimeType": "image/jpeg",
              "filesize": 56944,
              "filename": "fs_dm_438e4ec1a0-600x600.jpg"
            },
            "medium": {
              "url": "/api/media/file/fs_dm_438e4ec1a0-900x900.jpg",
              "width": 900,
              "height": 900,
              "mimeType": "image/jpeg",
              "filesize": 97294,
              "filename": "fs_dm_438e4ec1a0-900x900.jpg"
            },
            "large": {
              "url": "/api/media/file/fs_dm_438e4ec1a0-1400x1400.jpg",
              "width": 1400,
              "height": 1400,
              "mimeType": "image/jpeg",
              "filesize": 168557,
              "filename": "fs_dm_438e4ec1a0-1400x1400.jpg"
            },
            "xlarge": {
              "url": "/api/media/file/fs_dm_438e4ec1a0-1920x1920.jpg",
              "width": 1920,
              "height": 1920,
              "mimeType": "image/jpeg",
              "filesize": 254046,
              "filename": "fs_dm_438e4ec1a0-1920x1920.jpg"
            },
            "og": {
              "url": "/api/media/file/fs_dm_438e4ec1a0-1200x630.jpg",
              "width": 1200,
              "height": 630,
              "mimeType": "image/jpeg",
              "filesize": 94505,
              "filename": "fs_dm_438e4ec1a0-1200x630.jpg"
            }
          }
        },
        "language": "Urdu",
        "enrollmentType": "paid",
        "courseFormat": "medium",
        "difficultyLevel": "advanced",
        "duration": 16,
        "totalLectures": 32,
        "projects": 2,
        "instructor": {
          "id": 1,
          "name": "Rana Ajmal",
          "profileImage":  {
            "id": 2,
            "alt": null,
            "caption": null,
            "prefix": "media",
            "updatedAt": "2025-01-15T08:03:35.795Z",
            "createdAt": "2025-01-15T08:03:35.795Z",
            "url": "/api/media/file/fs_dm_438e4ec1a0.jpg",
            "thumbnailURL": "/api/media/file/fs_dm_438e4ec1a0-300x300.jpg",
            "filename": "fs_dm_438e4ec1a0.jpg",
            "mimeType": "image/jpeg",
            "filesize": 122540,
            "width": 1080,
            "height": 1080,
            "focalX": 50,
            "focalY": 50,
            "sizes": {
              "thumbnail": {
                "url": "/api/media/file/fs_dm_438e4ec1a0-300x300.jpg",
                "width": 300,
                "height": 300,
                "mimeType": "image/jpeg",
                "filesize": 20942,
                "filename": "fs_dm_438e4ec1a0-300x300.jpg"
              },
              "square": {
                "url": "/api/media/file/fs_dm_438e4ec1a0-500x500.jpg",
                "width": 500,
                "height": 500,
                "mimeType": "image/jpeg",
                "filesize": 44353,
                "filename": "fs_dm_438e4ec1a0-500x500.jpg"
              },
              "small": {
                "url": "/api/media/file/fs_dm_438e4ec1a0-600x600.jpg",
                "width": 600,
                "height": 600,
                "mimeType": "image/jpeg",
                "filesize": 56944,
                "filename": "fs_dm_438e4ec1a0-600x600.jpg"
              },
              "medium": {
                "url": "/api/media/file/fs_dm_438e4ec1a0-900x900.jpg",
                "width": 900,
                "height": 900,
                "mimeType": "image/jpeg",
                "filesize": 97294,
                "filename": "fs_dm_438e4ec1a0-900x900.jpg"
              },
              "large": {
                "url": "/api/media/file/fs_dm_438e4ec1a0-1400x1400.jpg",
                "width": 1400,
                "height": 1400,
                "mimeType": "image/jpeg",
                "filesize": 168557,
                "filename": "fs_dm_438e4ec1a0-1400x1400.jpg"
              },
              "xlarge": {
                "url": "/api/media/file/fs_dm_438e4ec1a0-1920x1920.jpg",
                "width": 1920,
                "height": 1920,
                "mimeType": "image/jpeg",
                "filesize": 254046,
                "filename": "fs_dm_438e4ec1a0-1920x1920.jpg"
              },
              "og": {
                "url": "/api/media/file/fs_dm_438e4ec1a0-1200x630.jpg",
                "width": 1200,
                "height": 630,
                "mimeType": "image/jpeg",
                "filesize": 94505,
                "filename": "fs_dm_438e4ec1a0-1200x630.jpg"
              }
            }
          },
          "expertise": "Website planning and creation, WordPress, Freelancing",
          "biography": {
            "root": {
              "type": "root",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "paragraph",
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "With over half a decade experience of wordpress and website creation, there is no one better than Mr Hamiz to make you an expert in website creation!",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr",
                  "textStyle": "",
                  "textFormat": 0
                }
              ],
              "direction": "ltr"
            }
          },
          "updatedAt": "2025-01-15T08:25:30.004Z",
          "createdAt": "2025-01-15T08:25:30.004Z"
        },
        "summary": "Building Full Stack Web Applications with Mongo DB, Express Js, React, and Node Js.",
        "learningOutcomes": {
          "root": {
            "type": "root",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "You will See What will you learn here.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": "ltr",
                "textStyle": "",
                "textFormat": 0
              }
            ],
            "direction": "ltr"
          }
        },
        "FAQs": [
          {
            "id": "67876dde31411a6c5024b79b",
            "question": "What is the starting average salery?",
            "answer": "Its depend on the company. However, If you are fresh candidate yopu can expect to get a package anywhere from 50,000 PKR to 90,000 PKR."
          }
        ],
        "updatedAt": "2025-01-15T08:27:17.803Z",
        "createdAt": "2025-01-15T08:12:35.231Z"
      }
    
    return (
        <div>
            <ModelHero title={course.title} image={course.image} />
            <ModuleOverview summary={course.summary} />
            <TutorInfo instructor={course.instructor}/>
            <Overview />
            <ModuleCards />
            <FreeSection />
            <FAQs faqData={course.FAQs}/>
            <CoursePromoSection />
        </div>
    )
}

export default page
