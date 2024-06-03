import videoWaveCover from "../../assets/video/video-wave-cover.png";
import videoPlayer from "../../assets/video/video-player.png";
import waveBtn from "../../assets/video/btn-wave.png";
import styled, { keyframes } from "styled-components";

const slideInCover = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

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

  .video-container {
    position: relative;
    width: 100%;
    max-width: 47.5rem;
    height: 25.9375rem;
    margin: 0 auto;
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
    background: url(${videoPlayer}) no-repeat;
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
    padding: 1.875rem;
  }

  .cover-content > h2 {
    margin: 0 0 0.625rem;
    font-size: 2rem;
  }

  .cover-content > p {
    margin: 0 0 1.25rem;
    font-size: 1rem;
    text-align: left;
    line-height: 1.5625rem;
  }

  .cover-content > button {
    position: relative;
    background-color: transparent;
    color: white;
    border: 2px solid var(--color-gray-1);
    padding: 0.625rem 1.25rem;
    font-size: 1.6rem;
    overflow: hidden;
  }

  .cover-content > button:hover > span {
    color: var(--color-gray-4);
  }

  .cover-content > button > span {
    position: relative;
    z-index: 3000;
    transition: 1s;
  }

  .cover-content > button > .wave-btn {
    position: absolute;
    top: calc(100% + 1.375rem);
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-gray-1);
    transition: 1s;
  }

  .cover-content > button:hover > .wave-btn {
    top: 0;
  }

  .cover-content > button > .wave-btn::before {
    content: "";
    position: absolute;
    top: -1.375rem;
    left: 0;
    width: 100%;
    height: 1.375rem;
    background: url(${waveBtn});
    animation: animateWave 0.8s linear infinite;
  }

  @keyframes animateWave {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 7.375rem;
    }
  }

  .wave-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 100%;
    background: url(${videoWaveCover}) no-repeat;
    background-size: cover;
    z-index: 1;
  }

  .video-cover.slide-out {
    animation: slideOutLeft 0.5s forwards;
  }

  @keyframes slideOutLeft {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  .animate-in {
    animation: ${slideInCover} 1.5s forwards;
  }

  @keyframes slideWave {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .group-container {
    display: flex;
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

  .group-cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.875rem;
    width: 100%;
    height: auto;
    justify-content: center;
  }

  .group-member {
    display: flex;
    justify-content: center;
    width: 25%;
    height: 24.6875rem;
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

  @media (max-width: 768px) {
    .video-container {
      height: auto;
      padding-bottom: 56.25%;
    }

    .cover-content > h2 {
      font-size: 1.5rem;
    }

    .cover-content > p {
      display: none;
    }

    .cover-content > button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }

  @media (max-width: 1562px) {
    .group-member {
      min-width: 226px;
      min-height: 451px;
      height: auto;
    }
  }
`;
