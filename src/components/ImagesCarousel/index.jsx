import coralReef1 from "../../assets/coral-reefs/coral-reef-1.jpg";
import coralReef2 from "../../assets/coral-reefs/coral-reef-2.jpg";
import coralReef3 from "../../assets/coral-reefs/coral-reef-3.jpg";
import coralReef4 from "../../assets/coral-reefs/coral-reef-4.jpg";
import coralReef5 from "../../assets/coral-reefs/coral-reef-5.jpg";
import coralReef6 from "../../assets/coral-reefs/coral-reef-6.jpg";
import React from "react";
import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  StyledImagesCarousel,
  StyledCarouselItem,
  StyledTextOverlayLeft,
  StyledTextOverlayRight,
} from "./style.js";

export function ImagesCarousel({ height }) {
  const items = [
    {
      image: coralReef1,
      textLeft: "Belo recife de corais 1",
      textRight: "Exploração submarina",
    },
    {
      image: coralReef2,
      textLeft: "Belo recife de corais 2",
      textRight: "Vida marinha vibrante",
    },
    {
      image: coralReef3,
      textLeft: "Belo recife de corais 3",
      textRight: "Colorido e diversificado",
    },
    {
      image: coralReef4,
      textLeft: "Belo recife de corais 4",
      textRight: "Um mundo subaquático",
    },
    {
      image: coralReef5,
      textLeft: "Belo recife de corais 5",
      textRight: "Tesouro do oceano",
    },
    {
      image: coralReef6,
      textLeft: "Belo recife de corais 6",
      textRight: "Beleza natural",
    },
  ];

  const carouselItems = items.map((item, index) => (
    <StyledCarouselItem key={index}>
      <img
        src={item.image}
        alt={`imagem de um recife de corais ${index + 1}`}
        className="carousel-img"
      />
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

  ImagesCarousel.propTypes = {
    height: PropTypes.string,
  };

  return (
    <StyledImagesCarousel style={{ height: height }}>
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
