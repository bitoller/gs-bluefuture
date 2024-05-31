import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import "./style.css";

export function Idea() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <main className="idea-content">
        <h1>eu sou a ideias screen</h1>
      </main>
    </>
  );
}
