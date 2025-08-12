import LogoContainer from "../logoContainer";

function Technologies() {
  return (
    <div className="flex gap-2 flex-col  p-4 h-screen bg-off-bg">
      <h2 className="text-accent w-fit p-2 rounded-xs">Technologies</h2>
      <div className="flex flex-wrap w-20">
        <LogoContainer logo="0.0" color="#0F6A9D" title="temp"></LogoContainer>
      </div>
    </div>
  );
}

export default Technologies;
