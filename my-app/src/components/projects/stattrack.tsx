import ProjectCard from "../projectCard";
import stattracklog from "../../assets/Statracklog.jpg";
import stattrackfront from "../../assets/Statrackfront2.jpg";
import stattracksettings from "../../assets/Statracksettings.jpg";
import stattrackloggedmeal from "../../assets/Statrackloggedmeal.jpg";

function StattrackPresentation() {
  return (
    <ProjectCard
      images={[
        stattrackfront,
        stattracklog,
        stattracksettings,
        stattrackloggedmeal,
      ]}
      title="StatTrack"
      description="NDA"
      technologies={["Flutter", "Dart", "Firebase"]}
    ></ProjectCard>
  );
}

export default StattrackPresentation;
