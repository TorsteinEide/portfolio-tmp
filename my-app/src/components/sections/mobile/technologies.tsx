import LogoContainer from "../../logoContainer";
import cslogo from "../../../assets/cslogo.png";
import godotlogo from "../../../assets/godotlogo.png";
import javalogo from "../../../assets/javalogo.png";
import reactlogo from "../../../assets/reactlogo.png";
import unitylogo from "../../../assets/unitylogo.png";
import tailwindlogo from "../../../assets/tailwindlogo.png";
import springbootlogo from "../../../assets/springbootlogo.png";
import figmalogo from "../../../assets/figmalogo.png";
import tslogo from "../../../assets/tslogo.png";

export const Technologies = () => {
  return (
    <div
      id="technologies"
      className="flex gap-2 flex-row  p-4 h-fit bg-off-bg  2xl:px-56 w-screen"
    >
      <div className="py-24 flex flex-col justify-between w-screen ">
        <div>
          <h2 className="text-hover p-2 text-center">Technologies</h2>
          <p className="text-accent p-2 max-w-96 text-center">
            I’m a fullstack developer building applications that are fast,
            intuitive, and easy to maintain. I enjoy writing clean code and
            making different technologies work smoothly together.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap justify-evenly gap-8 pt-6">
            <LogoContainer
              logo={cslogo}
              size="w-24 h-24"
              color="rgba(104, 33, 122, 0.2)"
              title="C#"
            />
            <LogoContainer
              logo={figmalogo}
              size="w-10 h-10"
              color="rgba(242, 78, 30, 0.3)"
              title="Figma"
            />
            <LogoContainer
              logo={null}
              color="rgba(81, 43, 212, 0.3)"
              title=".NET"
            />
            <LogoContainer
              logo={javalogo}
              size="h-12 w-12"
              color="rgba(237, 139, 0, 0.3)"
              title="Java"
            />
            <LogoContainer
              logo={tslogo}
              color="rgba(49, 120, 198, 0.3)"
              title="TypeScript"
            />
            <LogoContainer
              logo={tailwindlogo}
              color="rgba(56, 178, 172, 0.2)"
              title="Tailwind"
            />
            <LogoContainer
              logo={unitylogo}
              size="h-14 w-14"
              color="rgba(0, 0, 0, 0.2)"
              title="Unity"
            />
            <LogoContainer
              logo={godotlogo}
              color="rgba(125, 142, 157, 0.5)"
              title="Godot"
            />
            <LogoContainer
              logo={springbootlogo}
              color="rgba(50, 220, 179,  0.3)"
              title="Spring"
            />
            <LogoContainer
              logo={reactlogo}
              color="rgba(97, 218, 251, 0.2)"
              title="REACT"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
