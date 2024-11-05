import GeneroApi from "../../../services/genero-api";
import { setGeneros, setLoading } from "./reducer";

export const getAllGeneros = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await GeneroApi.getAll();
    dispatch(setGeneros(result));
  } catch (error) {
    console.log("error", error);
  }
  dispatch(setLoading(false));

};
