import { Header } from "../../components/Header/index.header";
import { ImagesCarousel } from "../../components/ImagesCarousel/index.imgcarousel";
import "./style.aboutcorals.css";

export function About() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <main className="about-content">
        <h1>eu sou a corais screen</h1>
      </main>
    </>
  );
}
