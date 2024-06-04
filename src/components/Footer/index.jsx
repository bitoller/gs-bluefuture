import logoBlueFuture from "../../assets/logos/logo-blue-future.png";
import logoSelect from "../../assets/logos/logo-select.png";
import logoSofttek from "../../assets/logos/logo-softtek.png";
import logoGlobalPact from "../../assets/logos/logo-global-pact.png";
import logoUnesco from "../../assets/logos/logo-unesco.png";
import logoAws from "../../assets/logos/logo-aws.png";
import logoOceans20 from "../../assets/logos/logo-oceans20.png";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./style";

export function Footer() {
  return (
    <StyledFooter>
      <div className="logo-menu-container">
        <img
          src={logoBlueFuture}
          alt={"logo da blue future"}
          className="img-fluid"
        />
        <nav className="custom-nav">
          <NavLink to="/home">INÍCIO</NavLink>
          <NavLink to="/about_the_corals">CORAIS</NavLink>
          <NavLink to="/monitoring">MONITORAMENTO</NavLink>
          <NavLink to="/restoration">REPLANTIO</NavLink>
          <NavLink to="/contribution">CONTRIBUIÇÃO</NavLink>
        </nav>
      </div>
      <div className="sponsors-container">
        <img src={logoSelect} alt={"logo da select"} className="img-fluid" />
        <img src={logoSofttek} alt={"logo da softtek"} className="img-fluid" />
        <img
          src={logoGlobalPact}
          alt={"logo do pacto global"}
          className="img-fluid"
        />
        <img src={logoUnesco} alt={"logo da unesco"} className="img-fluid" />
        <img src={logoAws} alt={"logo da aws"} className="img-fluid" />
        <img
          src={logoOceans20}
          alt={"logo da oceans 2024 brasil"}
          className="img-fluid"
        />
      </div>
    </StyledFooter>
  );
}

/* TODO: arrumar tamanho da logo dos sponsors. tamanhos nao batem e parecem estar tortos. - feito */
