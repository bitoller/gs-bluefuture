import { MainRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainRoutes />
    </>
  );
}

export default App;
