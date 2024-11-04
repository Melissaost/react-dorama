import { useDispatch, useSelector } from "react-redux";
import { editForm, saveForm } from "../store/slices/dorama/actions";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Form({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dorama = useSelector((state) => state.dorama.detalhe);

  const changeField = (field, value) => dispatch(editForm(field, value));

  const submitForm = () => dispatch(saveForm(isEdit)).then(() => navigate("/"));

  return (
    <div className="cadastro p-[10%] h-[82vh]">
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="titulo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Titulo
            </label>
            <input
              type="text"
              id="titulo"
              onChange={(e) => changeField("titulo", e.target.value)}
              placeholder="Digite aqui o Titulo"
              value={dorama?.titulo || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="idGenero"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Gênero
            </label>
            <input
              type="text"
              id="idGenero"
              onChange={(e) => changeField("idGenero", e.target.value)}
              placeholder="Digite o gênero"
              value={dorama?.idGenero || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="anoDeLancamento"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Ano de lançamento
            </label>
            <input
              type="anoDeLancamento"
              id="anoDeLancamento"
              onChange={(e) => changeField("anoDeLancamento", e.target.value)}
              placeholder="Digite o ano de lançamento"
              value={dorama?.anoDeLancamento || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Descrição:
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={dorama?.descricao || ""}
            onChange={(e) => changeField("descricao", e.target.value)}
            placeholder="Digite aqui a Descrição"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={submitForm}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Form;
