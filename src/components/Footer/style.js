import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #893e3e; //obviamente trocar a cor teste
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5625rem;
  padding: 1.25rem;
  background-image: url("../../assets/wave-menu-bottom.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 13rem;

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
    width: 48%;
    height: 100%;
  }

  .sponsors-container > img {
    width: 9.375rem;
    height: auto;
  }
`;
