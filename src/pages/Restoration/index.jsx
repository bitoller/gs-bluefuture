import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import { StyledRestoration } from "./style";

export function Restoration() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledRestoration>
        <h1>eu sou a tela de replantio</h1>
      </StyledRestoration>
      <BackToTopArrow />
      <Footer />
    </>
  );
}
