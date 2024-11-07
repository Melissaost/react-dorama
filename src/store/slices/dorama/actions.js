import DoramaApi from "../../../services/dorama-api";
import ResenhaApi from "../../../services/resenha-api";
import { setDoramas, setDetalhes, setLoading } from "./reducer";
import Swal from "sweetalert2";

export const getAllDoramas = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await DoramaApi.getAll();
    dispatch(setDoramas(result));
  } catch (error) {
    console.log("error", error);
  }
  dispatch(setLoading(false));
};

export const getDetalhesDorama = (id) => async (dispatch) => {
  try {
    const result = await DoramaApi.getById(id);
    dispatch(setDetalhes(result.data));
  } catch (error) {
    console.log("error", error);
  }
};

export const editForm = (field, value) => async (dispatch, getState) => {
  const dorama = getState().dorama.detalhe;

  dispatch(
    setDetalhes({
      ...dorama,
      [field]: value,
    }),
  );
};

export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const dorama = getState().dorama.detalhe;
      const action = editForm ? DoramaApi.update : DoramaApi.create;
      await action(dorama);
      dispatch(getAllDoramas());

      Swal.fire({
        title: "Sucesso !",
        text: `O dorama ${editForm ? "editado" : "cadastrado"} com sucesso.`,
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
        `Não foi possível ${editForm ? "atualizar" : "cadastrar"}`,
      );
    }
  };

  export const deleteDorama = (dorama) => async (dispatch) => {
    Swal.fire({
      title: `Deseja excluir o dorama ${dorama.titulo}?`,
      text: "Após a exclusão, esta tarefa não poderá ser desfeita.",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#cccc",
      confirmButtonText: "Confirmar Exclusão",
      confirmButtonColor: "green",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await ResenhaApi.remove(dorama.id);
          await DoramaApi.remove(dorama.id);
  
          Swal.fire({
            title: "Sucesso!",
            text: `Dorama ${dorama.titulo} e suas resenhas excluídos com sucesso.`,
            icon: "success",
          });
  
          // Dispara a ação para atualizar a lista de doramas
          dispatch(getAllDoramas());
        } catch (error) {
          Swal.fire({
            title: "Ops!!!",
            text: error.message || "Aconteceu um erro ao tentar deletar",
            icon: "error",
          });
        }
      }
    });
  };
