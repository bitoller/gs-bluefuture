import styled from "styled-components";
import waveBtn from "../../assets/wave-cover-btn.png";

export const StyledCover = styled.main`
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }

  .dive-button {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.25rem;
    font-size: 1.875rem;
    font-weight: 700;
    background: var(--color-primary);
    background-image: url(${waveBtn});
    background-repeat: repeat-x;
    background-position: 0 -100%;
    border-radius: 5px;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
    white-space: nowrap;
    transition: background-position 1.8s ease, background-color 1.2s;
    text-align: center;

    &:hover {
      background-position: 500% 100%;
    }
  }
`;
