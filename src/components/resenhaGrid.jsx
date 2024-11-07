import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import CardResenha from "./cardResenha";
import ApresentacaoDorama from "./ApresentacaoDorama";
import { useEffect } from "react";
import { getDetalhesDorama } from "../store/slices/dorama/actions";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ResenhaGrid({ id }) {
    const navigate = useNavigate();
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
            {(!resenhas || resenhas.length === 0) ? (
                <div className="my-5">
                    Nenhuma resenha encontrada para o dorama: {dorama.titulo}.
                </div>
            ) : (
                <Grid 
                    container 
                    spacing={1}
                    justifyContent="center" 
                    alignItems="flex-start"
                    sx={{ padding: 5, width: "100%" }}
                >
                    {resenhas.map((resenha, index) => (
                        <Grid
                            item
                            xs={12}
                            key={index}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                padding: 1
                            }}
                        >
                            <CardResenha resenha={resenha} />
                        </Grid>
                    ))}
                </Grid>
            )}
            <div className="flex justify-center w-full gap-10 mb-10">
                <button
                    type="button"
                    onClick={() => navigate(`/adicionar-resenha/${dorama.id}`)}
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Adicionar
                </button>
                {/* Botão Limpar */}
                <button
                    type="button" 
                    onClick={() => navigate(`/`)}
                    className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Voltar
                </button>
            </div>
        </Box>
    );
}

export default ResenhaGrid;