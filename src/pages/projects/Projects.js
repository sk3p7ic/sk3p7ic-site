import { CardGroup } from "./project-card/CardGroup";
import { ProjectCard } from "./project-card/ProjectCard";

export const ProjectsPage = () => {
  return (
    <div className="flex-grow w-full h-full p-16 xl:px-32 xl:py-12 flex flex-col">
      <h1 className="font-telex text-3xl lg:text-6xl">Constantly Working.</h1>
      <div className="p-4 flex-grow flex">
        <CardGroup title="Web Dev">
          <ProjectCard
            title="Personal Site"
            href="https://joshuaibrom.com"
            src="/img/personal_site.png"
          >
            My personal website, written entirely with vanilla HTML, CSS, and
            Javascript. Features state management of the user's current theme
            (default: Pop!_OS's theme) and other quirky oddities.
          </ProjectCard>
          <ProjectCard
            title="Sorting Visualizer"
            href="https://sorting.sk3p7ic.tech"
            src="/img/sorting_visualizer.png"
          >
            Built using Angular, this website aims to show various common
            sorting algorithms in use. This was my first Angular project.
          </ProjectCard>
          <ProjectCard
            title="This Site!"
            href="https://sk3p7ic.tech"
            src="/img/sk3p7ic_site.png"
          >
            This site is built using React and is actually my first proper React
            site.
          </ProjectCard>
        </CardGroup>
      </div>
    </div>
  );
};
