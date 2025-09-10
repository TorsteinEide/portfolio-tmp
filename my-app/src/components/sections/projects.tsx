import DashDotPresentation from "../projects/dashdot";
import DailyDinnerPresentation from "../projects/dailydinner";
import SecurePlayerDataPresentation from "../projects/SPD";
import XXSPresentation from "../projects/xxs";
import LanguageLandPresentation from "../projects/languageland";

function Projects() {
  return (
    <div
      id="projects"
      className="flex gap-2 flex-row bg-off-bg p-4 h-fit px-12 text-hover 2xl:px-56"
    >
      <div className="py-24 flex flex-col justify-between w-screen gap-16">
        <h1>Projects</h1>
        <div className="flex flex-wrap gap-4">
          <DashDotPresentation />
          <DailyDinnerPresentation />
          <SecurePlayerDataPresentation />
          <XXSPresentation />
          <LanguageLandPresentation />
        </div>
      </div>
    </div>
  );
}

export default Projects;
