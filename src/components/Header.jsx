// import React from "react";
import SunIcon from "../assets/images/icon-sun.svg";
import { useContext } from "react";
import MoonIcon from "../assets/images/icon-moon.svg";
import { themeContext } from "../App";

// eslint-disable-next-line react/prop-types
export default function Header({ handleMode }) {
  const mode = useContext(themeContext);
  const theme = {
    bg:
      mode === "light"
        ? "bg-mobileLight md:bg-desktopLight "
        : "bg-mobileDark md:bg-desktopDark",
  };

  return (
    <header
      className={`
      px-16 py-10 bg-cover ${theme.bg} h-48 md:flex md:justify-center md:h-64
       `}
    >
      <span className="flex items-center justify-between text-white text-2xl md:w-2/3">
        <h1>TodoApp</h1>
        <img src={mode === "light" ? MoonIcon : SunIcon} onClick={handleMode} />
      </span>
    </header>
  );
}
