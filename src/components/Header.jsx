import React from "react";

const Header = () => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    const siteElement = document.getElementById("site");
    const heroElement = document.getElementById("hero");
    const projectsElement = document.getElementById("projects");
    const experienceElement = document.getElementById("experience");
    const educationElement = document.getElementById("education");
    const contactElement = document.getElementById("contact");

    let elementArray = [
      siteElement,
      heroElement,
      projectsElement,
      experienceElement,
      educationElement,
      contactElement,
    ];

    if (theme === "dark") {
      setTheme("light");
      elementArray.forEach((element) => {
        element.classList.add("bg-white", "text-black");
        element.classList.remove("bg-none", "text-white");
      });
    } else {
      setTheme("dark");
      elementArray.forEach((element) => {
        element.classList.add("bg-none", "text-white");
        element.classList.remove("bg-white", "text-black");
      });
    }
  };

  return (
    <nav className="bg-[#111111] sticky top-0 z-50 flex justify-between text-white text-lg md:text-xl p-6 md:p-8 md:px-24 shadow-lg gap-4 md:gap-8 backdrop-blur-md bg-opacity-80">
      <a href="#" className="hover:text-blue-400 ease-in-out duration-500">
        MH
      </a>
      <div className="flex gap-4 md:gap-8">
        <ul className="flex gap-4 md:gap-8">
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 ease-in-out duration-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-blue-400 ease-in-out duration-500"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-blue-400 ease-in-out duration-500"
            >
              Education
            </a>
          </li>
        </ul>
        <label className="swap swap-rotate hover:text-blue-400 ease-in-out duration-500">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleTheme} />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-5 md:w-7 h-5 md:h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-5 md:w-7 h-5 md:h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
};
export default Header;
