import ProjectCard from "../projectCard";
import gdstart from "../../assets/gd-start.png";
import gddots from "../../assets/gd-dots.png";
import gddeath from "../../assets/gd-death.png";
import gdgame from "../../assets/gd-gameplay.png";

function DashDotPresentation() {
  return (
    <ProjectCard
      images={[gdstart, gddots, gdgame, gddeath]}
      title="DotDash"
      description="DotDash is a game where players need to control a dot in order to dodge obstacles, it gets progressively more difficult with time. It is completed with different dot skins that can be unlocked by playing the game. The game is written in GDScript and assets were created in Aseprite"
      technologies={["Godot", "GDScript", "Aseprite"]}
    ></ProjectCard>
  );
}

export default DashDotPresentation;
