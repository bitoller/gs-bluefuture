import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 1.75rem;
    color: black;
  }

  .group-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 500px;
  }

  .group-container > a {
    width: 50%;
    height: 30%;
  }

  .group-member {
    display: flex;
    gap: 30px;
    align-items: center;
    width: 50%;
    height: 30%;
    box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.3125rem 0.9375rem;
    padding: 10px;
  }

  .member-pic-container > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid var(--color-accent);
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .member-info-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .member-info-name {
    color: var(--color-primary);
    font-size: 30px;
    font-weight: 700;
  }

  .member-info-stack {
    color: black;
    font-size: 20px;
  }

  .animate-left {
    animation: slideInLeft 1s forwards;
  }

  .animate-right {
    animation: slideInRight 1s forwards;
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
`;
