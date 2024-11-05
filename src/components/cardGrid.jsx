import Grid from "@mui/material/Grid";
import CardDorama from "./cardDorama";

export default function CardGrid({ cards }) {

    return (
        <Grid container spacing={2}>
            {cards.map((dorama, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CardDorama dorama={dorama}/>
                </Grid>
            ))}
        </Grid>
    );
}