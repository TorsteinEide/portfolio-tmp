import DashDotPresentation from "../projects/dashdot";
import DailyDinnerPresentation from "../projects/dailydinner";

function Projects() {
  return (
    <div className="flex gap-2 flex-row bg-off-bg p-4 h-fit px-8 text-hover">
      <div className="py-24 flex flex-row justify-between w-screen gap-16">
        <h1>Projects</h1>
        <div className="flex flex-col gap-4">
          <DashDotPresentation />
          <DailyDinnerPresentation />
        </div>
      </div>
    </div>
  );
}

export default Projects;
