import { Hero } from '../widgets/Hero'
import { CoursesLists } from '../widgets/CourseSection/CoursesLists'
import { TestimonialSection } from '../widgets/TestimonialSection'

import { OurCommitment } from '../components/OurCommitment'
import { LearningModeBanner } from '../components/LearningModeBanner'
import { Report } from '../components/Report'
import { ContactForm } from '../components/ContactForm'

import courses from "../data/Courses";
import { testimonialsPlatform } from '../data/TestimonialsPlatform'

const Home = () => {
    return (
        <>
            <Hero />
            <OurCommitment />
            <LearningModeBanner />
            <CoursesLists courses={courses} />
            <Report />
            <TestimonialSection testimonialsPlatform={testimonialsPlatform} />
            <ContactForm />
        </>
    )
}

export default Home