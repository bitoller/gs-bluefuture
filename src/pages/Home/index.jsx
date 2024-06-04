import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { StyledHome } from "./style";

export function Home() {
  const [users, setUsers] = useState([]);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoCoverVisible, setIsVideoCoverVisible] = useState(true);
  const coverRef = useRef(null);

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
      } catch (error) {}
    };

    fetchUsers();
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
          return null;
        }
      }
    } catch (error) {
      return null;
    }
  };

  const handleCoverClick = () => {
    setIsVideoVisible(true);
    setIsVideoCoverVisible(false);
  };

  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledHome>
        <h1>Bem-vindo ao mundo dos Recifes de Corais!</h1>
        <section className="video-container">
          {isVideoCoverVisible && (
            <div ref={coverRef} className="video-cover">
              <div className="cover-content">
                <h2>Vídeo Pitch</h2>
                <p>
                  A importância dos recifes de corais é imensurável, pois servem
                  como habitat essencial para cerca de 25% de toda a vida
                  marinha. O monitoramento e o replantio de corais desempenham
                  um papel crucial na preservação desse ecossistema vital.
                </p>
                <button onClick={handleCoverClick}>
                  <span>Assistir o vídeo</span>
                  <div className="wave-btn"></div>
                </button>
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
        <section className="group-container">
          <h2>Conheça os devs do Grupo TC:</h2>
          <div className="group-cards">
            <div className="color-group-1 group-member">
              <a
                href="https://www.linkedin.com/in/bianca-toller"
                target="_blank"
              >
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
            <div className="color-group-2 group-member">
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
          </div>
        </section>
      </StyledHome>
      <BackToTopArrow />
      <Footer />
    </>
  );
}
