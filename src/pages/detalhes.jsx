import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorDorama from "../components/error";
import { getDetalhesDorama } from "../store/slices/dorama/actions";
import { useDispatch, useSelector } from "react-redux";

function Detalhes() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const dorama = useSelector((state) => state.dorama.detalhe);

  useEffect(() => {
    dispatch(getDetalhesDorama(id));
  }, [dispatch, id]);

  if (!dorama) {
    return <ErrorDorama />;
  } else {
    return <Form isEdit />;
  }
}

export default Detalhes;
