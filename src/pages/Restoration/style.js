import pictureContainer from "../../assets/backgrounds/container-picture.png";
import styled from "styled-components";

export const StyledRestoration = styled.main`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;

  .container-picture {
    width: 70%;
    min-height: 25rem;
    background-image: url(${pictureContainer});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .container-picture > p {
    width: 45%;
  }

  p {
    line-height: 1.875rem;
    font-size: 1.2rem;
  }

  > h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    font-weight: 500;
  }

  .super-corals-container {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    width: 70%;
  }

  .super-corals-container > h2 {
    font-size: 1.875rem;
    color: var(--color-accent);
    font-weight: 500;
  }

  .super-corals-container > p {
    color: var(--color-gray-4);
  }

  .restoration-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    width: 100%;
  }

  .restoration-container p {
    color: #686868;
  }

  .first-container,
  .third-container,
  .fifth-container {
    background-color: #bbefff;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    width: 70%;
    border-radius: 10px;
    padding: 1.25rem;
    opacity: 0;
    transform: translateX(0);
    transition: transform 1s, opacity 1s;
  }

  .second-container,
  .fourth-container {
    background-color: #dcf6ff;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    width: 70%;
    border-radius: 10px;
    padding: 1.25rem;
    opacity: 0;
    transform: translateX(0);
    transition: transform 1s, opacity 1s;
  }

  .first-container > h3,
  .second-container > h3,
  .third-container > h3,
  .fourth-container > h3,
  .fifth-container > h3 {
    font-size: 1.5625rem;
    font-weight: 500;
    text-align: center;
    color: var(--color-primary);
  }

  .first-container > div,
  .second-container > div,
  .third-container > div,
  .fourth-container > div,
  .fifth-container > div {
    display: flex;
    align-items: center;
    gap: 1.875rem;
  }

  .first-container > div > img,
  .second-container > div > img,
  .third-container > div > img,
  .fourth-container > div > img,
  .fifth-container > div > img {
    display: flex;
    align-items: center;
    border-radius: 3px;
    width: 18.75rem;
    height: 13.75rem;
    object-fit: cover;
  }

  .monitoring-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .first-container.animate-left,
  .third-container.animate-left,
  .fifth-container.animate-left {
    transform: translateX(0);
    opacity: 1;
  }

  .second-container.animate-right,
  .fourth-container.animate-right {
    transform: translateX(0);
    opacity: 1;
  }

  .first-container {
    transform: translateX(-100%);
  }

  .second-container {
    transform: translateX(100%);
  }

  .third-container {
    transform: translateX(-100%);
  }

  .fourth-container {
    transform: translateX(100%);
  }

  .fifth-container {
    transform: translateX(-100%);
  }

  @media (max-width: 1490px) {
    .container-picture {
      width: 90%;
      background-image: none;
    }

    .container-picture > p {
      width: 100%;
      color: var(--color-gray-4);
    }

    > p {
      width: 90%;
      background-image: none;
      color: var(--color-gray-4);
      padding: 0;
    }

    .first-container > div,
    .second-container > div,
    .third-container > div,
    .fourth-container > div,
    .fifth-container > div {
      flex-wrap: wrap;
      justify-content: center;
    }

    .super-corals-container,
    .restoration-container {
      width: 90%;
    }

    .restoration-container > div {
      width: 100%;
    }
  }

  @media (max-width: 662px) {
    .first-container > div > img,
    .second-container > div > img,
    .third-container > div > img,
    .fourth-container > div > img,
    .fifth-container > div > img {
      width: 80%;
    }
  }
`;
