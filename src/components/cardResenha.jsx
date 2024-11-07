import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { grey } from "@mui/material/colors";
import { Box, Rating } from '@mui/material';

/* eslint-disable react/prop-types */
export default function CardResenha({ resenha }) {

  return (
    <Card sx={{ width: 600, backgroundColor: grey[100] }}>
      <CardActionArea>
        <CardContent>
          <Typography component="div" variant="h6" sx={{ color: grey[900] }}>
            {resenha.titulo}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              Nota: {resenha.nota}
            </Typography>
            <Rating
              name="rating"
              value={resenha.nota}
              readOnly
              size="small"
              sx={{ top: -1 }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {resenha.conteudo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}