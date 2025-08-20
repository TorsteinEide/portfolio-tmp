import { Mail, Github, Linkedin } from "lucide-react";
import CircularText from "../circularText";

function Torstein() {
  return (
    <div className="flex-row flex w-screen justify-between h-screen p-48 px-8 bg-bg">
      <div className="flex gap-2 flex-col p-4 ">
        <h1 className="bg-accent w-fit p-2 rounded-xs text-bg">
          Torstein Eide
        </h1>
        <h2 className="text-accent w-fit rounded-xs pl-2 pt-6">
          Fullstack Software Developer
        </h2>
        <h3 className="text-accent pl-2">Graduate from NTNU Norway</h3>
        <div className="flex flex-row gap-2 pl-2 pt-6">
          <button className="bg-accent flex flex-row gap-2 justify-center items-center">
            <Mail size={18} />
            Contact
          </button>
          <button>
            <Github size={18} />
          </button>
          <button>
            <Linkedin size={18} />
          </button>
        </div>
      </div>
      <div className="w-72 h-72 bg-off-bg rounded-full mx-12 text-accent flex justify-center items-center p-2">
        <CircularText text="Hello!"></CircularText>
      </div>
    </div>
  );
}

export default Torstein;
