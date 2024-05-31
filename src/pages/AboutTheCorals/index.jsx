import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import "./style.css";

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
