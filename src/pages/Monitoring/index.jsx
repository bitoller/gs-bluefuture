import submarine from "../../assets/icons/submarine-icon.svg";
import diver from "../../assets/coral-reefs/diver-img.png";
import drone from "../../assets/coral-reefs/auto-drone.png";
import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import "intersection-observer";
import { StyledMonitoring } from "./style";

export function Monitoring() {
  const [animate, setAnimate] = useState([false, false, false]);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(containerRef.current.children).indexOf(
            entry.target
          );
          setAnimate((prev) => {
            const newAnimate = [...prev];
            newAnimate[index] = true;
            return newAnimate;
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    const sections = containerRef.current.children;
    Array.from(sections).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      Array.from(sections).forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledMonitoring>
        <h1>Como podemos facilitar o monitoramento</h1>
        <section ref={containerRef} className="monitoring-container">
          <div className={`first-section ${animate[0] ? "animate-left" : ""}`}>
            <p>
              Os recifes de corais são verdadeiros oásis de vida no vasto azul
              dos oceanos, abrigando uma miríade de espécies marinhas e
              desempenhando um papel fundamental na saúde dos ecossistemas
              costeiros. No entanto, esses ambientes frágeis enfrentam ameaças
              crescentes devido às mudanças climáticas, à poluição, à pesca
              predatória e ao desenvolvimento costeiro desenfreado. Para
              proteger e preservar esses tesouros naturais, é crucial adotar
              abordagens inovadoras de monitoramento que nos permitam entender
              melhor suas dinâmicas e responder de forma eficaz aos desafios que
              enfrentam.
            </p>
            <img src={submarine} alt="ícone de um submarino azul" />
          </div>
          <div
            className={`second-section ${animate[1] ? "animate-right" : ""}`}
          >
            <img
              src={diver}
              alt={"imagem de um mergulhador medindo os corais"}
            />
            <div className="second-section-text-container">
              <h3>Monitoramento por mergulhadores</h3>
              <p>
                Durante décadas, os mergulhadores têm desempenhado um papel
                vital no monitoramento dos recifes de corais. Com suas
                habilidades subaquáticas e olhos treinados, os mergulhadores
                exploram os recifes, examinando de perto a saúde dos corais,
                identificando espécies e registrando mudanças no ecossistema
                marinho. Essa abordagem íntima e detalhada oferece insights
                valiosos sobre a saúde dos recifes e as ameaças que enfrentam,
                permitindo a tomada de decisões informadas para sua conservação.
              </p>
            </div>
          </div>
          <div className={`third-section ${animate[2] ? "animate-left" : ""}`}>
            <div className="third-section-text-container">
              <h3>Monitoramento por drones autônomos</h3>
              <p>
                No entanto, enquanto o monitoramento por mergulhadores oferece
                uma compreensão única dos recifes de corais, ele também
                apresenta limitações significativas, como a cobertura limitada
                de áreas extensas e a introdução de viés humano nas observações.
                É aqui que entram os drones autônomos, oferecendo uma abordagem
                revolucionária para o monitoramento de recifes de corais.
                Equipados com câmeras de alta resolução e tecnologia de
                mapeamento avançada, esses drones podem sobrevoar os recifes e
                capturar imagens detalhadas em uma fração do tempo necessário
                para um mergulho humano. Isso permite a cobertura de áreas
                extensas de forma rápida e eficiente, incluindo locais de
                difícil acesso ou áreas remotas.
              </p>
            </div>
            <img src={drone} alt={"imagem de um drone autônomo"} />
          </div>
        </section>
      </StyledMonitoring>
      <BackToTopArrow />
      <Footer />
    </>
  );
}
