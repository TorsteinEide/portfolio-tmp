import ExperienceCard from "../experienceCard";
import dipslogo from "../../assets/dipslogo.png";

function Experience() {
  return (
    <div
      id="experience"
      className="flex gap-2 flex-row  p-4 h-fit px-8 text-accent bg-bg 2xl:px-56"
    >
      <div className="py-24 flex flex-row justify-between w-screen p-4 gap-16">
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
        <div className="w-full flex justify-start items-end text-hover flex-col max-w-96 p-2">
          <h1 className="text-hover p-2">Experience</h1>
          <p className="text-right text-accent">
            I’ve worked on fullstack projects, building both web frontends and
            backend services. Along the way, I’ve learned to tackle problems,
            work well with others, and improve the app to better meet users’
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
