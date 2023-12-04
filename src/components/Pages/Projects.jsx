import { useEffect, useState } from "react";
import { ProjectCard } from "/src/components/Cards";
import { SectionHeader, Section } from "/src/components/Section";
import { projects as projectsData } from "../../data/projectsData";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <Section id="projects-section" className="bg-secondary-600">
      <SectionHeader>02. Projects</SectionHeader>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 mt-4 sm:mt-6 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};
