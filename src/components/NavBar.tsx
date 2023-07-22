import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { ThemesColors, useTheme } from "../ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav
      className={`flex items-center justify-between p-4 ${
        isDarkMode
          ? `${ThemesColors.DarkTheme.background} ${ThemesColors.DarkTheme.font} `
          : `${ThemesColors.Light.background} ${ThemesColors.Light.font} `
      } shadow-lg`}
    >
      <div className="text-2xl font-bold">Your Logo</div>

      <div className="md:hidden">
        <RiMenuLine className="text-xl cursor-pointer" />
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Toggle Dark/Light Mode */}
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={25}
      />
    </nav>
  );
};

export default NavBar;
