interface props {
  logo: string | null;
  color: string;
  title: string | null;
}

const LogoContainer: React.FC<props> = ({ logo, color, title }) => {
  return (
    <div className="text-hover flex flex-col items-center">
      <div
        style={{ backgroundColor: color, borderColor: color }}
        className={`border-[1.5px] border-accent min-w-16 min-h-16 rounded-xs bg-[${color}] flex justify-center items-center `}
      >
        {logo != null ? (
          <img
            src={logo}
            alt="Tech logo"
            className="p-4 size-16 object-cover"
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
