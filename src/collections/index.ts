import { Users } from './Users'
import { Media } from './Media'
import { Pages } from './Pages'
import { Categories } from './Categories'
import { Posts } from './Posts'
import { Programs } from './programs'
import { Courses } from './Courses'
import { Instructors } from './Instructor'
import { Departments } from './Departments'
import { Events } from './Events'
import { EventRegistrations } from './EventRegistrations'
import { EventFeedbacks } from './EventFeedbacks'


const collections = [
   Users, Media, Pages,
   Posts, Categories,
   Programs,
   Courses, Instructors,
   Departments, Events, EventRegistrations,
   EventFeedbacks
];
export default collections;