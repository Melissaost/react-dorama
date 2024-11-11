import http from "../config/http";

/**
 * Carrega todos os generos do banco.
 */
async function getAll() {
    try {
        const resenhas = await http.get("/resenhas");
        return resenhas.data;
    } catch (error) {
        console.error("Erro ao buscar resenhas:", error);
        return [];
    }
}

/**
 * Para obter as resenhas do dorama
 * @param {id} id - string
 */
async function getById(id) {
    try {
        const resenhas = await http.get(`/resenhas?doramaId=${id}`);
        console.log(resenhas.data)
        return resenhas;
    } catch (error) {
        throw new Error("Não foi possível buscar a resenha", error);
    }
}


async function remove(doramaId) {
    try {
        // Pega todas as resenhas do dorama com o 'doramaId'
        const response = await http.get(`/resenhas?doramaId=${doramaId}`);
        const resenhas = response.data;

        // Deleta todas as resenhas encontradas
        await Promise.all(
            resenhas.map(resenha => {
                return http.delete(`/resenhas/${resenha.id}`);
            })
        );
    } catch {
        throw new Error("Não foi possível deletar as resenhas.");
    }
}

async function create(resenha) {
    try {
        await http.post(`/resenhas`, resenha);
    } catch {
        throw new Error("## Não foi possível cadastrar");
    }
}

export default {
    getAll,
    getById,
    remove,
    create
};
