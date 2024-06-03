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
    color: var(--color-gray-3);
  }

  .monitoring-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .first-section,
  .second-section,
  .third-section {
    display: flex;
    align-items: center;
    gap: 0.9375rem;
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
  }
`;
