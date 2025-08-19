import ProjectCard from "../projectCard";
import llandstart from "../../assets/languagelandstart.png";
import llandfeedback from "../../assets/languagelandfeedback.png";

function LanguageLandPresentation() {
  return (
    <ProjectCard
      images={[llandstart, llandfeedback]}
      title="LanguageLand"
      description="LanguageLand is a language learning game made for VR. It uses OpenAI's Whisper and TTS models so that players can have interactive conversations with an AI model. Players complete tasks, such as ordering food from a restaurant, and get feedback from the AI on how to improve their language skills."
      technologies={["Unity", "C#", "OpenAPI", "Whisper"]}
    ></ProjectCard>
  );
}

export default LanguageLandPresentation;
