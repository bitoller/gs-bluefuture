import coralReef from "../../assets/coral-reefs/coral-reef-small.png";
import coralReefAclimation from "../../assets/coral-reefs/coral-reef-aclimation.png";
import coralReefTransportation from "../../assets/coral-reefs/coral-reef-transportation.png";
import coralReefResearch from "../../assets/coral-reefs/coral-reef-research.png";
import coralReefImplantation from "../../assets/coral-reefs/coral-reef-implantation.png";
import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import "intersection-observer";
import { StyledRestoration } from "./style";

export function Restoration() {
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
      <StyledRestoration>
        <h1>Processo para implantar os corais</h1>
        <p>
          A implantação de corais é um processo de restauração de recifes de
          coral, que visa repovoar áreas danificadas ou degradadas por meio do
          plantio de fragmentos de coral saudáveis. Os corais são cultivados em
          viveiros marinhos ou terrestres e, uma vez que atingem um tamanho
          adequado, são transplantados para o ambiente marinho.
        </p>
        <section className="super-corals-container">
          <h2>O que é um Super Recife?</h2>
          <p>
            Um super recife é uma comunidade diversificada de corais dentro de
            um sistema de recifes que é mais resistente ou resiliente a ondas de
            calor prejudiciais. Pesquisadores estão identificando onde os super
            recifes estão localizados e quais são os melhores em espalhar corais
            juvenis para outros recifes. Essas informações ajudarão a orientar
            esforços de conservação e restauração.
          </p>
          <p>
            Se as temperaturas subirem acima da zona de conforto dos corais por
            muito tempo, as algas dentro dos corais começam a produzir toxinas.
            Os corais envenenados então expulsam as algas, perdendo tanto sua
            cor quanto sua fonte de alimento em um único ato. Os corais podem
            sobreviver por algum tempo com suas reservas de energia interna ou
            ingerindo organismos do seu ambiente. Mas se esses eventos de
            branqueamento ocorrerem com muita frequência, eles não conseguem se
            recuperar. "Essas ondas de calor marinhas são o equivalente
            climático a uma bomba atômica," diz a Dra. Anne Cohen. "Os danos
            podem ser repentinos e extensos, causando branqueamento generalizado
            e morte de corais em um único evento. No entanto, observamos
            comunidades de corais diversas que sobrevivem a essas ondas de calor
            com impacto mínimo e outras que se recuperam rapidamente." Esses
            recifes estão sobrevivendo às ondas de calor devido às condições
            locais do oceano? Eles são geneticamente mais tolerantes ao calor?
            Ou é apenas sorte? Abordar essas questões e incorporar suas
            respostas aos esforços de conservação são fundamentais para melhorar
            o prognóstico dos recifes do mundo.
          </p>
        </section>
        <section
          ref={containerRef}
          className="restoration-container monitoring-container"
        >
          <div
            className={`first-container ${animate[0] ? "animate-left" : ""}`}
          >
            <h3>Seleção do local de implantação</h3>
            <div>
              <p>
                A seleção do local é um dos componentes mais importantes de um
                programa de restauraçãode recifes de coral. Fatores a serem
                considerados para locais de plantio incluem: Condições do local
                (por exemplo, qualidade da água, atividade humana, abundância de
                predadores de corais, corais doentes); Presença local de
                espécies de corais sendo plantadas; Condições de energia das
                ondas; Acessibilidade do local do berçário; Facilidade de
                plantio;
              </p>
              <img
                src={coralReef}
                alt={
                  "imagem de um recife de corais, alguns peixes e um mergulhador"
                }
              />
            </div>
          </div>
          <div
            className={`second-container ${animate[1] ? "animate-right" : ""}`}
          >
            <h3>Aclimatação</h3>
            <div>
              <img
                src={coralReefAclimation}
                alt={"imagem de uma fazenda de corais sendo implantada"}
              />
              <p>
                Dependendo da localização do berçário (por exemplo, viveiros
                terrestres), os corais podem precisar de um período de
                aclimatação antes de serem plantados na natureza. A aclimatação
                pode envolver os corais se ajustando à iluminação, temperatura
                ou turbidez do local do outplant.
              </p>
            </div>
          </div>
          <div
            className={`third-container ${animate[2] ? "animate-left" : ""}`}
          >
            <h3>Transportando os corais</h3>
            <div>
              <p>
                Ao transportar corais do berçário para o local de implantação,
                reduzir o estresse dos corais é de extrema importância. Os
                corais devem ser transportados durante as épocas mais frias e
                calmas do ano, não durante períodos de estresse por calor ou
                aumento da atividade das tempestades.
              </p>
              <img
                src={coralReefTransportation}
                alt={
                  "imagem de um mergulhador transportando uma fazenda de corais"
                }
              />
            </div>
          </div>
          <div
            className={`fourth-container ${animate[3] ? "animate-right" : ""}`}
          >
            <h3>Saúde e tamanho do transplante de corais</h3>
            <div>
              <img
                src={coralReefResearch}
                alt={"imagem de um mergulhador coletando amostras dos corais"}
              />
              <p>
                Os corais não devem ser plantados se apresentarem quaisquer
                condições anormais, como perda recente de tecido, descoloração,
                palidez/branqueamento ou parasitas. Por causa dos custos de
                manter os corais em um viveiro, é melhor plantar corais assim
                que eles forem grandes o suficiente para ter uma boa chance de
                sobrevivência após o transplante.
              </p>
            </div>
          </div>
          <div
            className={`fifth-container ${animate[4] ? "animate-left" : ""}`}
          >
            <h3>Métodos de Anexos</h3>
            <div>
              <p>
                Os corais são plantados, assegurando-os ao recife usando uma
                variedade de métodos de fixação. O método de fixação deve ser
                testado e será parcialmente determinado pelas espécies de coral
                que estão sendo plantadas, pelo tipo de substrato no local da
                planta e pelas condições do local. Antes de qualquer método de
                fixação ser usado, todos os organismos incrustantes e sedimentos
                devem ser removidos do substrato usando pequenas escovas de
                arame e raspadores.
              </p>
              <img
                src={coralReefImplantation}
                alt={"imagem de um recife de corais que foi implantado"}
              />
            </div>
          </div>
        </section>
      </StyledRestoration>
      <BackToTopArrow />
      <Footer />
    </>
  );
}

/* TODO: achar um jeito melhor de fazer o texto do que sao implantacoes de corais ficar dentro da img,
no momento esta sendo usado um padding left enorme */
/* TODO: a img em si do texto de implantacoes tem um corte no meio da parte rosa */
/* TODO: talvez fazer essa img falada acima mexer a parte rosa um pouco com o hover? mesmo que nao seja clicavel */
/* TODO: essa mesma img no responsivo foi removida, tentar manter ela, se nao nao tem problema */
/* TODO: as imagens dentro dos cards de como fazer replantio tem tamanhos diferentes */
/* TODO: o texto do quarto container esta vazando pra fora do padding do container dele no responsivo menor tela de celular */
