import styled from "styled-components";

export const StyledHome = styled.main`
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

  .group-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    width: 100%;
    height: auto;
  }

  .group-container > h2 {
    color: var(--color-accent);
    font-size: 1.875rem;
  }

  .group-member {
    display: flex;
    justify-content: center;
    width: 25%;
    height: auto;
    padding: 1.875rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.3125rem 0.9375rem;
    border-radius: 10px;
  }

  .group-member > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .color-group-1 {
    background-color: var(--color-accent);
  }

  .color-group-2 {
    background-color: var(--color-primary);
  }

  .member-pic-container > img {
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 50%;
    animation-duration: 5s;
    animation-fill-mode: both;
  }

  .member-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
  }

  .member-info-name {
    color: var(--color-gray-1);
    font-size: 1.875rem;
    font-weight: 700;
  }

  .member-info-stack {
    color: var(--color-gray-1);
    font-size: 1.25rem;
  }

  .animate-left {
    animation: slideInLeft 2s forwards;
  }

  .animate-right {
    animation: slideInRight 2s forwards;
  }

  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 923px) {
    .group-member {
      min-width: 14.125rem;
      min-height: 28.1875rem;
    }
  }
`;
