import { Torstein as DesktopTorstein } from "./components/sections/desktop/torstein";
import { Technologies as DesktopTechnologies } from "./components/sections/desktop/technologies";
import { Experience as DesktopExperience } from "./components/sections/desktop/experience";
import { Projects as DesktopProjects } from "./components/sections/desktop/projects.tsx";
import Footer from "./components/footer.tsx";

import { Torstein as MobileTorstein } from "./components/sections/mobile/torstein";
import { Technologies as MobileTechnologies } from "./components/sections/mobile/technologies";
import { Experience as MobileExperience } from "./components/sections/mobile/experience";
import { Projects as MobileProjects } from "./components/sections/mobile/projects";

import DesktopNavBar from "./components/navbars/desktopNavBar.tsx";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const windowWidth = useWindowWidth();

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Main content takes all space above navbar */}
      <main className="flex-grow overflow-auto relative" id="scroll-container">
        {windowWidth >= 640 ? (
          <div className="relative z-10">
            <DesktopTorstein></DesktopTorstein>
            <DesktopTechnologies></DesktopTechnologies>
            <DesktopExperience></DesktopExperience>
            <DesktopProjects></DesktopProjects>
            {/*
          <Footer />
          */}
            <Footer></Footer>

          </div>
        ) : (
          <div className="relative z-10">
            <MobileTorstein></MobileTorstein>
            <MobileTechnologies></MobileTechnologies>
            <MobileExperience></MobileExperience>
            <MobileProjects></MobileProjects>
            {/*
          <Footer />
          */}
          </div>
        )}
      </main>

      {/* Hovering navbar at the bottom */}
      {windowWidth >= 640 ? <DesktopNavBar /> : <div />}
    </div>
  );
}

export default App;
