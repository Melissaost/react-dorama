import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-doramas";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteDorama } from "../store/slices/dorama/actions";

function Table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { doramas, loading } = useSelector((state) => state.dorama);

  const removeDorama = (dorama) => dispatch(deleteDorama(dorama));

  return (
    <div className="h-[80vh] overflow-auto shadow-lg m-[1%]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            {columns.doramas.map((column, i) => (
              <th key={i} scope="col" className="px-2 py-3">
                {column}
              </th>
            ))}
            <th className="px-1 py-3">Editar</th>
            <th className="px-1 py-3">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {loading && <div>Carregando...</div>}

          {!loading &&
            doramas?.map((item, i) => (
              <tr
                key={i}
                className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-2 py-4">{item.id}</td>
                <td className="px-2 py-4">{item.titulo}</td>
                <td className="px-2 py-4">{item.descricao}</td>
                <td className="px-2 py-4">{item.idGenero}</td>
                <td className="px-2 py-4">{item.anoDeLancamento}</td>
                <td className="py-4 text-center justify-center">
                  <button
                    onClick={() => navigate(`/detalhes/${item.id}`)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <FaEdit />
                  </button>
                </td>
                <td className="py-4 text-center justify-center">
                  <button
                    onClick={() => removeDorama(item)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
