import torsteinnew from "../assets/torstein-2025.png";

interface Props {
  text: string;
}

const CircularText: React.FC<Props> = ({ text }) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Image first so text is on top */}
      <image
        href={torsteinnew}
        x="-5"
        y="-4"
        width="110"
        height="110"
        clipPath="circle(40px at center)"
      />

      {/* Path for circular text */}
      <path
        id="circlePath" // fixed to match exactly
        d="
          m 10, 50
          a 40,40 0 1,1 80,0
          40,40 0 1,1 -80,0
        "
        fill="none"
        stroke="none"
      />

      {/* Text around the circle */}
      <text fill="white">
        <textPath href="#circlePath" startOffset="33%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CircularText;
