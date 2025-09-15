import { Github, Linkedin } from "lucide-react";

export const Torstein = () => {
  const handleNavigate = (navigation: number) => {
    if (navigation == 0) {
      window.location.href = "https://github.com/TorsteinEide";
    }
    if (navigation == 2) {
      window.location.href =
        "https://www.linkedin.com/in/torstein-eide-b744a821b/";
    }
  };

  return (
    <div
      id="home"
      className="flex-row flex w-screen p-48 px-8 bg-bg 2xl:px-56 justify-center"
    >
      <div className="flex gap-2 flex-col items-center p-4 -translate-y-8 ">
        <h2 className="text-accent w-fit rounded-xs pl-2 ">Hi, im</h2>

        <h1 className="bg-accent w-fit p-2 rounded-xs text-bg">
          Torstein Eide
        </h1>
        <h2 className="text-accent w-fit rounded-xs pl-2 pt-6 text-center">
          Fullstack Software Developer
        </h2>

        <div className="flex flex-row gap-2 pl-2 pt-6">
          {/*
          <button
            className="bg-accent flex flex-row gap-2 justify-center items-center"
            onClick={() => handleNavigate(1)}
          >
            <Mail size={18} />
            Contact
          </button>
          */}
          <button onClick={() => handleNavigate(0)}>
            <Github size={18} />
          </button>
          <button onClick={() => handleNavigate(2)}>
            <Linkedin size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
