import { Mail, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <div className="w-full h-fit bg-bg flex justify-between pt-24 px-2 pb-48 flex-col  items-center pointer-events-none">
      <div className="w-full h-fit px-8 items-center flex justify-center flex-col gap-4">
        <h3 className="text-accent pt-8">Still Here?</h3>
        <h2 className="text-hover pb-4 mb-8">Contact me</h2>
      </div>
      <div className="w-1/2 flex-col flex justify-left bg-off-bg p-4 gap-6 rounded-xs border-[1.5px] border-accent">
        <input
          type="text"
          placeholder="Name"
          className="border-[1.5px] rounded-xs border-accent bg-white text-accent! p-2 pointer-events-auto"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-[1.5px] rounded-xs border-accent bg-white text-accent! p-2 pointer-events-auto"
        />
        <textarea
          placeholder="Message"
          className="border-[1.5px] rounded-xs border-accent bg-white text-accent! p-2 pb-24 pointer-events-auto"
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <button className="pointer-events-auto  bg-off-bg! hover:scale-150">
              <Mail size={18} className="text-accent" />
            </button>
            <button className="pointer-events-auto  bg-off-bg! hover:scale-150">
              <Github size={18} className="text-accent" />
            </button>
            <button className="pointer-events-auto  bg-off-bg! hover:scale-150">
              <Linkedin size={18} className="text-accent" />
            </button>
          </div>
          <button className="bg-nav! hover:bg-hover!  pointer-events-auto">
            Submit
          </button>
        </div>
      </div>

      <div className="w-[42%] bg-accent hidden h-16 rounded-xs"></div>
    </div>
  );
}

export default Footer;
