import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const StyledBackToTopArrow = styled.div`
  position: fixed;
  bottom: 14.375rem;
  right: 1.25rem;
  width: 3.125rem;
  height: 3.125rem;
  cursor: pointer;
  z-index: 1000;
  animation: ${bounce} 2s infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8;
  }
`;
