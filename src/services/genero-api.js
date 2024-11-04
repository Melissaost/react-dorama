import http from "../config/http";
/**
 * Carrega todos os doramas do banco.
 */
async function getAll() {
  const doramas = await http.get("/doramas");
  return doramas.data;
}
/**
 * Faz a remoção do arquivo na api.
 * @param {id} id - identificador do dorama na api
 */
async function remove(id) {
  // poderiam usar o axios
  try {
    await http.delete(`/doramas/${id}`);
  } catch {
    throw new Error("## Não foi possível deletar");
  }
}
/**
 * Faz a remoção do arquivo na api.
 * @param {dorama} dorama - objeto do dorama (...deve ser definido na interface)
 */

/**
 * Faz o cadastro na api.
 * @param {dorama} dorama - objeto do dorama (...deve ser definido na interface)
 */
async function create(dorama) {
  try {
    await http.post(`/doramas/`, dorama);
  } catch {
    throw new Error("## Não foi possível cadastrar");
  }
}
async function update(form) {
  // poderiam usar o axios
  try {
    await http.patch(`/doramas/${form.id}`, form);
  } catch {
    throw new Error("## Não foi possível atualizar");
  }
}
/**
 * Para obter os dados do dorama
 * @param {id} id - string
 */
async function getById(id) {
  // poderiam usar o axios
  try {
    return await http.get(`/doramas/${id}`);
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
