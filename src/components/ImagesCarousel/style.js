import styled, { keyframes, css } from "styled-components";

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledImagesCarousel = styled.div`
  width: 100%;
  height: calc(100vh - 9rem);
  overflow: hidden;
  position: relative;
  top: 0;
  z-index: -1;

  .carousel-img {
    height: 100%;
    min-height: 48rem;
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledCarouselItem = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTextOverlayLeft = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  text-align: center;
  animation: ${fadeInLeft} 1s forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      display: none;
    `}

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const StyledTextOverlayRight = styled.div`
  position: absolute;
  top: 50%;
  right: 25%;
  transform: translate(50%, -50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  text-align: center;
  animation: ${fadeInRight} 1s forwards;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      display: none;
    `}

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
