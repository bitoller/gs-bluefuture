import logo from "../../assets/blue-future-logo.png";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-5">
      <div className="logo-container">
        <img src={logo} alt={"logo da blue future"} className="img-fluid" />
      </div>
      <nav className="navbar d-flex gap-4">
        <Link to="/home">Início</Link>
        <Link to="/about">Corais</Link>
        <Link to="/the_idea">A ideia</Link>
        <Link to="/donate">Doações</Link>
      </nav>
    </header>
  );
}

/* TODO: menu dropdown para telas menores */