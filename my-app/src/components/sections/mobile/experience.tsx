import ExperienceCard from "../../experienceCard";
import { ExperienceDescription } from "../constants";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="flex gap-2 flex-col p-4 h-fit px-8 text-accent bg-bg 2xl:px-56"
    >
      <div className="py-24 flex flex-col justify-between  p-4 gap-6">
        <div className="w-full flex  text-hover flex-col p-2">
          <h1 className="text-hover p-2 text-center">Experience</h1>
          <p className=" text-accent text-center">
            {ExperienceDescription}
          </p>
        </div>
        <div className="w-full gap-4 flex flex-col">
          <ExperienceCard
            title="Part Time"
            company="DIPS AS"
            logo={null}
            description="Handled a range of development tasks including bug fixes, feature implementation, and code quality improvements"
            startDate={"August 2024"}
            endDate={"june 2025"}
            technologies={["C#", ".NET"]}
          ></ExperienceCard>

          <ExperienceCard
            title="Summer Intern"
            company="DIPS AS"
            logo={null}
            description="Developed a web application to view hospital patient data."
            startDate={"June 2024"}
            endDate={"August 2024"}
            technologies={["TypeScript", "REACT", "Tailwind CSS"]}
          ></ExperienceCard>
        </div>
      </div>
    </div>
  );
};
