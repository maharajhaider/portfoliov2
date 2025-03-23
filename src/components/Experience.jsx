import { useState } from "react";

const work_exp = [
  {
    company: "Amazon",
    thumbnail: "images/icons/jobs/amazon.png",
    role: "Incoming Software Developer Intern",
    bullets: [
  
    ],
    date: "May 2025 - Aug 2025",
  },
  {
    company: "Interac Corp",
    thumbnail: "images/icons/jobs/interac.png",
    role: "Software Developer Intern - Backend",
    bullets: [
      "Developed and maintained backend services for Canada’s largest real-time money transfer network using Java Spring Boot, ensuring high performance and scalability.",
      "Utilized PostgreSQL to design, optimize, and manage relational databases, ensuring data integrity and efficient querying for mission-critical applications.",
      "Deployed and managed containerized applications using Kubernetes, streamlining deployment pipelines",
      "Implemented messaging solutions using Apache ActiveMQ to enable communication and improve system decoupling for scalable, distributed services"
    ],
    date: "Jan 2025 - Apr 2025",
  },
  {
    company: "Rivian",
    thumbnail: "images/icons/jobs/rivian.png",
    role: "Software Engineer Intern",
    bullets: [
      "Implemented full-stack applications using Golang and React to automate stress testing and real-time app health monitoring, improving operational performance for multiple teams",
      "Implemented downstream CI/CD pipelines on GitLab for automated test execution, significantly improving test efficiency and reliability, resulting in a more streamlined development process",
      "Created GraphQL queries and WebSocket subscriptions for backend validation on Kubernetes pods, enabling real-time detection of upstream errors and improving system reliability.",
      "Designed test plans for new features and developed automated UI tests using Appium in Python and integrated AWS S3 for uploading test artifacts leading to a higher quality user experience",
    ],
    date: "May 2024 - Dec 2024",
  },
  {
    company: "Atimi Software",
    thumbnail: "images/icons/jobs/atimi.svg",
    role: "Software Developer Intern",
    bullets: [
      "Developed CLI applications to automate internal processes using Java, to increase developer productivity",
      "Automated mobile application testing in Java using TestNg, Appium, and Selenium web drivers to reduce regression testing time by 72%",
      "Automated applications deployment and integrated test automation using Jenkins to reduce development time",
      "Verified and tested RESTAPI responses using REST assured library, Charles Proxy, and POSTMAN",
      "Actively performed Functional, Regression, and exploratory testing using agile methodologies and Jira, decreasing user-reported bugs by 25%",
    ],
    date: "Jan 2023 - Aug 2023",
  },
  {
    company: "Hexa",
    thumbnail: "images/icons/jobs/hexa.png",
    role: "Software Developer Intern",
    bullets: [
      "Developed the content-platform’s front-end using React, HTML and CSS which displayed blogs in interactive ways",
      "Developed dashboards and maintained connections to visualize and analyze complex datasets using PowerBI,providing actionable insights to support strategic decision-making",
      "Integrated lazy loading by code-splitting to improve load times catering for a market of 3 million customers",
      "Collaborated with multiple teams using Git and closed 50 maintenance tickets to ensure seamless UI experience",
    ],
    date: "May 2022 - Aug 2022",
  },
  {
    company: "University of British Columbia",
    thumbnail: "images/icons/jobs/ubc.png",
    role: "Technical Support",
    bullets: [
      "Maintained servers for 55 labs assisting 60 faculty members to have a seamless research experience",
      "Resolved over 200 ServiceNow tickets with 80 percent success rate by ensuring effective communication",
      "Brainstormed ways to meet requirements of clients with utmost efficiency and affordability along with 9 co-workers",
    ],
    date: "Sep 2021 - Current",
  },
];

const Experience = () => {
  const [experience, setExperience] = useState(0);

  const selectExperience = (index) => {
    setExperience(index);
  };

  return (
    <section
      id="experience"
      className="flex flex-col items-center  text-white "
    >
      <div className="mx-12 md:mx-24 w-[80%]">
        <hr className="p-12 mt-12" />
        <h2 className="font-extralight text-4xl mb-12">EXPERIENCE</h2>
        <section className="flex flex-col md:flex-row justify-start items-start gap-12">
          <div className="flex flex-col">
            {work_exp.map((work, index) => {
              return (
                <figure
                  key={index}
                  className={`min-h-20 flex gap-4 items-center text-lg md:text-xl border-l-4 border-[#1F1E1E] cursor-pointer px-4 pr-24 py-4 text-nowrap ${
                    index === experience
                      ? "bg-[#1F1E1E] border-white text-white"
                      : ""
                  }`}
                  onClick={() => selectExperience(index)}
                >
                  <img
                    src={work.thumbnail}
                    alt={work.company}
                    className="w-12 h-full md:w-30 md:h-full"
                  />
                  <h3>{work.company}</h3>
                </figure>
              );
            })}
          </div>
          <div className="w-full">
            {work_exp.map((work, index) => {
              return (
                <div key={index}>
                  {index === experience && (
                    <section className="flex flex-col gap-4 min-w-full max-w-full">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <h2 className="text-2xl md:text-3xl">{work.company}</h2>
                        <h3 className="text-sm md:text-lg">{work.date}</h3>
                      </div>
                      <h3 className="text-blue-500 text-xl">{work.role}</h3>
                      <ul className="list-disc pl-5">
                        {work.bullets.map((bullet, index) => {
                          return (
                            <li key={index} className="mb-3">
                              {bullet}
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};
export default Experience;
