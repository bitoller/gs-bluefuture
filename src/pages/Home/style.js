import styled from "styled-components";
import WaveVideo from "../../assets/wave-video.png";
import PlayerVideo from "../../assets/player-video.png";

export const StyledHome = styled.main`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;

  > h1 {
    font-size: 1.875rem;
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

  .video-container {
    position: relative;
    width: 100%;
    max-width: 760px; /* Tamanho máximo */
    height: 415px; /* Altura fixa */
    margin: 0 auto; /* Centraliza na página */
    overflow: hidden;
  }

  .video-container iframe,
  .video-container .video-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: url(${PlayerVideo}) no-repeat;
    background-position: center right;
    background-size: 60% auto;
    color: white;
    text-align: center;
    z-index: 1;
  }

  .cover-content {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 100%;
    position: relative;
    z-index: 2;
    padding: 30px;
  }

  .cover-content h2 {
    margin: 0 0 10px;
    font-size: 2rem; /* Tamanho fixo para telas maiores */
  }

  .cover-content p {
    margin: 0 0 20px;
    font-size: 1rem; /* Tamanho fixo para telas maiores */
    text-align: left;
    line-height: 25px;
  }

  .cover-content button {
    background-color: transparent;
    color: white;
    border: 2px solid #ffffff;
    padding: 10px 20px;
    font-size: 2rem; /* Tamanho fixo para telas maiores */
    cursor: pointer;
  }

  .wave-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 100%;
    background: url(${WaveVideo}) no-repeat;
    background-size: cover;
    z-index: 1;
  }

  .animate-out {
    animation: slideWave 3s forwards;
  }

  @keyframes slideWave {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (max-width: 768px) {
    .video-container {
      height: auto;
      padding-bottom: 56.25%; /* Aspect Ratio 16:9 */
    }

    .cover-content h2 {
      font-size: 1.5rem; /* Responsivo para telas menores */
    }

    .cover-content p {
      display: none;
    }

    .cover-content button {
      font-size: 1rem;
      padding: 8px 16px; /* Ajuste para telas menores */
    }
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
