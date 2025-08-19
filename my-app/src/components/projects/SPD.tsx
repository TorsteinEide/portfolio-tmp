import ProjectCard from "../projectCard";
import spdfrontpage from "../../assets/spdfrontpage.png";

function SecurePlayerDataPresentation() {
  return (
    <ProjectCard
      images={[spdfrontpage]}
      title="Secure Player Data"
      description="Secure Player Data is a website where football players and their teams can share their data while still owning the data themselves. Users use Solid Pods to store data, while the web application reads and writes to their pods. This was my master thesis as NTNU Trondheim"
      technologies={["SolidProject", "React", "TypeScript", "Tanstack"]}
    ></ProjectCard>
  );
}

export default SecurePlayerDataPresentation;
