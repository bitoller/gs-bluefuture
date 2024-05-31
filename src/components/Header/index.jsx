import logo from "../../assets/blue-future-logo.png";
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-5">
      <div className="logo-container">
        <img src={logo} alt={"logo da blue future"} className="img-fluid" />
      </div>
      <nav className="navbar d-flex gap-4">
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

/* TODO: menu dropdown para telas menores */
