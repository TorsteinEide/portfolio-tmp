interface props {
  logo: string; // Make into image of some sort
  color: string;
  title: string;
}

const LogoContainer: React.FC<props> = ({ logo, color, title }) => {
  return (
    <div className="text-hover flex flex-col items-center">
      <div
        className={`border-1 border-accent min-w-14 min-h-14 rounded-md bg-[${color}] flex justify-center items-center `}
      >
        {logo}
      </div>
      {title}
    </div>
  );
};

export default LogoContainer;
