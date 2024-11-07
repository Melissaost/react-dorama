import { Box, Grid } from "@mui/material";
import CardResenha from "./cardResenha";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ResenhaGrid({ resenhas, dorama }) {
    const navigate = useNavigate();

    return (
        <Box>
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