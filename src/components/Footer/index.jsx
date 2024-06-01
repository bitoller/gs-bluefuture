import blueFutureLogo from "../../assets/blue-future-logo.png";
import selectLogo from "../../assets/select-logo.png";
import softtekLogo from "../../assets/softtek-logo.png";
import globalPactLogo from "../../assets/global-pact-logo.png";
import unescoLogo from "../../assets/unesco-logo.png";
import awsLogo from "../../assets/aws-logo.png";
import oceans20Logo from "../../assets/oceans20-logo.png";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./style";

export function Footer() {
  return (
    <StyledFooter>
      <div className="logo-menu-container">
        <img
          src={blueFutureLogo}
          alt={"logo da blue future"}
          className="img-fluid"
        />
        <nav className="custom-nav">
          <NavLink to="/home">INÍCIO</NavLink>
          <NavLink to="/about">CORAIS</NavLink>
          <NavLink to="/the_idea">A IDEIA</NavLink>
          <NavLink to="/donate">DOAÇÕES</NavLink>
        </nav>
      </div>
      <div className="sponsors-container">
        <img src={selectLogo} alt={"logo da select"} className="img-fluid" />
        <img src={softtekLogo} alt={"logo da softtek"} className="img-fluid" />
        <img
          src={globalPactLogo}
          alt={"logo do pacto global"}
          className="img-fluid"
        />
        <img src={unescoLogo} alt={"logo da unesco"} className="img-fluid" />
        <img src={awsLogo} alt={"logo da aws"} className="img-fluid" />
        <img
          src={oceans20Logo}
          alt={"logo da oceans 2024 brasil"}
          className="img-fluid"
        />
      </div>
    </StyledFooter>
  );
}
