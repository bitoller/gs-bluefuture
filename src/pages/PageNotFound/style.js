import styled from "styled-components";

export const StyledPageNotFound = styled.main`
  .img-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .not-found-img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }

  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.75rem;
    width: 30%;
    height: auto;
    background-color: #003b59d0;
    border-radius: 10px;
    padding: 3.125rem;
    transform: translate(-50%, -50%);
  }

  .text-container > p {
    text-align: center;
    font-size: 1.875rem;
  }

  .text-container > a {
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: underline;
    text-align: center;
    transition: color 0.3s;
  }

  .text-container > a:hover {
    color: #f58b01;
  }

  @media (max-width: 923px) {
    .text-container {
      width: 80%;
      padding: 2rem;
    }
  }
`;
