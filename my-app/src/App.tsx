import Torstein from "./components/sections/torstein";
import Technologies from "./components/sections/technologies";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";
import { Mail, Linkedin, Github } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Main content takes all space above navbar */}
      <main className="flex-grow  overflow-auto z-20 ">
        <Torstein></Torstein>
        <Technologies></Technologies>
        <Experience></Experience>
        <Projects></Projects>
        <div className="h-96 border-2 border-red-500 w-2"></div>
      </main>

      {/* Hovering navbar at the bottom */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--color-nav)] bg-opacity-90 shadow-lg rounded-xs px-6 py-3 flex space-x-8 items-center w-[40%] justify-evenly z-20">
        <a href="#home" className="cursor-pointer ">
          Home
        </a>
        <a href="#about" className="cursor-pointer">
          About
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>
      </nav>
      <div className="absolute bottom-0 left-0 w-full h-72 bg-bg flex justify-between pt-4 px-2 pb-2 flex-col  items-center z-10">
        <div className="w-full h-fit px-8 items-center flex justify-center flex-col gap-4">
          <h2 className="text-hover">Still Here?</h2>
          <div className="w-full flex-row flex justify-between ">
            <div className="flex flex-col gap-2">
              <button className="bg-accent! hover:bg-hover! z-10 pointer-events-auto">
                <Mail size={18} />
              </button>
              <button className="bg-accent! hover:bg-hover! z-10 pointer-events-auto">
                <Github size={18} />
              </button>
              <button className="bg-accent! hover:bg-hover! z-10 pointer-events-auto">
                <Linkedin size={18} />
              </button>
            </div>
            <ul>
              <li>contact</li>
              <li>contact</li>
              <li>contact</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
        <div className="w-[42%] bg-accent hidden h-16 rounded-xs"></div>
      </div>
    </div>
  );
}

export default App;
