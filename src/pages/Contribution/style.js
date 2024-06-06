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
    padding: 0.625rem;
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

  .text-snippet > p {
    font-size: 1.25rem;
  }

  .donate-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;
    background: linear-gradient(to bottom, #1c92d2, #f2fcfe);
    height: auto;
    padding: 1.8rem 0;
  }

  .donate-container-title {
    max-width: 50rem;
    box-sizing: border-box;
    padding: 1.25rem;
  }

  .donate-container-title > h3 {
    display: inline;
    background: var(--color-accent);
    color: var(--color-gray-1);
    margin-top: 0.625rem;
    font-size: 2.5rem;
    line-height: 1.65;
    padding: 0 0.9375rem;
    border-radius: 3px;
    letter-spacing: 0.3125rem;
    font-family: var(--font-family-4);
  }

  .donate-container-title > p {
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: 500;
    color: var(--color-gray-1);
    font-family: var(--font-family-2);
  }

  .donate-levels {
    background-color: var(--color-gray-1);
    max-width: 31.875rem;
    height: auto;
    border-radius: 5px;
  }

  .donate-levels > h4 {
    max-width: 100%;
    color: var(--color-accent);
    background-color: var(--color-gray-6);
    text-align: center;
    padding: 0.9375rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 4px 4px 0 0;
  }

  .donate-choices {
    margin: 0.9375rem;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 0.9375rem;
    border: 1px solid var(--color-gray-6);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .donate-choices.selected {
    background-color: var(--color-accent);
  }

  .donate-choices:hover {
    border: 1px solid var(--color-accent);
  }

  .donate-choices > img {
    grid-column: 1;
    grid-row: 1/-1;
  }

  .donate-choices > h5 {
    padding-top: 0.625rem;
    font-size: 1.5625rem;
    font-weight: 500;
    color: var(--color-gray-6);
    font-family: var(--font-family-4);
  }

  .donate-choices > p {
    width: 80%;
    color: var(--color-gray-6);
    justify-items: center;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: var(--font-family-1);
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

    .donate-levels {
      width: 90%;
    }

    .donate-choices > h5 {
      font-size: 1.125rem;
    }

    .donate-choices > p {
      font-size: 0.75rem;
    }
  }
`;
