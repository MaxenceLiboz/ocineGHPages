import React from "react";
import { Grid } from "@material-ui/core";
import Cards from "./Cards";
import SuitH from "../images/boxerBlue.jpg";

const MSuit = () => {
    return (
        <>
            <Grid container className="pd-3">
                <Grid item md={1} xs={0} />
                <Grid
                    container
                    item
                    md={10}
                    sm={12}
                    spacing={2}
                    justify="center"
                >
                    <Grid item sm={12}>
                        <div className="title">
                            <h2>Nos Maillots de bains homme</h2>
                        </div>
                    </Grid>

                    <Grid item md={4} sm={12} xs={12}>
                        <Cards
                            imgSrc={SuitH}
                            title={"Nom du maillot de bain"}
                            description={"Breve description de l'article"}
                            pageURL="https://www.eurocomswim.com/fr/maillots-loisirs-plage/arena/boxer-de-bain-arena-m-multicolor-stripes-low-waist-short-p-3487.htm?coul_att_detailID=572"
                            button="En savoir plus"
                        />
                    </Grid>
                </Grid>
                <Grid item md={1} xs={0} />
            </Grid>
        </>
    );
};

export default MSuit;
