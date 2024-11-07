import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetalhesDorama } from "../store/slices/dorama/actions";
import { useDispatch, useSelector } from "react-redux";
import FormResenha from "../components/formResenha";

function AdicionarResenha() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const dorama = useSelector((state) => state.dorama.detalhe);

  useEffect(() => {
    dispatch(getDetalhesDorama(id));
  }, [dispatch, id]);

  return <FormResenha dorama={dorama} mediaNotas={0}/>;
}

export default AdicionarResenha;