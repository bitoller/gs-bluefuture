import React, { useEffect, useState } from "react";
import { StyledSVGContainer, StyledRegion } from "./style";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import MapBr from "../../assets/brazil.jpg";
import grafics from "../../assets/grafics.png";
import data from "./data.json";

export function WorldMap() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [countryClicked, setCountryClicked] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    async function fetchAndAppendSVG() {
      try {
        const response = await fetch("/src/assets/world.svg");
        const svgText = await response.text();
        const parser = new DOMParser();
        const svgDOM = parser.parseFromString(svgText, "image/svg+xml");
        const svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = "";
        svgContainer.appendChild(svgDOM.documentElement);
        setSvgLoaded(true);

        initializeTooltips();

        const paths = svgContainer.querySelectorAll("path");
        paths.forEach((path) => {
          path.addEventListener("click", handleCountryClick);
        });

        svgContainer.addEventListener("mouseover", handleMouseOver);
        svgContainer.addEventListener("mouseout", handleMouseOut);
      } catch (error) {
        console.error("Erro ao carregar ou manipular o SVG:", error);
      }
    }

    fetchAndAppendSVG();
  }, []);

  function initializeTooltips() {
    const paths = document.querySelectorAll("path");
    paths.forEach((path) => {
      const title = path.getAttribute("title");
      if (title) {
        tippy(path, {
          content: title,
          theme: "light",
        });
      }
    });
  }

  function handleCountryClick(event) {
    const className = event.target.getAttribute("class");
    const countryName = className.replace("hovered", "").trim();
    const info = data.regions.find((region) => region.name === countryName);
    setCountryClicked(countryName);
    setCountryInfo(info);
    event.target.style.outline = "none";
    console.log(countryName);
  }

  function handleMouseOver(event) {
    const className = event.target.getAttribute("class");
    if (className) {
      const elementsWithSameClass = document.querySelectorAll(`.${className}`);
      elementsWithSameClass.forEach((element) => {
        element.classList.add("hovered");
      });
    }
  }

  function handleMouseOut() {
    const elementsWithHover = document.querySelectorAll(".hovered");
    elementsWithHover.forEach((element) => {
      element.classList.remove("hovered");
    });
  }

  return (
    <div>
      <StyledSVGContainer id="svg-container"></StyledSVGContainer>
      <StyledRegion>
        {countryInfo && (
          <div key={countryInfo.name}>
            <div className="region-header">
              <div>
                <h2>Região</h2>
                <p>{countryInfo.name}</p>
                <img src={MapBr} alt="" />
              </div>
              <div className="countries-included">
                <h3>
                  <span>Paíse</span>s incluídos
                </h3>
                {countryInfo.countries &&
                  countryInfo.countries.map((country) => (
                    <p key={country}>{country}</p>
                  ))}
                <h3>
                  <span>Contat</span>o
                </h3>
                {countryInfo.contacts &&
                  countryInfo.contacts.map((contact) => (
                    <div key={contact.email}>
                      <p>{contact.name}</p>
                      <p>{contact.role}</p>
                      <p>{contact.email}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="regional-context">
              <div className="regional-context-content">
                <h3>
                  <span>Cont</span>exto Regional
                </h3>
                <div
                  className={
                    countryInfo.regionalContext.additionalInfo2
                      ? "additional-info-item"
                      : ""
                  }
                >
                  <div>
                    <h4>{countryInfo.regionalContext.title}</h4>
                    <p>{countryInfo.regionalContext.content}</p>
                  </div>
                  {countryInfo.regionalContext.additionalInfo2 && (
                    <div>
                      <h4>
                        {countryInfo.regionalContext.additionalInfo2.title}
                      </h4>
                      <p>
                        {countryInfo.regionalContext.additionalInfo2.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="key-numbers">
              <h3>Números Chave</h3>
              <div className="key-numbers-content">
                {countryInfo.regionalContext.keyNumbers &&
                  countryInfo.regionalContext.keyNumbers.map((keyNumber) => (
                    <div key={keyNumber.description}>
                      <h4>{keyNumber.value}</h4>
                      <p>{keyNumber.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        <div className="section">
          <img src={grafics} alt="" />
        </div>
      </StyledRegion>
    </div>
  );
}
