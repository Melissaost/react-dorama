import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllGeneros } from "../store/slices/genero/actions";
import ApresentacaoDorama from "./ApresentacaoDorama";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";
import { saveForm } from "../store/slices/resenha/actions";

// eslint-disable-next-line react/prop-types
function FormResenha({ dorama, mediaNotas }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [conteudo, setconteudo] = useState("");
  const [nota, setNota] = useState(0);

  useEffect(() => {
    dispatch(getAllGeneros());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setNota(newValue);
  };

  const handleReset = () => {
    setTitulo("");
    setconteudo("");
    setNota(0);
  };

  const submitForm = () => {
    const resenha = {
      titulo,
      conteudo,
      nota,
      doramaId: dorama.id,
    };

    dispatch(saveForm(resenha))
      .then(() => navigate("/"))
      .catch(() => Swal.fire("Erro", "Erro ao salvar a resenha.", "error"));
  };

  return (
      <div className="w-1/2 mt-5 max-w-[600px]">
        <div className="mb-6">
          <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900">
            Titulo da resenha
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite aqui o Titulo"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5 w-full focus:ring-gray-500 focus:border-gray-500"
            required
          />
        </div>

        <div className="mb-4 flex">
          <label htmlFor="nota" className="text-sm font-medium text-gray-900 mr-2">
            Nota
          </label>
          <Rating
            name="nota"
            value={nota}
            onChange={handleChange}
            precision={0.5}
            size="large"
            sx={{ top: -5 }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="conteudo" className="block mb-2 text-sm font-medium text-gray-900">
            Descrição:
          </label>
          <textarea
            id="conteudo"
            rows="4"
            value={conteudo}
            onChange={(e) => setconteudo(e.target.value)}
            placeholder="Digite aqui a Descrição"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5 w-full focus:ring-gray-500 focus:border-gray-500"
          ></textarea>
        </div>

        <div className="flex justify-center gap-4 mb-5">
          <button
            type="button"
            onClick={submitForm}
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Salvar
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
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
  );
}

export default FormResenha;