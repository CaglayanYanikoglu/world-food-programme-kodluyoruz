import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);
  console.log('general state context:', context);
  const {theme, toggleTheme} = context;

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? <span>🌞</span> : <span>🌙</span>}
    </button>
  );
};

export default ThemeSwitcher;
