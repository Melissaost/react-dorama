import { useSelector } from "react-redux";
import CardGrid from "./cardGrid.jsx";

function Table() {
  const { doramas, loading } = useSelector((state) => state.dorama);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex justify-center overflow-auto shadow-lg m-[2%] p-[2%]">
      <CardGrid cards={doramas} /> 
    </div>
  );
}

export default Table;