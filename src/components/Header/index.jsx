import logoBlueFuture from "../../assets/logos/logo-blue-future.png";
import dropdownWave from "../../assets/icons/dropdown-wave.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./style.js";

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledHeader>
      <div className="logo-container">
        <img
          src={logoBlueFuture}
          alt={"logo da blue future"}
          className="img-fluid"
        />
      </div>
      <div className="dropdown-icon" onClick={toggleDropdown}>
        <img src={dropdownWave} alt={"ícone de ondas"} />
      </div>
      <nav className={`custom-nav ${isDropdownOpen ? "open" : ""}`}>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          INÍCIO
        </NavLink>
        <NavLink
          to="/about_the_corals"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          CORAIS
        </NavLink>
        <NavLink
          to="/monitoring"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          MONITORAMENTO
        </NavLink>
        <NavLink
          to="/restoration"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          REPLANTIO
        </NavLink>
        <NavLink
          to="/contribution"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          CONTRIBUIÇÃO
        </NavLink>
      </nav>
    </StyledHeader>
  );
}
