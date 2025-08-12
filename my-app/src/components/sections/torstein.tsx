import CircularText from "../circularText";
import torstein from "../../assets/Torstein-transparent.png";

function Torstein() {
  return (
    <div className="flex-row flex w-screen justify-between h-screen translate-y-24 ">
      <div className="flex gap-2 flex-col p-4 ">
        <h1 className="bg-accent w-fit p-2 rounded-xs text-bg">
          Torstein Eide
        </h1>
        <h2 className="text-accent w-fit rounded-xs ">
          Fullstack Software Developer
        </h2>
        <h3 className="text-accent">Graduate from NTNU Norway</h3>
      </div>
      <div className="w-72 h-72 bg-off-bg rounded-full mx-12 text-accent flex justify-center items-center p-2">
        <CircularText text="Hello!"></CircularText>
      </div>
    </div>
  );
}

export default Torstein;
