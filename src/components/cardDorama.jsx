import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { deleteDorama } from "../store/slices/dorama/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { grey } from "@mui/material/colors";
import { FaEdit, FaTrash } from "react-icons/fa";

//const removeDorama = (dorama) => dispatch(deleteDorama(dorama));

/* eslint-disable react/prop-types */
function CardDorama({ dorama }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeDorama = (dorama) => dispatch(deleteDorama(dorama));

    const imagePath = "/imagens/";

    return (
        <Card
        sx={{
            maxWidth: 345,
            height: 470, // Altura fixa para todos os cards
            display: "flex",
            flexDirection: "column",
        }}
        >
        <CardActionArea sx={{ flex: "0 0 auto" }}>
            <CardMedia
            component="img"
            sx={{
                height: 200, 
                objectFit: "cover",
            }}
            image={`${imagePath}${dorama.imagem}`}
            alt={dorama.titulo}
            />
            <CardContent
            sx={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}
            >
            <Typography gutterBottom variant="h7" component="div">
                {dorama.titulo}
            </Typography>
            <Typography sx={{ color: grey[400], mb: 1.5, fontSize: "0.875rem" }}>
                {dorama.genero.genero} - {dorama.anoDeLancamento}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                color: "text.secondary",
                fontSize: "0.85rem",
                flexGrow: 1,
                }}
            >
                {dorama.descricao}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions
            sx={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            }}
        >
            <Button
            size="small"
            sx={{ color: grey[700] }}
            onClick={() => navigate(`/detalhes/${dorama.id}`)}
            >
            Saiba mais
            </Button>
            <div>
            <button
                onClick={() => navigate(`/detalhes/${dorama.id}`)}
                className="font-medium hover:underline"
                style={{ color: grey[700] }}
            >
                <FaEdit />
            </button>
            <button
                onClick={() => removeDorama(dorama)}
                className="font-medium hover:underline ml-2"
                style={{ color: grey[700] }}
            >
                <FaTrash />
            </button>
            </div>
        </CardActions>
        </Card>
    );
}

export default CardDorama;
