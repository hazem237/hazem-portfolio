import React from "react";
import { ThemesColors, useTheme } from "../ThemeContext";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const HomePage: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center h-screen p-8 ${
        isDarkMode
          ? `${ThemesColors.DarkTheme.background} ${ThemesColors.DarkTheme.font} `
          : `${ThemesColors.Light.background} ${ThemesColors.Light.font} `
      }`}
    >
      {/* Left side - Title */}
      <div className="text-3xl md:text-6xl font-bold text-black w-full md:w-1/2 h-full text-center flex flex-col justify-center items-center p-8">
        <span
          className={`${
            isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
          }`}
        >
          Crafting Digital Dreams{" "}
        </span>
        <span
          className={`text-xl mt-4 mb-3 ${
            isDarkMode ? ThemesColors.DarkTheme.font : ThemesColors.Light.font
          }`}
        >
          Hazem Haddad's Journey as a Developer and Graphic Designer Test 
        </span>
        <div className="h-2 w-28 mt-4 bg-gold md:bg-black"></div>
        <div>
          <button
            className={`${
              isDarkMode
                ? ThemesColors.Blue.background
                : ThemesColors.Golden.background
            } text-xl p-3 rounded-md hover:bg-yellow-600 transition`}
          >
            Preview Resume
          </button>
        </div>
      </div>
      {/* Right side - Profile Image */}
      <div className="mt-8 md:mt-0 md:ml-16 md:flex-shrink-0 w-full md:w-1/2 h-full flex justify-around items-center ">
        <div
          className={`w-1/2 h-1/2 transition-all duration-700 ${
            isDarkMode
              ? ThemesColors.Blue.background
              : ThemesColors.Golden.background
          } relative flex justify-start items-center ${
            isDarkMode
              ? "rounded-full md:rounded-none"
              : "rounded-none md:rounded-full"
          }  `}
          style={{
            border: `8px solid ${
              isDarkMode
                ? ThemesColors.Light.background
                : ThemesColors.DarkTheme.background
            }`,
          }}
        >
          <img
            src={require("./profile-image.png")}
            alt="Profile"
            className="h-fit w-fit object-cover rounded-full"
          />
        </div>
        {/* Social Media Icons */}
        <div className="hidden md:flex flex-col justify-between items-center h-1/2 mx-4">
          <a
            href="https://www.linkedin.com/in/hazem-haddad-726aa1174/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center hover:text-yellow-700"
          >
            <FaLinkedin
              className={`text-4xl ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              }`}
            />
            <hr
              className={`w-6 h-1 ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              } my-2`}
            />
          </a>
          <a
            href="https://www.instagram.com/hazem.haddad2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center hover:text-yellow-700"
          >
            <FaInstagram
              className={`text-4xl ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              }`}
            />
            <hr
              className={`w-6 h-1 ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              } my-2`}
            />
          </a>
          <a
            href="https://github.com/hazem237"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center hover:text-yellow-700"
          >
            <FaGithub
              className={`text-4xl ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              }`}
            />
            <hr
              className={`w-6 h-1 ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              } my-2`}
            />
          </a>
          <a
            href="https://www.behance.net/hazemalhaddad/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center hover:text-yellow-700"
          >
            <FaBehance
              className={`text-4xl ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              }`}
            />
            <hr
              className={`w-6 h-1 ${
                isDarkMode ? ThemesColors.Blue.font : ThemesColors.Golden.font
              } my-2`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
