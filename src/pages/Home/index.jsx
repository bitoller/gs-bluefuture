import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "intersection-observer";
import { StyledHome } from "./style";

export function Home() {
  const [users, setUsers] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let storedUsers = JSON.parse(localStorage.getItem("githubUsers")) || {};
        const usersData = await Promise.all([
          getGitHubUser("bitoller", storedUsers.bitoller),
          getGitHubUser("BrunoMarc59", storedUsers.BrunoMarc59),
        ]);
        setUsers(usersData);

        localStorage.setItem(
          "githubUsers",
          JSON.stringify({
            bitoller: usersData[0],
            BrunoMarc59: usersData[1],
          })
        );
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const getGitHubUser = async (user, storedUser) => {
    try {
      if (storedUser) {
        return storedUser;
      } else {
        const response = await axios.get(
          `https://api.github.com/users/${user}`
        );
        if (response.status === 200) {
          return response.data;
        } else {
          console.error("Unexpected status code:", response.status);
          return null;
        }
      }
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
      return null;
    }
  };

  const handleCoverClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledHome>
        <h1>Bem-vindo ao mundo dos Recifes de Corais!</h1>
        <section className="video-container">
          {!isVideoVisible && (
            <div className="video-cover">
              <div className="cover-content">
                <h2>Vídeo Pitch</h2>
                <p>
                  A importância dos recifes de corais é imensurável, pois servem
                  como habitat essencial para cerca de 25% de toda a vida
                  marinha. O monitoramento e o replantio de corais desempenham
                  um papel crucial na preservação desse ecossistema vital.
                </p>
                <button onClick={handleCoverClick}>Assistir ao video</button>
              </div>
              <div className="wave-shape"></div>
            </div>
          )}
          {isVideoVisible && (
            <iframe
              width="760"
              height="415"
              src="https://www.youtube.com/embed/L3Ne_vstIF8?si=7cY6mOEEBi5ygN5f&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </section>
        <section ref={containerRef} className="group-container">
          <h2>Conheça os devs do Grupo TC:</h2>
          <div
            className={`color-group-1 group-member ${
              animate ? "animate-left" : ""
            }`}
          >
            <a href="https://www.linkedin.com/in/bianca-toller" target="_blank">
              <div className="member-pic-container">
                {users.length > 0 && (
                  <img
                    src={users[0] ? users[0].avatar_url : ""}
                    alt={`${
                      users[0] ? users[0].login : "User"
                    }'s GitHub profile`}
                  />
                )}
              </div>
              <div className="member-info-container">
                <p className="member-info-name">Bianca Toller</p>
                <p className="member-info-stack">
                  Software Engineer | JavaScript | TypeScript | C# | Python |
                  Node.js | .Net | PostgreSQL
                </p>
                <p>RM 553134</p>
              </div>
            </a>
          </div>
          <div
            className={`color-group-2 group-member ${
              animate ? "animate-right" : ""
            }`}
          >
            <a href="https://www.linkedin.com/in/bruno-marc/" target="_blank">
              <div className="member-pic-container">
                {users.length > 1 && (
                  <img
                    src={users[1] ? users[1].avatar_url : ""}
                    alt={`${
                      users[1] ? users[1].login : "User"
                    }'s GitHub profile`}
                  />
                )}
              </div>
              <div className="member-info-container">
                <p className="member-info-name">Bruno Marcelino Guimarães</p>
                <p className="member-info-stack">
                  Software Engineer | UI & UX Design | HTML | CSS | JavaScript
                </p>
                <p>RM 553314</p>
              </div>
            </a>
          </div>
        </section>
      </StyledHome>
      <BackToTopArrow />
      <Footer />
    </>
  );
}

/* TODO: onda do video pitch em mobile corta texto do botao */
/* TODO: a ideia da onda no video nao era pra deslizar pro lado? */
