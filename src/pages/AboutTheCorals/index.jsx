import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { StyledAbout } from "./style.js";

export function About() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledAbout>
        <h1>eu sou a corais screen</h1>
      </StyledAbout>
    </>
  );
}
