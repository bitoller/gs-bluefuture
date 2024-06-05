import styled from "styled-components";

export const StyledContribution = styled.main`
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

  p {
    color: var(--color-gray-3);
  }

  .help-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
  }

  h2 {
    font-size: 1.875rem;
    color: var(--color-primary);
    font-weight: 500;
  }

  .all-content-container {
    display: flex;
    gap: 1.875rem;
    width: 80%;
  }

  .all-text-container {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
  }

  .text-snippet {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  .text-snippet > img {
    width: 0.9375rem;
    height: auto;
  }

  .donate-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;
    background: radial-gradient(ellipse at bottom, #0d1d31 40%, #0c0d13 100%);
    height: auto;
    padding: 20px 0;
  }

  .donate-container-title {
    max-width: 800px;
    box-sizing: border-box;
    padding: 20px;
  }

  .donate-container-title > h3 {
    display: inline;
    background: var(--color-accent);
    color: #fff;
    margin-top: 10px;
    font-size: 2.5rem;
    line-height: 1.65;
    padding: 0 15px;
    border-radius: 3px;
    letter-spacing: 5px;
  }

  .donate-container-title > p {
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: 500;
    color: #fff;
  }

  .donate-levels {
    background-color: #fff;
    max-width: 510px;
    height: auto;
    border-radius: 5px;
  }
  .donate-levels > h4 {
    max-width: 100%;
    color: var(--color-accent);
    background-color: #212427;
    text-align: center;
    padding: 15px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 4px 4px 0 0;
  }

  .donate-choices {
    margin: 15px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 15px;
    border: 1px solid #212427;
    cursor: pointer;
  }

  .donate-choices:hover {
    background-color: var(--color-accent);
  }

  .donate-choices > img {
    grid-column: 1;
    grid-row: 1/-1;
  }

  .donate-choices > h5 {
    padding-top: 10px;
    font-size: 28px;
    color: #212427;
  }
  .donate-choices > p {
    width: 80%;
    color: #212427;
    justify-items: center;
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 1120px) {
    .trash-img {
      display: none;
    }
    .donate-container-title > h3 {
      font-size: 1.3rem;
    }
    .donate-container-title > p {
      font-size: 0.8rem;
    }
  }
`;
