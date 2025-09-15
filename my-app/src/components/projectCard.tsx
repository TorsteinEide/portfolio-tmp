interface props {
  title: string;
  description: string;
  images: string[] | null;
  technologies: string[];
}

const ProjectCard: React.FC<props> = ({
  title,
  description,
  images,
  technologies,
}) => {
  return (
    <div
      className={`grid grid-cols-2 grid-row-3 bg-bg p-4 rounded-xs gap-4 border-[1.5px] border-accent overflow-hidden h-fill sm:w-[49%] w-full`}
    >
      <div className="col-span-2 flex flex-row justify-between">
        <div>
          <h2 className="pb-4">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className={`col-span-2 grid grid-cols-2  gap-2 w-full `}>
        {images &&
          images
            .slice(0, 4)
            .map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`project image ${index}`}
                className={`w-full h-full object-cover ${images!.length === 1 ? "col-span-2" : ""} `}
              />
            ))}
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full  text-accent items-end col-span-2">
        {technologies.map((tech, index) => {
          return <div key={index}>{tech}</div>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
