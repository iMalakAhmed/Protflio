// src/components/Projects.jsx
import SectionWrapper from "./SectionWrapper";
import WorkSlider from "./WorkSlider";

export default function Projects({ projects }) {
  return (
    <SectionWrapper title="Projects">
      <WorkSlider projects={projects} />
    </SectionWrapper>
  );
}
