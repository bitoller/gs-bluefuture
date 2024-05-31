import logo from "../../assets/blue-future-logo.png";
import dropdownWave from "../../assets/dropdown-wave.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.header.css";

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt={"logo da blue future"} className="img-fluid" />
      </div>
      <div className="dropdown-icon" onClick={toggleDropdown}>
        <img src={dropdownWave} alt={"dropdown menu icon"} />
      </div>
      <nav className={`custom-nav ${isDropdownOpen ? "open" : ""}`}>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          INÍCIO
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          CORAIS
        </NavLink>
        <NavLink
          to="/the_idea"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          A IDEIA
        </NavLink>
        <NavLink
          to="/donate"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          DOAÇÕES
        </NavLink>
      </nav>
    </header>
  );
}
