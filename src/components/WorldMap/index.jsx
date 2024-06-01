import React, { useEffect, useState } from "react";
import { StyledSVGContainer } from "./style"; // Importe o Styled Component
import countriesData from "./regions.json"; // Importe o arquivo JSON
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Importe os estilos padrão do Tippy.js

export function WorldMap() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [countryClicked, setCountryClicked] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    async function fetchAndAppendSVG() {
      try {
        const response = await fetch("/src/assets/world.svg"); // Caminho para o seu arquivo SVG
        const svgText = await response.text();
        const parser = new DOMParser();
        const svgDOM = parser.parseFromString(svgText, "image/svg+xml");
        const svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = ""; // Limpa o conteúdo atual do contêiner
        svgContainer.appendChild(svgDOM.documentElement);
        setSvgLoaded(true);

        initializeTooltips(); // Inicialize os tooltips após o carregamento do SVG

        // Adicionar eventos de clique
        const paths = svgContainer.querySelectorAll("path");
        paths.forEach((path) => {
          path.addEventListener("click", handleCountryClick);
        });

        // Adicionar eventos de hover para todos os elementos do SVG
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
    const countryName = event.target.getAttribute("id");
    const info = countriesData[countryName];
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
    <StyledSVGContainer id="svg-container">
      <h1>Mapa do Mundo</h1>
      {countryClicked && countryInfo && (
        <div className="country-info">
          <h2>Informações de {countryClicked}</h2>
          <p>Capital: {countryInfo.capital}</p>
          <p>População: {countryInfo.population}</p>
          <p>Idioma: {countryInfo.language}</p>
          <button onClick={() => setCountryClicked(null)}>Fechar</button>
        </div>
      )}
    </StyledSVGContainer>
  );
}
