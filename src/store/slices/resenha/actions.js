import ResenhaApi from "../../../services/resenha-api.js";
import { setResenhas, setLoading } from "./reducer";

export const getAllResenhas = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await ResenhaApi.getAll();
    dispatch(setResenhas(result));
  } catch (error) {
    console.log("error", error);
  }
  dispatch(setLoading(false));
};


export const getResenhaDorama = (id) => async (dispatch) => {
  try {
    const result = await ResenhaApi.getById(id);
    dispatch(setResenhas(result.data));
  } catch (error) {
    console.log("error", error);
  }
};
