import ResenhaApi from "../../../services/resenha-api.js";
import { setResenhas, setLoading } from "./reducer";
import Swal from "sweetalert2";

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

export const saveForm = (resenha) =>
  async (dispatch) => {
    try {
      await ResenhaApi.create(resenha);
      dispatch(getAllResenhas());

      Swal.fire({
        title: "Sucesso !",
        text: `O dorama foi cadastrado com sucesso.`,
        icon: "success",
      });

      return Promise.resolve();
    } catch {
      Swal.fire({
        title: "Erro!",
        text: `Aconteceu um erro ao cadastrar o dorama.`,
        icon: "error",
      });
      throw new Error(
        `Não foi possível cadastrar`,
      );
    }
  };
