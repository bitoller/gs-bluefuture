import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import "./style.css";

export function Home() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <main className="home-content">
        <h1>eu sou a home screen</h1>
      </main>
    </>
  );
}
