import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import "./style.css";

export function Home() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <main className="home-content">
        <h1>teste da onde a main vai estar pc/mobile</h1>
        <p>os testes resultaram em tristeza :(</p>
      </main>
    </>
  );
}
