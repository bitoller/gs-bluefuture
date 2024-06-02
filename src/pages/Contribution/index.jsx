import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import { StyledContribution } from "./style";

export function Contribution() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledContribution>
        <h1>eu sou a doe screen</h1>
      </StyledContribution>
      <BackToTopArrow />
      <Footer />
    </>
  );
}
