import styled from "styled-components";

export const StyledAbout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;

  .about-corals {
    display: flex;
    padding: 1.5625rem 0;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    width: 100vw;
    background-color: var(--color-gray-5);
  }

  .about-corals > h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    font-weight: 500;
    text-align: center;
  }

  .about-corals > p {
    color: var(--color-gray-4);
    line-height: 1.875rem;
    text-align: left;
    max-width: 87.5rem;
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

  .coral-region {
    display: flex;
    padding: 1.5625rem 0;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    width: 100vw;
  }

  .coral-region > h2 {
    font-size: 1.875rem;
    color: var(--color-accent);
    font-weight: 500;
    text-align: center;
  }
`;
