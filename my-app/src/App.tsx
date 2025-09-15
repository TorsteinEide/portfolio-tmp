import Torstein from "./components/sections/torstein";
import Technologies from "./components/sections/technologies";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";
import { Link, Element } from "react-scroll";
//import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Main content takes all space above navbar */}
      <main className="flex-grow overflow-auto relative" id="scroll-container">
        <div className="relative z-10">
          <Torstein></Torstein>
          <Technologies></Technologies>
          <Experience></Experience>
          <Projects></Projects>
          {/*
          <Footer />
          */}
        </div>
      </main>

      {/* Hovering navbar at the bottom */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--color-nav)] bg-opacity-90 shadow-lg rounded-xs px-6 py-3 flex space-x-8 items-center w-fit justify-evenly z-20">
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
    </div>
  );
}

export default App;
