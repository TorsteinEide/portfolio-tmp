import ProjectCard from "../projectCard";
import ddinnerhome from "../../assets/ddinner-home.png";
import ddinnermeal from "../../assets/ddinner-meal.png";

function DailyDinnerPresentation() {
  return (
    <ProjectCard
      images={[ddinnerhome, ddinnermeal]}
      title="DailyDinner"
      description="DailyDinner is a website for making it easy to figure out what to eat. Each day meals are chosen at random, users can either eat the given meal or reroll a meals a limited number of times. "
      technologies={["Svelte", "VercelPostgres"]}
    ></ProjectCard>
  );
}

export default DailyDinnerPresentation;
