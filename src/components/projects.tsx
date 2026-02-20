"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { projectsData } from "@/data/data";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface ProjectsProps {
  delay?: number;
}

const INITIAL_PROJECTS_TO_SHOW = 3;

export function Projects({ delay = 0 }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    detailedDescription?: string;
    keyFeatures?: readonly string[];
    dates: string;
    technologies: readonly { name: string; icon?: string }[];
    images?: string[];
    video?: string;
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_PROJECTS_TO_SHOW,
  );

  const hasMoreProjects = visibleProjects < projectsData.length;
  const displayedProjects = projectsData.slice(0, visibleProjects);

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length));
  };

  const handleProjectClick = (project: any) => {
    // Convert project data to match ProjectModal interface
    const modalProject = {
      title: project.title,
      description: project.description,
      detailedDescription: project.detailedDescription,
      keyFeatures: project.keyFeatures,
      dates: project.dates,
      technologies: project.technologies,
      images: project.image ? [project.image] : undefined,
      video: project.video,
      links: project.links,
    };
    setSelectedProject(modalProject);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-2 text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tighter">My Projects</h2>
            <p className="text-sm text-muted-foreground">
              Innovative solutions across AI, Blockchain & Backend Systems
            </p>
          </div>
        </BlurFade>
        <div className="grid gap-5 max-w-[800px] mx-auto">
          {displayedProjects.map((project, id) => (
            <BlurFade key={project.title} delay={delay + 0.01 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                image={project.image}
                video={project.video}
                technologies={project.technologies}
                links={project.links}
                onClick={() => handleProjectClick(project)}
              />
            </BlurFade>
          ))}
        </div>

        {hasMoreProjects && (
          <BlurFade delay={delay + 0.5}>
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleShowMore}
                variant="outline"
                className="group flex items-center gap-2"
              >
                Show More Projects
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                <span className="text-xs text-muted-foreground ml-2">
                  ({projectsData.length - visibleProjects} more)
                </span>
              </Button>
            </div>
          </BlurFade>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}
