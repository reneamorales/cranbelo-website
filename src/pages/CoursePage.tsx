import { courses } from '../data/Course';
import { CourseModulesSection } from '../widgets/CourseModulesSection';
import { Modality } from '../components/Modality';
import { PricingSection } from '../widgets/PricingSection';
import { IntroCourseSection } from '../widgets/IntroCourseSection';
import { useParams, Navigate } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams<{ id: string }>();
  const selectedCourse = courses.find(c => c.slug === id);

  if (!selectedCourse) return <Navigate to="/404" replace />;

  return (
    <>
      <IntroCourseSection sections={selectedCourse.sections} title={selectedCourse.title} />
      <Modality />
      <CourseModulesSection modules={selectedCourse.modules} />
      <PricingSection pricing={selectedCourse.pricing} title={selectedCourse.title} />
    </>
  );
};

export default CoursePage;