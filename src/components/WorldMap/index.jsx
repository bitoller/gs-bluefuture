import backToMapBtn from "../../assets/icons/back-to-map.svg";
import mapAustralia from "../../assets/maps/map-australia.jpg";
import mapEastPacific from "../../assets/maps/map-eastern-pacific.jpg";
import mapCaribbean from "../../assets/maps/map-caribbean.jpg";
import mapWesternIndian from "../../assets/maps/map-western-indian.jpg";
import mapRedSea from "../../assets/maps/map-red-sea.jpg";
import mapRopme from "../../assets/maps/map-ropme.jpg";
import mapSouthAsia from "../../assets/maps/map-south-asia.jpg";
import mapEastAsia from "../../assets/maps/map-east-asia.jpg";
import mapPacific from "../../assets/maps/map-pacific.jpg";
import mapBrazil from "../../assets/maps/map-brazil.jpg";
import coralGraphic from "../../assets/infos-graphs/coral-graphic.png";
import data from "./data.json";
import React, { useEffect, useState, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { StyledSVGContainer, StyledRegion } from "./style";

export function WorldMap() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [countryClicked, setCountryClicked] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [showMap, setShowMap] = useState(true);
  const [regionImage, setRegionImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const regionRef = useRef(null);

  useEffect(() => {
    if (showMap) {
      fetchAndAppendSVG();
    }

    if (showMap && regionRef.current && scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  }, [showMap]);

  const fetchAndAppendSVG = async () => {
    try {
      const response = await fetch("./src/assets/maps/map-world.svg");
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
    } catch (error) {}
  };

  const initializeTooltips = () => {
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
  };

  const handleCountryClick = (event) => {
    const className = event.target.getAttribute("class");
    const countryName = className.replace("hovered", "").trim();
    const info = data.regions.find((region) => region.class === countryName);
    setCountryClicked(countryName);
    setCountryInfo(info);
    setShowMap(false);
    setRegionImage(getRegionImage(countryName));
    setScrollPosition(window.pageYOffset);
    event.target.style.outline = "none";
  };

  const getRegionImage = (countryName) => {
    switch (countryName) {
      case "brazil":
        return mapBrazil;
      case "australia":
        return mapAustralia;
      case "eastern-pacific":
        return mapEastPacific;
      case "caribbean":
        return mapCaribbean;
      case "western-indian":
        return mapWesternIndian;
      case "red-sea":
        return mapRedSea;
      case "ropme":
        return mapRopme;
      case "south-asia":
        return mapSouthAsia;
      case "east-asia":
        return mapEastAsia;
      case "pacific":
        return mapPacific;
      default:
        return null;
    }
  };

  const handleMouseOver = (event) => {
    const className = event.target.getAttribute("class");
    if (className) {
      const elementsWithSameClass = document.querySelectorAll(`.${className}`);
      elementsWithSameClass.forEach((element) => {
        element.classList.add("hovered");
      });
    }
  };

  const handleMouseOut = () => {
    const elementsWithHover = document.querySelectorAll(".hovered");
    elementsWithHover.forEach((element) => {
      element.classList.remove("hovered");
    });
  };

  const handleBackToMap = () => {
    setShowMap(true);
    setCountryInfo(null);
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <div>
      {showMap ? (
        <StyledSVGContainer id="svg-container"></StyledSVGContainer>
      ) : (
        <StyledRegion>
          {countryInfo && (
            <div key={countryInfo.name}>
              <button className="back-to-map" onClick={handleBackToMap}>
                <img src={backToMapBtn} alt={"seta para esqueda"} />
                Voltar ao mapa
              </button>
              <div className="region-header">
                <div>
                  <h2>Região</h2>
                  <p>{countryInfo.name}</p>
                  <img src={regionImage} alt={"imagem da região"} />
                </div>
                <div className="countries-included">
                  <h3>
                    <span>Paíse</span>s incluídos
                  </h3>
                  {countryInfo.countries &&
                    countryInfo.countries.map((country) => (
                      <p key={country}>{country}</p>
                    ))}
                  {/* <h3>
                    <span>Contat</span>o
                  </h3>
                  {countryInfo.contacts &&
                    countryInfo.contacts.map((contact) => (
                      <div key={contact.email}>
                        <p>{contact.name}</p>
                        <p>{contact.role}</p>
                        <p>{contact.email}</p>
                      </div>
                    ))} */}
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
        </StyledRegion>
      )}
    </div>
  );
}

/* TODO: ao fazer o hover nos paises, as frases que aparecem nao estao no mesmo formato para todas */
/* TODO: ao clicar em um pais (australia por ex), o texto dentro do quadrado de paises incluidos vaza pra fora,
verificar outros tanto desktop/responsivo */
