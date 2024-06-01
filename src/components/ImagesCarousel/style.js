import styled from "styled-components";

export const StyledImagesCarousel = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  overflow: hidden;
  position: relative;
  top: 0;
  z-index: -1;
  box-shadow: 0px 20px 16px 0px rgba(0, 0, 0, 0.1);

  .carousel-img {
    height: 100%;
    min-height: 43.75rem;
    width: 100%;
    object-fit: cover;
  }
`;
