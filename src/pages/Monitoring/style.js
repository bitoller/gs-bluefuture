import styled from "styled-components";

export const StyledMonitoring = styled.main`
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
    color: var(--color-gray-4);
    line-height: 1.875rem;
    font-size: 1.2rem;
  }

  .monitoring-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .first-section,
  .second-section,
  .third-section {
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 80%;
    opacity: 0;
    transform: translateX(0);
    transition: transform 1s, opacity 1s;
  }

  .first-section.animate-left,
  .third-section.animate-left {
    transform: translateX(0);
    opacity: 1;
  }

  .second-section.animate-right {
    transform: translateX(0);
    opacity: 1;
  }

  .first-section {
    transform: translateX(-100%);
  }

  .second-section {
    transform: translateX(100%);
  }

  .third-section {
    transform: translateX(-100%);
  }

  img {
    width: 80%;
  }

  .second-section > img,
  .third-section > img {
    border-radius: 50%;
    width: 255.48px;
    height: 255.48px;
  }

  .second-section-text-container,
  .third-section-text-container {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .second-section-text-container > h3,
  .third-section-text-container > h3 {
    color: var(--color-accent);
    font-size: 2rem;
  }

  @media (max-width: 923px) {
    .first-section,
    .second-section,
    .third-section {
      flex-direction: column;
      text-align: center;
      max-width: 90%;
    }

    p {
      font-size: 1rem;
      text-align: left;
    }
  }
`;
