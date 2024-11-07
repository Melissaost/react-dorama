import { useDispatch } from "react-redux";
import { editForm, saveForm } from "../store/slices/dorama/actions";
import { useNavigate } from "react-router-dom";
import { getAllGeneros } from "../store/slices/genero/actions";
import { useEffect, useState } from "react";
import ApresentacaoDorama from "./apresentacaoDorama";
import { Rating } from "@mui/material";

// eslint-disable-next-line react/prop-types
function FormResenha({ dorama, mediaNotas }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nota, setNota] = useState(0);

    // Ciclo de vida do componente
    useEffect(() => {
        dispatch(getAllGeneros());
    }, [dispatch]);

    // Função para alterar o campo
    const changeField = (field, value) => dispatch(editForm(field, value));

    // Função de alteração da nota
    const handleChange = (event, newValue) => {
        setNota(newValue);
        changeField("nota", newValue); 
    };

    // Função para limpar os campos
    const handleReset = () => {
        setTitulo("");
        setDescricao("");
        setNota(0); 
    };

    const submitForm = () => {
        dispatch(saveForm()).then(() => navigate("/")); 
    };

    return (
        <div className="cadastro pb-[2%] min-h-[82vh] flex flex-col items-center justify-start">
            <ApresentacaoDorama dorama={dorama} nota={mediaNotas} />
            <div className="w-[50%] mt-[20px]">
                {/* Título da resenha */}
                <div className="mb-6">
                    <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900">
                        Titulo da resenha
                    </label>
                    <input
                        type="text"
                        id="titulo"
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite aqui o Titulo"
                        value={titulo} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                        required
                    />
                </div>

                {/* Nota */}
                <div className="mb-1 flex">
                    <label htmlFor="nota" className="block text-sm font-medium text-gray-900 mr-2">
                        Nota
                    </label>
                    <Rating
                        name="nota"
                        value={nota}
                        onChange={handleChange}
                        precision={0.5}
                        size="large" 
                        className="mb-4"
                        sx={{ top: -5 }}
                    />
                </div>

                {/* Descrição */}
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                        Descrição:
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} 
                        placeholder="Digite aqui a Descrição"
                    ></textarea>
                </div>

                {/* Botões */}
                <div className="flex justify-center w-full gap-10">
                    <button
                        type="button"
                        onClick={submitForm}
                        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Salvar
                    </button>
                    {/* Botão Limpar */}
                    <button
                        type="button" 
                        onClick={handleReset} 
                        className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Limpar
                    </button>
                    <button
                    type="button" 
                    onClick={() => navigate(`/resenhas/${dorama.id}`)}
                    className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Voltar
                </button>
                </div>
            </div>
        </div>
    );
}

export default FormResenha;