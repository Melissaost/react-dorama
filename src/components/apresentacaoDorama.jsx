import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { grey } from "@mui/material/colors";


/* eslint-disable react/prop-types */
export default function ApresentacaoDorama({ dorama, nota}) {
    const imagePath = "/imagens/";

    return (
        <Card sx={{ display: 'flex', 
        justifyContent: 'space-between',
        marginTop: 8,
        width: 600}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {dorama.titulo}
                </Typography>
                <Typography sx={{ color: grey[400], mb: 0.5, fontSize: "0.875rem" }}>
                    {dorama.anoDeLancamento} - {dorama.genero?.genero}
                </Typography>
                {/* Exibir a média das estrelas */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                        <Typography variant="body2" sx={{ marginRight: 1 }}>
                            Média de Avaliações:
                        </Typography>
                        <Rating
                            value={nota}
                            readOnly
                            size="small"
                            precision={0.5}
                        />
                </Box>
                <Typography
                variant="body2"
                sx={{
                color: "text.secondary",
                fontSize: "0.85rem",
                flexGrow: 1,
                }}>
                    {dorama.descricao}
                </Typography>
                </CardContent>
            </Box>
            <CardMedia
            component="img"
            sx={{
                width: '40%',
                objectFit: "cover",
            }}
            image={`${imagePath}${dorama.imagem}`}
            alt={dorama.titulo}
            />
        </Card>
    );
}