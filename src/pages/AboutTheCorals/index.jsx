import coralBenefits from "../../assets/infos-graphs/coral-reef-benefits.png";
import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { WorldMap } from "../../components/WorldMap/index.jsx";
import { Footer } from "../../components/Footer";
import { StyledAbout } from "./style.js";

export function About() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledAbout>
        <h1>Como os recifes de corais impactam no mundo em que vivemos</h1>
        <section className="about-corals">
          <p>
            Os recifes de coral abrigam um quarto de toda a vida marinha nos
            oceanos e são o ecossistema marinho mais diverso da Terra. Milhões
            de pessoas ao redor do mundo também dependem da pesca, turismo e
            proteção costeira fornecida por recifes de coral saudáveis - no
            entanto, eles estão entre os ecossistemas mais ameaçados do planeta.
            Os recifes de coral são incrivelmente sensíveis, a ponto de apenas
            um grau de mudança na temperatura do oceano poder causar efeitos
            prejudiciais em todos os recifes de coral marinhos. O impacto do
            contínuo aquecimento global está afetando diretamente os recifes de
            coral por meio de um aumento já mensurável na temperatura da água do
            mar, causado predominantemente pela atividade humana. Não apenas os
            corais são parte integrante dos ecossistemas marinhos, mas também
            atuam como um filtro natural para o oceano - contribuindo para o
            ciclo de carbono oceânico por meio da fotossíntese, respiração,
            calcificação e dissolução. Esses processos reciclam seus nutrientes
            de forma eficiente e sequestram enormes quantidades de carbono do
            dióxido de carbono dissolvido como carbonato - para que o carbono
            permaneça dentro do sistema de recifes e fora do oceano e da
            atmosfera.
          </p>
          <div className="coral-benefits-container">
            <img
              src={coralBenefits}
              alt={"imagem descrevendo os benefícios dos recifes de corais"}
            />
          </div>
          <p>
            Mas isso não é tudo. Os recifes de coral proporcionam inúmeros
            benefícios ao nosso Planeta Oceano, sustentando mais de meio bilhão
            de pessoas com alimentos, renda e proteção. Algumas ameaças aos
            recifes de coral ao redor do mundo são naturais, como doenças,
            predadores e tempestades. No entanto, outras ameaças são causadas
            pela atividade humana, incluindo aumento do escoamento e poluição,
            sedimentação, práticas de pesca destrutivas, turismo e aumento da
            temperatura do oceano devido às mudanças climáticas. Muitas dessas
            ameaças podem estressar os corais, levando à degradação,
            branqueamento de corais e mortalidade generalizada desses delicados
            ecossistemas.
          </p>
        </section>
        <h2>
          Selecione uma região abaixo para saber mais sobre os recifes de
          corais:
        </h2>
        <WorldMap />
      </StyledAbout>
      <BackToTopArrow />
      <Footer />
    </>
  );
}

/* TODO: estilizar a pagina de uma forma que a deixe interessante de ler */
