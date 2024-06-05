import donateImg from "../../assets/coral-reefs/donate-img-1.png";
import oceanCleaning from "../../assets/coral-reefs/ocean-cleaning.png";
import bulletPoint from "../../assets/icons/bullet-point.svg";
import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { Footer } from "../../components/Footer";
import { StyledContribution } from "./style";

export function Contribution() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledContribution>
        <h1>Como posso ajudar a manter os recifes de corais</h1>
        <section className="donate-container">
          <div className="donate-container-title">
            <h3>Adote um coral e acompanhe todo o seu desenvolvimento</h3>
            <p>
              Com sua contribuição, podemos restaurar os recifes de corais,
              protegendo a vida marinha e garantindo a saúde dos oceanos para as
              gerações futuras. Junte-se a nós nessa missão vital hoje mesmo.
            </p>
          </div>
          <div className="donate-levels">
            <h4>Níveis de ajuda</h4>
            <ul>
              <li className="donate-choices">
                <img src={donateImg} alt={"imagem de um coral"} />
                <h5>R$ 20</h5>
                <p>
                  Adote um coral: Dê um nome a ele, acompanhe seu crescimento e
                  receba atualizações frequentes.
                </p>
              </li>
              <li className="donate-choices">
                <img src={donateImg} alt={"imagem de um coral"} />
                <h5>R$ 60</h5>
                <p>
                  Tenha acesso ao monitoramento dos recifes e fique sempre por
                  dentro do nosso progresso
                </p>
              </li>
              <li className="donate-choices">
                <img src={donateImg} alt={"imagem de um coral"} />
                <h5>R$ 100</h5>
                <p>
                  Participe das nossas missões de replantio de corais como
                  espectador.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="help-container">
          <h2>De quais outras maneiras posso ajudar?</h2>
          <div className="all-content-container">
            <div className="all-text-container">
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Reduza o uso de plástico: Evite produtos plásticos de uso
                  único e opte por alternativas reutilizáveis. O plástico pode
                  se acumular nos oceanos, poluindo os recifes de corais e
                  prejudicando a vida marinha.
                </p>
              </div>
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Escolha produtos sustentáveis: Opte por produtos de empresas
                  que seguem práticas sustentáveis de pesca e produção,
                  reduzindo assim a pressão sobre os ecossistemas marinhos.
                </p>
              </div>
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Pratique mergulho responsável: Ao mergulhar ou fazer snorkel
                  nos recifes de corais, siga as práticas de mergulho
                  responsável para evitar danos aos corais e à vida marinha.
                </p>
              </div>
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Apoie organizações de conservação: Faça doações ou participe
                  de programas de voluntariado de organizações que trabalham na
                  conservação e restauração dos recifes de corais.
                </p>
              </div>
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Eduque-se e conscientize os outros: Aprenda mais sobre os
                  recifes de corais e compartilhe esse conhecimento com amigos,
                  familiares e comunidades. Quanto mais pessoas estiverem
                  cientes da importância dos recifes de corais, maior será o
                  apoio à sua proteção.
                </p>
              </div>
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Reduza as emissões de carbono: Reduza suas emissões de carbono
                  usando transporte público, bicicleta ou caminhando sempre que
                  possível e optando por fontes de energia renovável.
                </p>
              </div>
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Participe de limpezas costeiras: Junte-se a iniciativas de
                  limpeza de praias e costas para ajudar a remover o lixo que
                  pode prejudicar os recifes de corais.
                </p>
              </div>
              <div className="text-snippet">
                <img src={bulletPoint} alt={"ícone de um círculo azul"} />
                <p>
                  Seja um consumidor responsável de frutos do mar: Escolha
                  frutos do mar sustentáveis e evite espécies ameaçadas de
                  sobre-exploração.
                </p>
              </div>
            </div>
            <img
              src={oceanCleaning}
              alt={"imagem de uma pessoa ajudando a limpar uma praia"}
              className="trash-img"
            />
          </div>
        </section>
      </StyledContribution>
      <BackToTopArrow />
      <Footer />
    </>
  );
}

/* TODO: terminar a pagina e estilizacao */
