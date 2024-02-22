import ProjectCard from "./ProjectCard";
import "./portfolio.css";
// import data from "../../assets/projects";
import frontData from "../../assets/fullProjects";
import backData from "../../assets/backProjects";
export default function Portfolio() {
  console.log(frontData);
  return (
    <article className="project-container flex  justify-center">
      <div>
        {frontData.map((project) => (
          <ProjectCard key={project.key} data={project} />
        ))}
        <h2>Back-End Projects</h2>
        {backData.map((project) => (
          <ProjectCard key={project.key} data={project} />
        ))}
      </div>
    </article>
  );
}
