
import { Github, Linkedin } from "lucide-react";
function Footer() {
  return (
    <div className="w-full h-fit bg-bg flex justify-between  flex-col items-center">
      <div className="w-full h-fit px-8 items-center flex justify-center flex-col gap-4 pb-48">
        <h2 className="text-accent pt-48">Still Here?</h2>
        <button className=" mb-8">Contact me</button>
      </div>
      <footer className="bg-accent text-white py-12 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Navigation Links */}
            <div className="flex flex-col gap-2">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="/technologies" className="hover:text-gray-400">Technologies</a>
              <a href="/projects" className="hover:text-gray-400">Projects</a>
              <a href="/experience" className="hover:text-gray-400">Experience</a>
            </div>

            {/* Contact Information */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <p className="mb-2">Bergen, Norway</p>
              <p className="mb-2">Phone: +47 407 67 045</p>
              <p>Email: torstein_eide@hotmail.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6 md:mb-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-gray-400" />
              </a>
            </div>

          </div>
        </div>
      </footer>
      <div className="bg-hover w-full h-6">
        <p className="pl-48">all rights reserved</p>

      </div>
    </div>
  );
}

export default Footer;
