import AboutSection from "@/components/landing-page/AboutSections";
import EducationSection from "@/components/landing-page/eductionSection";
import CV from "@/components/landing-page/eleganCv";
import ExperienceSection from "@/components/landing-page/experienceSection";
import SkillsSection from "@/components/landing-page/skillSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-20">
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
