import waveMenuBottom from "../../assets/backgrounds/wave-menu-bottom.svg";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5625rem;
  padding: 1.25rem;
  background-image: url(${waveMenuBottom});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 17rem;

  .img-fluid {
    width: 80%;
    height: auto;
  }

  .logo-menu-container {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }

  .custom-nav {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }

  .custom-nav > a {
    transition: color 0.3s;
  }

  .custom-nav > a:hover {
    color: var(--color-primary);
  }

  .sponsors-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    height: 60%;
  }

  .sponsors-container > img {
    width: 10%;
    height: auto;
  }

  @media (max-width: 1290px) {
    .sponsors-container > img {
      display: none;
    }
  }
`;
