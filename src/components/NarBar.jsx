import React, { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const NarBar = () => {
  // Defines the state "darkmpode" to manage dark mode, inializing from localestorage or defaulting to false incase of error
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  //   THIS CONDITION ENABLES THE DARK MODE AND LIGHT MODE
  // Applyng appropriate class to the body based on darkmode state

  if (darkMode) {
    // Removes lightmode class if darkmode is enabled
    document.body.classList.remove("light-mode");
  } else {
    // Add lightmode class if darkmode is disabled
    document.body.classList.add("light-mode");
  }

  const icon = darkMode ? <BsMoonFill /> : <BsMoon />;
  return (
    <nav className="navbar p-5 shadow bg-elements custom-text-color">
      <h3 className="mb-0">Where in the world?</h3>
      <div
        onClick={() => {
          // Toggle the lightmode class on the body
          document.body.classList.toggle("light-mode");
          //   Update the darkmode state with the opposite of what was in the darkmode previously
          setDarkMode(!darkMode);

          //   THIS CONDITION UPDATES THE LOCALESTORAGE

          //   Updates the localestorage with current mode either light or dark
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center gap-2"
      >
        {icon}
        <p className="mb-0">{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </nav>
  );
};

export default NarBar;
