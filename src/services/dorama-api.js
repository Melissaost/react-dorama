import http from "../config/http";

const pathIdentify = "/doramas";

/**
 * Carrega todos os doramas
 */
async function getAll() {
  const doramas = await http.get(pathIdentify);
  return doramas.data;
}

/**
 * Faz a remoção do arquivo na api.
 * @param {id} id - identificador do dorama na api
 */
async function remove(id) {
  // poderiam usar o axios
  try {
    await http.delete(`${pathIdentify}/${id}`);
  } catch {
    throw new Error("## Não foi possível deletar");
  }
}

/**
 * Faz o cadastro na api.
 * @param {dorama} dorama - objeto do dorama (...deve ser definido na interface)
 */
async function create(dorama) {
  try {
    await http.post(pathIdentify, dorama);
  } catch {
    throw new Error("## Não foi possível cadastrar");
  }
}
async function update(dorama) {
  try {
    await http.patch(`${pathIdentify}/${dorama.id}`, dorama);
  } catch {
    throw new Error("## Não foi possível atualizar");
  }
}
/**
 * Para obter os dados do dorama
 * @param {id} id - string
 */
async function getById(id) {
  try {
    return await http.get(`${pathIdentify}/${id}`);
  } catch {
    throw new Error("não foi possível atualizar");
  }
}

export default {
  getAll,
  remove,
  create,
  update,
  getById,
};
