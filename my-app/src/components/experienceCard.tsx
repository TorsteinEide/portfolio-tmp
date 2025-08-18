interface props {
  logo: string;
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
}

const ExperienceCard: React.FC<props> = ({
  logo,
  company,
  title,
  description,
  startDate,
  endDate,
  technologies,
}) => {
  return (
    <div
      className={`border-[1.5px] border-accent  rounded-xs bg-off-bg flex flex-row p-4 gap-4`}
    >
      <img src={logo} alt="Experience Logo" className="max-w-24 max-h-24" />
      <div>
        <h3 className="text-hover">
          {company} - {title}
        </h3>
        <div className="pb-4">
          {startDate} - {endDate}
        </div>
        <p className="text-hover">{description}</p>

        <div className="flex flex-row flex-wrap pt-4 gap-4 w-full">
          {technologies.map((tech, index) => {
            return <div key={index}>{tech}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
