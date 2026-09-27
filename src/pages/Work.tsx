import { Closing } from "@/components/work/ClosingAction";
import { ProjectsSection } from "@/components/work/HardCard";
import { ExperienceSection } from "@/components/work/MediumCard";
import { OtherWorkSection } from "@/components/work/QuiteCard";

export const Work = () => {
  return (
    <div>
      <ProjectsSection />
      <ExperienceSection />
      <OtherWorkSection />
      <Closing />
    </div>
  );
};
