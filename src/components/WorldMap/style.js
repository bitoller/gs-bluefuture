import styled, { keyframes } from "styled-components";

const anima = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledSVGContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
  position: relative;
  animation: ${anima} 1s;

  svg {
    width: 100%;
    height: auto;
    max-height: 100vh;
    z-index: -1;
  }

  path {
    fill: #ffffff;
    stroke: #5199ba;
    stroke-width: 0.7px;
    transition: fill 0.5s ease;
  }

  .brazil {
    fill: #8ae7b9;
    stroke: #5199ba;
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
  color: #000;
  animation: ${anima} 2s;

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
      color: #000; /* Cor do texto preto */
    }

    p {
      font-size: 1.25rem;
      color: #000; /* Cor do texto preto */
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
    width: 320px;
    min-height: 510px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2rem;
    justify-self: start;
    align-items: flex-start;

    h3 {
      color: #0b468a;
      font-size: 30px;
    }

    h3 span {
      color: #0b468a;
      border-bottom: 1px solid #0b468a;
      padding-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #7a7a7a;
      text-align: start;
      margin-top: 10px;
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
    margin: 0 auto; /* Centraliza o elemento horizontalmente */
    padding: 2rem 0; /* Adiciona espaçamento vertical */
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 350px;

    h3 {
      color: #0b468a;
      font-size: 52px;
      display: inline-block; /* Permite que o border-bottom se ajuste ao tamanho do texto */
      font-weight: 600;
      margin-bottom: 30px;
    }

    h3 span {
      color: #0b468a;
      border-bottom: 2px solid #0b468a;
      padding-bottom: 15px;
    }

    h4 {
      color: #0b468a;
      font-size: 30px;
      margin-left: 15px;
      font-weight: 500;
    }

    p {
      margin-top: 20px;
      color: #7a7a7a;
      line-height: 25px;
      margin-left: 15px;
    }
  }

  .additional-info-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 60px;
  }

  @media (max-width: 768px) {
    .regional-context-content h3 span {
      padding-bottom: 2px;
    }

    .additional-info-item {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .regional-context-content {
      width: 90%;

      h3 {
        font-size: 32px;
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
    padding: 20px;

    h3 {
      color: #0b468a;
      font-size: 50px;
      font-weight: 600;
      margin-bottom: 20px; /* Adiciona margem inferior para separar do conteúdo abaixo */
    }
  }

  .key-numbers-content {
    display: flex;
    flex-wrap: wrap;
    min-height: 300px;
    gap: 40px;
    align-items: center;
    justify-content: space-between;

    div {
      max-width: 200px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 20px; /* Adiciona margem superior para ajustar a posição abaixo do h3 */
    }

    h4 {
      font-size: 50px;
      font-weight: 600;
      color: #0b468a;
    }

    p {
      display: flex;
      align-items: center;
      color: #0b468a;
      font-size: 20px;
      width: 100%;
      height: 100px;
    }
  }

  @media (max-width: 768px) {
    .key-numbers {
      flex-wrap: wrap;
      gap: 20px;
    }
    .key-numbers-content {
      flex-direction: column;
      align-items: center;
    }

    .key-numbers-content div {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }

  .back-to-map {
    background-color: #0b468a;
    margin: 20px;
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Adicionando transição para o box-shadow */
  }

  .back-to-map img {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
  }

  .back-to-map:hover {
    background-color: #0b6cb1;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3); /* Box shadow adicionado ao hover */
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
