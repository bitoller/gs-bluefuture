import styled from "styled-components";

export const StyledAbout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;

  .about-corals {
    display: flex;
    padding: 25px 0;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    width: 100vw;
    background-color: #effafe;
  }

  .about-corals > h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    font-weight: 500;
    text-align: center;
  }

  .about-corals > p {
    color: #333333;
    line-height: 30px;
    text-align: left;
    max-width: 1400px;
    width: 80%;
    font-size: 1.2rem;
  }

  .about-corals p.visible,
  .about-corals img.visible {
    opacity: 1;
  }

  .coral-benefits-container {
    width: 70%;
    height: auto;
    text-align: center;
    border-radius: 10px;
  }

  .coral-benefits-container > img {
    width: 90%;
    height: auto;
  }

  > h2 {
    font-size: 1.875rem;
    color: var(--color-accent);
    font-weight: 500;
    text-align: center;
  }
`;
