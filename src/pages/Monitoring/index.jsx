import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import { StyledMonitoring } from "./style";

export function Monitoring() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledMonitoring>
        <h1>eu sou a tela de monitoramento</h1>
      </StyledMonitoring>
      <BackToTopArrow />
      <Footer />
    </>
  );
}
