import styled, { keyframes } from "styled-components";

const animated = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledSVGContainer = styled.div`
  width: 100%;
  max-width: 62.5rem;
  height: auto;
  margin: 0 auto;
  position: relative;
  animation: ${animated} 1s;

  svg {
    width: 100%;
    height: auto;
    max-height: 100vh;
    z-index: -1;
  }

  path {
    fill: var(--color-gray-1);
    stroke: var(--color-blue-2);
    stroke-width: 0.7px;
    transition: fill 0.5s ease;
  }

  .brazil {
    fill: #8ae7b9;
    stroke: var(--color-blue-2);
    stroke-width: 0.7px;
    transition: fill 0.5s ease;
  }

  .brazil:hover {
    fill: #44dd8c;
  }

  .eastern-pacific {
    fill: #73aae6;
  }

  .eastern-pacific:hover,
  .eastern-pacific.hovered {
    fill: #1a6fca;
  }

  .caribbean {
    fill: #fcd1ba;
  }

  .caribbean:hover,
  .caribbean.hovered {
    fill: #fc9964;
  }

  .western-indian {
    fill: #e85c5c;
  }

  .western-indian:hover,
  .western-indian.hovered {
    fill: #e81212;
  }

  .ropme {
    fill: #a69fe0;
  }

  .ropme:hover,
  .ropme.hovered {
    fill: #6055e0;
  }

  .red-sea {
    fill: #d96a87;
  }

  .red-sea:hover,
  .red-sea.hovered {
    fill: #c61d4a;
  }

  .south-asia {
    fill: #e2dca1;
  }

  .south-asia:hover,
  .south-asia.hovered {
    fill: #e2d92b;
  }

  .east-asia {
    fill: #baf2ea;
  }

  .east-asia:hover,
  .east-asia.hovered {
    fill: #98dad1;
  }

  .australia {
    fill: #cdefc6;
  }

  .australia:hover,
  .australia.hovered {
    fill: #24bd2c;
  }

  .pacific {
    fill: #dec1dd;
  }

  .pacific:hover,
  .pacific.hovered {
    fill: #be84bc;
  }
`;

export const StyledRegion = styled.div`
  color: var(--color-gray-3);
  animation: ${animated} 2s;

  .region-header {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: var(--color-gray-3);
    }

    p {
      font-size: 1.25rem;
      color: var(--color-gray-3);
    }
  }

  @media (max-width: 768px) {
    .region-header {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      justify-items: center;

      img {
        width: 80%;
        height: auto;
      }
    }
  }

  .countries-included {
    background-color: #e0f5fc;
    width: 20rem;
    min-height: 31.875rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    justify-self: start;
    align-items: flex-start;

    h3 {
      color: var(--color-blue-1);
      font-size: 1.875rem;
    }

    h3 > span {
      color: var(--color-blue-1);
      border-bottom: 1px solid var(--color-blue-1);
      padding-bottom: 0.625rem;
    }

    p {
      color: var(--color-gray-2);
      text-align: start;
      margin-top: 0.625rem;
    }
  }

  @media (max-width: 768px) {
    .countries-included {
      justify-self: center;
    }
  }

  .regional-context {
    width: 100vw;
    background-color: #ecf9fd;
  }

  .regional-context-content {
    width: 70%;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    min-height: 21.875rem;

    h3 {
      color: var(--color-blue-1);
      font-size: 3.25rem;
      display: inline-block;
      font-weight: 600;
      margin-bottom: 1.875rem;
    }

    h3 > span {
      color: var(--color-blue-1);
      border-bottom: 2px solid var(--color-blue-1);
      padding-bottom: 0.9375rem;
    }

    h4 {
      color: var(--color-blue-1);
      font-size: 1.875rem;
      margin-left: 0.9375rem;
      font-weight: 500;
    }

    p {
      margin-top: 1.25rem;
      color: var(--color-gray-2);
      line-height: 1.5625rem;
      margin-left: 0.9375rem;
    }
  }

  .additional-info-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3.75rem;
  }

  @media (max-width: 768px) {
    .regional-context-content > h3 > span {
      padding-bottom: 0.125rem;
    }

    .additional-info-item {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .regional-context-content {
      width: 90%;

      h3 {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }

  .key-numbers {
    background-color: #d8f3fb;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 1.25rem;

    h3 {
      color: var(--color-blue-1);
      font-size: 3.125rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
    }
  }

  .key-numbers-content {
    display: flex;
    flex-wrap: wrap;
    min-height: 18.75rem;
    gap: 2.5rem;
    align-items: center;
    justify-content: space-between;

    div {
      max-width: 12.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 1.25rem;
    }

    h4 {
      font-size: 3.125rem;
      font-weight: 600;
      color: var(--color-blue-1);
    }

    p {
      display: flex;
      align-items: center;
      color: var(--color-blue-1);
      font-size: 1.25rem;
      width: 100%;
      height: 6.25rem;
    }
  }

  @media (max-width: 768px) {
    .key-numbers {
      flex-wrap: wrap;
      gap: 1.25rem;
    }

    .key-numbers-content {
      flex-direction: column;
      align-items: center;
    }

    .key-numbers-content > div {
      max-width: 100%;
      margin-bottom: 1.25rem;
    }
  }

  .back-to-map {
    background-color: var(--color-blue-1);
    margin: 1.25rem;
    display: flex;
    align-items: center;
    padding: 0.625rem 1.25rem 0.625rem 0.625rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .back-to-map > img {
    width: 2rem;
    height: 2rem;
    transition: transform 0.3s ease;
  }

  .back-to-map:hover {
    background-color: #0b6cb1;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  }

  .section {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70%;
    }
  }
`;
