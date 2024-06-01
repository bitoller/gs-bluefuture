import styled from "styled-components";

export const StyledSVGContainer = styled.div`
  width: 100%;
  max-width: 1000px; /* Define a largura máxima do contêiner SVG */
  height: auto; /* Altura ajustável proporcionalmente à largura */
  margin: 0 auto; /* Centraliza o contêiner */
  position: relative;

  svg {
    width: 100%; /* Ocupa 100% da largura do contêiner */
    height: auto; /* Altura ajustável proporcionalmente à largura */
    max-height: 100vh; /* Altura máxima igual à altura da tela */
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
    fill: #44dd8c; /* Altere para a cor desejada quando o mouse passar sobre o caminho */
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
`;
