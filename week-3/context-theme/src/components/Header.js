import React, { useContext } from "react";

import Navbar from "./Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemeContext from "../context/ThemeContext";


const Header = () => {
  const { name, setName } = useContext(ThemeContext);

  const changeName = () => {
    setName(name === "Default Name" ? "Kodluyoruz" : "Default Name");
  }
  return (
    <>
      <header>
        <Navbar />
        <ThemeSwitcher />
      </header>
      <div>
        <h1 style={{ textAlign: 'center' }}>{name}</h1>
        <button onClick={changeName}>Change name</button>
      </div>
    </>
  )
};

export default Header;
