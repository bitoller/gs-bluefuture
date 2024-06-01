import backToTopArrow from "../../assets/arrow-up.svg";
import React from "react";
import { StyledBackToTopArrow } from "./style";

export function BackToTopArrow() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledBackToTopArrow onClick={scrollToTop}>
      <img src={backToTopArrow} alt={"ícone de uma seta apontando para cima"} />
    </StyledBackToTopArrow>
  );
}
