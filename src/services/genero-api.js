import http from "../config/http";

/**
 * Carrega todos os generos do banco.
 */
async function getAll() {
  try {
    const generos = await http.get("/generos");
    return generos.data;
  } catch (error) {
    console.error("Erro ao buscar gêneros:", error);
    return [];
  }
}

/**
 * Para obter os dados do genero
 * @param {id} id - string
 */
async function getById(id) {
  // poderiam usar o axios
  try {
    return await http.get(`/generos/${id}`);
  } catch {
    throw new Error("não foi possível atualizar");
  }
}

export default {
  getAll,
  getById,
};
