// src/components/Projects.tsx
import SectionWrapper from "./SectionWrapper";
import WorkSlider from "./WorkSlider";
import { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <SectionWrapper title="Projects">
      <WorkSlider projects={projects} />
    </SectionWrapper>
  );
}

