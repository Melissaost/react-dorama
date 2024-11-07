import Grid from "@mui/material/Grid";
import CardDorama from "./cardDorama";

/* eslint-disable react/prop-types */
export default function CardGrid({ cards }) {

    return (
        <Grid container spacing={2}>
            {cards.map((dorama, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} 
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    padding: 2,
                }}>
                    <CardDorama dorama={dorama}/>
                </Grid>
            ))}
        </Grid>
    );
}