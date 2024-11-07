import { useDispatch, useSelector } from "react-redux";
import { Box} from "@mui/material";
import ApresentacaoDorama from "./ApresentacaoDorama";
import { useEffect } from "react";
import { getDetalhesDorama } from "../store/slices/dorama/actions";
import ResenhaGrid from "./resenhaGrid";
import FormResenha from "./formResenha";

/* eslint-disable react/prop-types */
function Resenhas({ id, formResenha }) {
    const dispatch = useDispatch();
    const { resenhas, loading } = useSelector((state) => state.resenha);
    const dorama = useSelector((state) => state.dorama.detalhe);
    
    useEffect(() => {
        dispatch(getDetalhesDorama(id));
    }, [dispatch, id]);

    const calcularMediaNotas = () => {
        if (resenhas && resenhas.length > 0) {
            const somaNotas = resenhas.reduce((acc, resenha) => acc + resenha.nota, 0);
            return somaNotas / resenhas.length;
        }
        return 0;
    };
    const mediaNotas = calcularMediaNotas();

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <Box sx={{ minHeight: "80vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: resenhas && resenhas.length > 0 ? "flex-start" : "center" }}>
            <ApresentacaoDorama dorama={dorama} nota={mediaNotas} />
            {!formResenha ? 
            <ResenhaGrid resenhas={resenhas} dorama={dorama}/>
            : <FormResenha dorama={dorama} mediaNotas={mediaNotas}/>
            }
        </Box>
    );
}

export default Resenhas;