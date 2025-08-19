import ExperienceCard from "../experienceCard";
import dipslogo from "../../assets/dipslogo.png";

function Experience() {
  return (
    <div className="flex gap-2 flex-row  p-4 h-fit px-8 text-accent">
      <div className="py-24 flex flex-row justify-between w-screen">
        <div className="w-full gap-4 flex flex-col">
          <ExperienceCard
            title="Part Time"
            company="DIPS AS"
            logo={dipslogo}
            description="Handled a range of development tasks including bug fixes, feature implementation, and code quality improvements"
            startDate={"August 2024"}
            endDate={"june 2025"}
            technologies={["C#", ".NET"]}
          ></ExperienceCard>

          <ExperienceCard
            title="Summer Intern"
            company="DIPS AS"
            logo={dipslogo}
            description="Developed a web application to view hospital patient data."
            startDate={"June 2024"}
            endDate={"August 2024"}
            technologies={["TypeScript", "REACT", "Tailwind CSS"]}
          ></ExperienceCard>
        </div>
        <div className="w-full flex justify-end text-hover">
          <h1>Experience</h1>
        </div>
      </div>
    </div>
  );
}

export default Experience;
