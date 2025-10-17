import { Hero } from '../widgets/Hero'
import { CoursesLists } from '../widgets/CourseSection/CoursesLists'
import { TestimonialSection } from '../widgets/TestimonialSection'

import { OurCommitment } from '../components/OurCommitment'
import { LearningModeBanner } from '../components/LearningModeBanner'
import { Report } from '../components/Report'
import { ContactForm } from '../components/ContactForm'

import courses from "../data/CoursesList";
import { testimonialsPlatform } from '../data/TestimonialsPlatform'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);
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