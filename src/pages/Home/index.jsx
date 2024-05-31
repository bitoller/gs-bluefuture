import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { Footer } from "../../components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledHome } from "./style";

export function Home() {
  const [users, setUsers] = useState([]);
  const [animationClass, setAnimationClass] = useState(["", ""]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let storedUsers = JSON.parse(localStorage.getItem("githubUsers")) || {};
        const usersData = await Promise.all([
          getGitHubUser("bitoller", storedUsers.bitoller),
          getGitHubUser("BrunoMarc59", storedUsers.BrunoMarc59),
        ]);
        setUsers(usersData);
        setAnimationClass(["animate-left", "animate-right"]);

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

  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledHome>
        <h1>Como os recifes de corais impactam no mundo em que vivemos</h1>
        <section className="video-container">
          {/* video pitch vem aqui */}
        </section>
        <section className="group-container">
          <a href="https://www.linkedin.com/in/bianca-toller" target="_blank">
            <div className={`group-member ${animationClass[0]}`}>
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
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/bruno-marc/" target="_blank">
            <div className={`group-member ${animationClass[1]}`}>
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
                  Estudante de Engenharia de Software na FIAP | UI & UX Desing |
                  HTML | CSS | Javascript
                </p>
              </div>
            </div>
          </a>
        </section>
      </StyledHome>
      <Footer />
    </>
  );
}
