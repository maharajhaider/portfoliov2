const education = [
  {
    school: "University of British Columbia",
    location: "Vancouver, BC",
    description: " Bachelor of Science in Computer Science ",
    bullets: [
      "CGPA 3.9/4.0",
      "International Major Entrance Scholar, Outstanding International Student awards amounting to $100,000",
    ],
    date: "Sep 2021 - Present",
  },
];

const Education = () => {
  return (
    <section id="education" className="flex flex-col items-center  text-white ">
      <div className="mx-12 md:mx-24 py-12 w-[80%]">
        <hr className="p-12 mt-12" />
        <h2 className="text-4xl font-extralight mb-12">EDUCATION</h2>
        <div className="flex flex-col gap-14">
          {education.map((school, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-2xl md:text-3xl">{school.school}</h2>
                  <h3 className="text-sm md:text-lg">{school.date}</h3>
                </div>
                <h3 className="text-blue-500 text-sm md:text-lg">
                  {school.location}
                </h3>
                <p className="text-sm md:text-lg">{school.description}</p>
                <ul className="list-disc pl-5">
                  {school.bullets.map((bullet, index) => {
                    return (
                      <li key={index} className="mb-3">
                        {bullet}
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
export default Education;
