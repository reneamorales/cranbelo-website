import SectionBlock from '../components/SectionBlock';
import { CourseModulesSection } from '../widgets/CourseModulesSection';
import { Modality } from '../components/Modality';

import { modules } from '../data/Modules';
import { PricingSection } from '../widgets/PricingSection';


const CoursePage = () => {
  return (
    <>
    <div className="flex flex-col items-center bg-darkGray section">
      <SectionBlock
        label="Curso"
        title="Marketing Digital Avanzado"
        subtitle="Qué vas a aprender:"
        body="En este curso, aprenderás a diseñar y ejecutar campañas de marketing digital efectivas. Dominarás herramientas como Google Ads y Facebook Ads, además de desarrollar habilidades en SEO y análisis de datos para maximizar el impacto de tus campañas."
      />

    </div>
    <div className="flex flex-col items-center bg-darkGray section">
    <SectionBlock
        subtitle="Requisitos previos:"
        body={[
          "Una computadora con acceso a internet",
          "Conexión estable a internet",
          "Conocimientos básicos de marketing (para cursos como Marketing Digital)",
          "Software necesario instalado (como un navegador web)"
        ]}
        variant="subtitle-first"
      />
      </div>
    <CourseModulesSection modules={modules} />
    <Modality />
    <PricingSection />
    </>
  );
};

export default CoursePage;