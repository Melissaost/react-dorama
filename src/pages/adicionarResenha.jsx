import { useParams } from "react-router-dom";
import Resenhas from "../components/resenhas";

function AdicionarResenha() {
  let { id } = useParams();

  return <Resenhas id={id} formResenha={true}/>;
}

export default AdicionarResenha;