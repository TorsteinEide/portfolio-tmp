import { Link } from "react-scroll";

function DesktopNavBar() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-nav bg-opacity-90 shadow-lg rounded-xs px-6 py-3 flex space-x-8 items-center w-fit justify-evenly z-20">
      <Link
        to="home"
        spy={true}
        smooth="easeInOutQuart"
        offset={-70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover hover:text-white! px-4 py-2 rounded-xs transition-all duration-[0.25s]"
      >
        Home
      </Link>
      <Link
        to="technologies"
        spy={true}
        smooth="easeInOutQuart"
        offset={-70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover hover:text-white! px-4 py-2 rounded-xs transition-all duration-[0.25s]"
      >
        Technoloies
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth="easeInOutQuart"
        offset={-70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover hover:text-white! px-4 py-2 rounded-xs transition-all duration-[0.25s]"
      >
        Experience
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth="easeInOutQuart"
        offset={70}
        containerId="scroll-container"
        duration={750}
        className="cursor-pointer hover:bg-nav-hover hover:text-white! px-4 py-2 rounded-xs transition-all duration-[0.25s]"
      >
        Projects
      </Link>
    </nav>
  );
}

export default DesktopNavBar;
