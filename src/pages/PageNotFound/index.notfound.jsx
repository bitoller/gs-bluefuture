import notFoundImg from "../../assets/page-not-found-img.jpg";
import { Link } from "react-router-dom";
import "./style.notfound.css";

export function PageNotFound() {
  return (
    <main>
      <div className="img-container">
        <img
          className="not-found-img"
          src={notFoundImg}
          alt={"imagem de dois peixes laranja no meio de uma anêmona."}
        />
        <div className="text-container">
          <p>Você encontrou o Nemo, mas não a página que estava procurando.</p>
          <Link to="/welcome">Retornar para a página inicial</Link>
        </div>
      </div>
    </main>
  );
}
