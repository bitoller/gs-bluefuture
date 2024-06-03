import styled from "styled-components";

export const StyledAbout = styled.main`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;

  > h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    font-weight: 500;
  }

  .about-corals {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
  }

  .about-corals > p {
    color: black;
  }

  .coral-benefits-container {
    width: 70%;
    height: auto;
    text-align: center;
    background-color: var(--color-primary);
    border-radius: 10px;
  }

  .coral-benefits-container > img {
    width: 90%;
    height: auto;
  }

  > h2 {
    font-size: 30px;
    color: var(--color-accent);
    font-weight: 500;
  }
`;
