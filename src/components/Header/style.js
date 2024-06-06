import waveMenuTop from "../../assets/backgrounds/wave-menu-top.svg";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5625rem;
  padding: 1.25rem;
  background-image: url(${waveMenuTop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 13rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2000;

  .img-fluid {
    width: 80%;
    height: auto;
  }

  .custom-nav {
    display: flex;
    gap: 1.875rem;
  }

  .custom-nav > a {
    font-size: 1.625rem;
    font-weight: 700;
    font-family: var(--font-family-3);
    transition: color 0.3s;
    position: relative;
  }

  .custom-nav > a:hover {
    color: var(--color-primary);
  }

  .custom-nav > a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.125rem;
    width: 100%;
    height: 0.125rem;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  .custom-nav > a.active-link::after {
    background-color: var(--color-accent);
  }

  .dropdown-icon {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 1311px) {
    .custom-nav {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      background-color: rgba(0, 0, 0, 0.8);
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      padding: 1.25rem;
      z-index: 1000;
    }

    .custom-nav.open {
      display: flex;
    }

    .dropdown-icon {
      display: block;
      top: 1rem;
      right: 1rem;
    }

    .dropdown-icon > img {
      height: 1.875rem;
      width: auto;
      transition: transform 0.3s;
    }
  }
`;
