import React, { useState } from "react";
import "./ThemeProvider.css";

function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`theme-provider ${isDarkTheme ? "dark-theme" : ""}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Toggle Theme
      </button>
      {children}
    </div>
  );
}

export default ThemeProvider;
