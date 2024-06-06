import coralBenefits from "../../assets/infos-graphs/coral-reef-benefits.png";
import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
import { WorldMap } from "../../components/WorldMap";
import { Footer } from "../../components/Footer";
import { StyledAbout } from "./style.js";
import coralReef7 from "../../assets/coral-reefs/coral-reef-7.jpg";
import coralReef8 from "../../assets/coral-reefs/coral-reef-8.jpg";
import coralReef9 from "../../assets/coral-reefs/coral-reef-9.jpg";

export function About() {
  const aboutItems = [
    {
      image: coralReef7,
      textLeft: "Explore o mapa abaixo e saiba...",
      textRight: "...mais sobres os recifes do mundo todo",
      alt: "imagem de uma tartaruga em um recife de corais. Credit: Jordan Robins / Ocean Image Bank",
    },
    {
      image: coralReef8,
      textLeft: "A importância dos recifes de...",
      textRight: "...corais para nosso planeta",
      alt: "imagem a meia-água de um recife de corais. Credit: Matt Curnock / Ocean Image Bank",
    },
    {
      image: coralReef9,
      textLeft: "Descubra como os recifes de corais...",
      textRight: "...são essenciais para milhões de vidas",
      alt: "imagem de uma tartaruga em um recife de corais.  Credit: Gaby Barathieu / Ocean Image Bank",
    },
  ];
  return (
    <>
      <Header />
      <ImagesCarousel items={aboutItems} />
      <StyledAbout>
        <section className="about-corals">
          <h1>Como os recifes de corais impactam o mundo em que vivemos</h1>
          <p>
            Os recifes de coral abrigam um quarto de toda a vida marinha nos
            oceanos e são o ecossistema marinho mais diverso da Terra. Milhões
            de pessoas ao redor do mundo dependem da pesca, do turismo e da
            proteção costeira fornecida por recifes de coral saudáveis. No
            entanto, eles estão entre os ecossistemas mais ameaçados do planeta.
            Os recifes de coral são incrivelmente sensíveis, a ponto de apenas
            um grau de mudança na temperatura do oceano poder causar efeitos
            prejudiciais em todos os recifes de coral marinhos. O impacto do
            contínuo aquecimento global está afetando diretamente os recifes de
            coral por meio de um aumento já mensurável na temperatura da água do
            mar, causado predominantemente pela atividade humana. Não apenas os
            corais são parte integrante dos ecossistemas marinhos, mas também
            atuam como um filtro natural para o oceano, contribuindo para o
            ciclo de carbono oceânico por meio da fotossíntese, respiração,
            calcificação e dissolução. Esses processos reciclam seus nutrientes
            de forma eficiente e sequestram enormes quantidades de carbono do
            dióxido de carbono dissolvido como carbonato, para que o carbono
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
        <section className="coral-region">
          <h2>
            Selecione uma região abaixo para saber mais sobre os recifes de
            corais:
          </h2>
          <WorldMap />
        </section>
      </StyledAbout>
      <BackToTopArrow />
      <Footer />
    </>
  );
}
