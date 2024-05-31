import coralReef1 from "../../assets/coral-reef-1.jpg";
import coralReef2 from "../../assets/coral-reef-2.jpg";
import coralReef3 from "../../assets/coral-reef-3.jpg";
import coralReef4 from "../../assets/coral-reef-4.jpg";
import coralReef5 from "../../assets/coral-reef-5.jpg";
import coralReef6 from "../../assets/coral-reef-6.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.imgcarousel.css";

export function ImagesCarousel() {
  const items = [
    <img
      src={coralReef1}
      alt={"imagem de um recife de corais"}
      className="carousel-img"
    />,
    <img
      src={coralReef2}
      alt={"imagem de um recife de corais"}
      className="carousel-img"
    />,
    <img
      src={coralReef3}
      alt={"imagem de um recife de corais"}
      className="carousel-img"
    />,
    <img
      src={coralReef4}
      alt={"imagem de um recife de corais"}
      className="carousel-img"
    />,
    <img
      src={coralReef5}
      alt={"imagem de um recife de corais"}
      className="carousel-img"
    />,
    <img
      src={coralReef6}
      alt={"imagem de um recife de corais"}
      className="carousel-img"
    />,
  ];

  const responsive = {
    0: {
      items: 1,
      itemsFit: "fill",
    },
  };

  return (
    <div className="carousel-container">
      <AliceCarousel
        items={items}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={3000}
        disableButtonsControls={true}
        itemsInSlide={6}
        disableDotsControls={true}
        responsive={responsive}
        animationType="fadeout"
      />
    </div>
  );
}
