import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getResenhaDorama } from "../store/slices/resenha/actions";
import { useDispatch } from "react-redux";
import ResenhaGrid from "../components/resenhaGrid";


function Resenhas() {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResenhaDorama(id));
  }, [dispatch, id]);

  return <ResenhaGrid id={id} />;
}

export default Resenhas;