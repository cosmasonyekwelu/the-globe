import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const options = [
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
    "...",
  ];

  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  return (
    <div
      onClick={() => {
        setToggleDropdown(!toggleDropdown);
      }}
      className="dropdown-display d-flex align-items-center gap-5 shadow p-3 rounded-2 bg-elements custom-text-color position-relative"
    >
      <p className="mb-0">{selectedRegion}</p>
      <RiArrowDownSLine
        style={{
          transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
          transition: "0.5s ease-in-out",
        }}
      />

      {/* Conditional Rendering uses logical and to function */}
      {toggleDropdown && (
        <ul className="position-absolute dropdown-options bg-elements px-0 py-2 rounded-2">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setSelectedRegion(
                    option === "..." ? "Filter By Region" : option
                  );
                  filterByRegion(option);
                }}
                className="px-3 py-1"
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
