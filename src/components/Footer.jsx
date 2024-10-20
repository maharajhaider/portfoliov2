import React from "react";

const footerElements = [
  {
    icon: "images/icons/github.png",
    link: "https://github.com/maharajhaider",
    alt: "github",
  },
  {
    icon: "images/icons/linked.png",
    link: "https://www.linkedin.com/in/maharajhaider/",
    alt: "linkedin",
  },
  {
    icon: "images/icons/email.png",
    link: "mailto:maharajhaider@hotmail.com",
    alt: "email",
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-4 bg-[#111111] backdrop-blur-md bg-opacity-80">
      <p className="text-sm md:text-lg text-white">
        Copyright © {new Date().getFullYear()} Maharaj Haider
      </p>
      <span className="flex gap-4 items-center justify-center">
        {footerElements.map((element, index) => {
          return (
            <a
              key={index}
              href={element.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={element.icon}
                alt={element.alt}
                className="w-5 h-5 hover:opacity-50"
              />
            </a>
          );
        })}
      </span>
    </footer>
  );
};
export default Footer;
