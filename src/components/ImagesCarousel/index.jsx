import React from "react";
import PropTypes from "prop-types";
import coralReef1 from "../../assets/coral-reefs/coral-reef-1.jpg";
import coralReef2 from "../../assets/coral-reefs/coral-reef-2.jpg";
import coralReef3 from "../../assets/coral-reefs/coral-reef-3.jpg";
import coralReef4 from "../../assets/coral-reefs/coral-reef-4.jpg";
import coralReef5 from "../../assets/coral-reefs/coral-reef-5.jpg";
import coralReef6 from "../../assets/coral-reefs/coral-reef-6.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  StyledImagesCarousel,
  StyledCarouselItem,
  StyledTextOverlayLeft,
  StyledTextOverlayRight,
} from "./style.js";

const defaultItems = [
  {
    image: coralReef1,
    textLeft: "Belo recife de corais 1",
    textRight: "Exploração submarina",
    alt: "Imagem de um belo recife de corais 1",
  },
  {
    image: coralReef2,
    textLeft: "Belo recife de corais 2",
    textRight: "Vida marinha vibrante",
    alt: "Imagem de um belo recife de corais 2",
  },
  {
    image: coralReef3,
    textLeft: "Belo recife de corais 3",
    textRight: "Colorido e diversificado",
    alt: "Imagem de um belo recife de corais 3",
  },
  {
    image: coralReef4,
    textLeft: "Belo recife de corais 4",
    textRight: "Um mundo subaquático",
    alt: "Imagem de um belo recife de corais 4",
  },
  {
    image: coralReef5,
    textLeft: "Belo recife de corais 5",
    textRight: "Tesouro do oceano",
    alt: "Imagem de um belo recife de corais 5",
  },
  {
    image: coralReef6,
    textLeft: "Belo recife de corais 6",
    textRight: "Beleza natural",
    alt: "Imagem de um belo recife de corais 6",
  },
];

export function ImagesCarousel({
  height = "calc(100vh - 5rem)",
  items = defaultItems,
}) {
  const carouselItems = items.map((item, index) => (
    <StyledCarouselItem key={index}>
      <img src={item.image} alt={item.alt} className="carousel-img" />
      <div>
        <StyledTextOverlayLeft>{item.textLeft}</StyledTextOverlayLeft>
        <StyledTextOverlayRight>{item.textRight}</StyledTextOverlayRight>
      </div>
    </StyledCarouselItem>
  ));

  const responsive = {
    0: {
      items: 1,
      itemsFit: "fill",
    },
  };

  return (
    <StyledImagesCarousel height={height}>
      <AliceCarousel
        items={carouselItems}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={5000}
        disableButtonsControls={true}
        itemsInSlide={1}
        disableDotsControls={true}
        responsive={responsive}
        animationType="fadeout"
      />
    </StyledImagesCarousel>
  );
}

ImagesCarousel.propTypes = {
  height: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      textLeft: PropTypes.string.isRequired,
      textRight: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
};

/* TODO: ver o que vai ser feito sobre as frases por img. talvez diminuir para frases por pagina. popular as frases */
/* TODO: arrumar o espaco entre as imagens do carrossel e o resto da pagina no responsivo */

/* creditos:
coral-reef-1: Credit: Brook Peterson / Ocean Image Bank
coral-reef-2: Credit: Renata Romeo / Ocean Image Bank
coral-reef-3: Credit: Cinzia Osele Bismarck / Ocean Image Bank
coral-reef-4: Credit: Gregory Piper / Ocean Image Bank
coral-reef-5: Credit: Kimberly Jeffries / Ocean Image Bank
coral-reef-6: Credit: Martin Colognoli / Ocean Image Bank
*/
