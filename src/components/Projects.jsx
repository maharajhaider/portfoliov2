const projects = [
  {
    name: "Hospital Manager",
    thumbnail: "images/hospitalmanager.jpg",
    github: "https://github.com/maharajhaider/Hospital-Manager",
    description:
      "Hopsital management system to keep track of patient intake,records and appointments.",
    tech: ["JavaSwing", "Java"],
  },
  {
    name: "RecapTube",
    thumbnail: "images/RecapTube.jpg",
    github: "https://github.com/maharajhaider/RecapTube",
    description:
      "RecapTube is a web app designed to autogenerate notes from YouTube videos transcripts",
    tech: ["ReactJS", "Tailwind", "NodeJs", "ExpressJS"],
  },
  {
    name: "Property Marketplace",
    thumbnail: "images/property-lister.jpg",
    github: "https://github.com/maharajhaider/Property-Lister",
    description:
      "Recreated a sudoku solver using the recursive backtracking algorithm using an ArrayList to store positions.",
    tech: ["Java", "JavaSwing", "SQL", "JDBC", "OracleDB"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white flex flex-col items-start min-h-screen 3xl:min-h-min pt-12 mt-12 sm:mt-0 md:mt-0"
    >
      <h2 className=" font-extralight mx-12 md:mx-24 text-4xl py-12">
        PROJECTS
      </h2>
      <div className="flex justify-center mx-12 md:mx-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 items-center justify-center gap-12 sm:w-[50%] md:w-[100%] lg:w-[90%] 3xl:w-[80%]">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                id={index}
                className="group flex flex-col gap-6 h-full bg-gray-900 rounded-2xl transition-all ease-out hover:-translate-y-2 hover:scale-100 duration-300 hover:shadow-3xl"
              >
                <a
                  href={project.link || project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src={project.thumbnail}
                    className="w-full rounded-t-2xl active:opacity-80"
                    alt={`${projects.name}`}
                  />
                </a>
                <div className="flex justify-between items-center px-4">
                  <h2 className="text-white font-bold text-2xl group-hover:text-blue-400">
                    {project.name}
                  </h2>
                  <div className="flex gap-2 justify-center items-center">
                    {project.link && (
                      <a
                        href={project.link}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="images/icons/link.png"
                          alt="link icon"
                          className="w-6 h-6 hover:opacity-50"
                        />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="images/icons/github.png"
                          alt="github icon"
                          className="w-6 h-6 hover:opacity-50"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 px-4 3xl:h-12">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 px-4 pb-4">
                  {project.tech.map((tech, index) => {
                    return (
                      <li key={index} className="text-blue-400 font-semibold">
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
