import { Link } from "react-router-dom";

function ErrorDorama() {
  return (
    <div className="error">
      <h2>Dorama não foi encontrado.</h2>
      <h5>Não foi possível encontrar o dorama buscado.</h5>
      <br />
      <br />
      <br />
      <br />
      <Link to="/">Volte para pagina Inicial</Link>
    </div>
  );
}

export default ErrorDorama;
