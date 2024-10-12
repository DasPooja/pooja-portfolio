import React, { useState, useEffect } from "react";
import "../styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          role="switch"
          name="dark"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="switch__icon">☀️</span>
        <span className="switch__icon">🌙</span>
        <span className="switch__inner"></span>
      </label>
    </>
    // <button className="theme-toggle" onClick={toggleTheme}>
    //   {theme === "light" ? "🌙" : "☀️"}
    // </button>
  );
};

export default ThemeToggle;
