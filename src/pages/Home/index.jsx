import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import "./style.css";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <ImagesCarousel />
      </main>
    </>
  );
}
