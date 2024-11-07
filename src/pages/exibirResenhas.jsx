import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getResenhaDorama } from "../store/slices/resenha/actions";
import { useDispatch } from "react-redux";
import Resenhas from "../components/resenhas";


function ExibirResenhas() {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResenhaDorama(id));
  }, [dispatch, id]);

  return <Resenhas id={id} formResenha={false}/>;
}

export default ExibirResenhas;