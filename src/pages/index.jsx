import Table from "../components/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDoramas } from "../store/slices/dorama/actions";

function Initial() {
  const dispatch = useDispatch();

  //ciclo de vida do componente
  useEffect(() => {
    dispatch(getAllDoramas());
  }, []);

  return <Table />;
}

export default Initial;
