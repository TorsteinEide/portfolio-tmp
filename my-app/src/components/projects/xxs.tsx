import ProjectCard from "../projectCard";
import xxsfrontpage from "../../assets/xxs-frontpage.png";

function XXSPresentation() {
  return (
    <ProjectCard
      images={[xxsfrontpage]}
      title="XXS - Hiking Equipment"
      description="XXS - Hiking Equipment is a full-stack web project developed during my bachelor's studies in collaboration with fellow students at NTNU. It features a website for a fictional company that sells hiking equipment."
      technologies={["React", "Java", "Spring Boot", "PostgreSQL", "Nginx"]}
    ></ProjectCard>
  );
}

export default XXSPresentation;
