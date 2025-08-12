import LogoContainer from "../logoContainer";
import cslogo from "../../assets/cslogo.png";
import godotlogo from "../../assets/godotlogo.png";
import javalogo from "../../assets/javalogo.png";
import reactlogo from "../../assets/reactlogo.png";
import unitylogo from "../../assets/unitylogo.png";
import tailwindlogo from "../../assets/tailwindlogo.png";
import springbootlogo from "../../assets/springbootlogo.png";
import figmalogo from "../../assets/figmalogo.png";
import tslogo from "../../assets/tslogo.png";

function Technologies() {
  return (
    <div className="flex gap-2 flex-row  p-4 h-screen bg-off-bg px-8">
      <div className="translate-y-42 flex flex-row justify-between w-screen">
        <div>
          <h2 className="text-hover p-2">Technologies</h2>
          <h3 className="text-hover p-2">some technologies i know</h3>
        </div>
        <div>
          <div className="flex flex-wrap w-100 h-100 justify-evenly gap-8">
            <LogoContainer
              logo={cslogo}
              color="rgba(104, 33, 122, 0.5)"
              title="C#"
            />
            <LogoContainer
              logo={figmalogo}
              color="rgba(242, 78, 30, 0.5)"
              title="Figma"
            />
            <LogoContainer
              logo={null}
              color="rgba(81, 43, 212, 0.5)"
              title=".NET"
            />
            <LogoContainer
              logo={javalogo}
              color="rgba(237, 139, 0, 0.5)"
              title="Java"
            />
            <LogoContainer
              logo={tslogo}
              color="rgba(49, 120, 198, 0.5)"
              title="TypeScript"
            />
            <LogoContainer
              logo={tailwindlogo}
              color="rgba(56, 178, 172, 0.5)"
              title="Tailwind"
            />
            <LogoContainer
              logo={unitylogo}
              color="rgba(0, 0, 0, 0.5)"
              title="Unity"
            />
            <LogoContainer
              logo={godotlogo}
              color="rgba(125, 142, 157, 0.5)"
              title="Godot"
            />
            <LogoContainer
              logo={springbootlogo}
              color="rgba(109, 179, 255, 0.5)"
              title="Spring"
            />
            <LogoContainer
              logo={reactlogo}
              color="rgba(97, 218, 251, 0.5)"
              title="REACT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
