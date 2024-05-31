import { Header } from "../../components/Header/index.header";
import { ImagesCarousel } from "../../components/ImagesCarousel/index.imgcarousel";
import "./style.idea.css";

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
