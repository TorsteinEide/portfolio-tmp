import { Link } from "react-scroll";
import { House, Cpu, Folder, Briefcase } from "lucide-react";

function MobileNavBar() {
  return (
    <nav className="fixed gap-4 bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-90  rounded-xs justify-center flex flex-row items-center  z-20">
      <Link
        to="home"
        spy={true}
        smooth="easeInOutQuart"
        offset={-70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover bg-nav shadow-lg hover:text-white! rounded-xs transition-all duration-[0.25s] p-2"
      >
        <House size={32} />
      </Link>
      <Link
        to="technologies"
        spy={true}
        smooth="easeInOutQuart"
        offset={-70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover bg-nav shadow-lg hover:text-white! rounded-xs transition-all duration-[0.25s] p-2"
      >
        <Cpu size={32} />
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth="easeInOutQuart"
        offset={-70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover bg-nav shadow-lg hover:text-white! rounded-xs transition-all duration-[0.25s] p-2"
      >
        <Briefcase size={32} />
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth="easeInOutQuart"
        offset={70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover bg-nav shadow-lg hover:text-white! rounded-xs transition-all duration-[0.25s] p-2"
      >
        <Folder size={32} />
      </Link>
    </nav>
  );
}

export default MobileNavBar;
