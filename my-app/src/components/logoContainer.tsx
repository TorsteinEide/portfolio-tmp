interface props {
  logo: string | null;
  size?: string;
  color: string;
  title: string | null;
}

const LogoContainer: React.FC<props> = ({ logo, color, title, size }) => {
  return (
    <div className="text-hover flex flex-col items-center">
      <div
        style={{ backgroundColor: color, borderColor: color }}
        className={`border-[1.5px] border-accent w-16 h-16 rounded-xs bg-[${color}] flex justify-center items-center `}
      >
        {logo != null ? (
          <img
            src={logo}
            alt="Tech logo"
            className={`object-contain ${size ?? "w-10 h-10"}`}
          />
        ) : (
          title
        )}
      </div>
      {title !== null ? title : ""}
    </div>
  );
};

export default LogoContainer;
