import { Link } from "react-router-dom";
import { StyledPageNotFound } from "./style";

export function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Link to="/">Retornar para a home</Link>
    </StyledPageNotFound>
  );
}
