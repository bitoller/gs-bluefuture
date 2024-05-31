import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  > h1 {
    font-size: 30px;
    color: var(--color-primary);
    font-weight: 500;
  }

  .group-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: auto;
  }

  .group-container > h2 {
    color: var(--color-accent);
    font-size: 30px;
  }

  .group-member {
    display: flex;
    justify-content: center;
    width: 25%;
    height: auto;
    padding: 30px;
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    animation-duration: 5s;
    animation-fill-mode: both;
  }

  .member-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }

  .member-info-name {
    color: var(--color-gray-1);
    font-size: 30px;
    font-weight: 700;
  }

  .member-info-stack {
    color: var(--color-gray-1);
    font-size: 20px;
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
      min-width: 226px;
      min-height: 451px;
    }
  }
`;
