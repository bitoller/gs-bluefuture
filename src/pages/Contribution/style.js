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
`;
