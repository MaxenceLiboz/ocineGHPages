import React from "react";
import Cards from "./Cards";
import { Grid } from "@material-ui/core";
import SuitH from "../images/boxerBlue.jpg";
import SuitF from "../images/suitBlue.jpg";
import Cap from "../images/capFR.jpg";

const Products = () => {
    return (
        <>
            <Grid container className="pd-3">
                <Grid item md={1} sm={0} />
                <Grid item sm={12} md={10}>
                    <div className="title">
                        <h2>Nos produits</h2>
                    </div>

                    <Grid container justify="center" spacing={2}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Cards
                                imgSrc={SuitH}
                                title={"Nom du maillot de bain"}
                                description={"Breve description de l'article"}
                                pageURL="https://www.eurocomswim.com/fr/maillots-loisirs-plage/arena/boxer-de-bain-arena-m-multicolor-stripes-low-waist-short-p-3487.htm?coul_att_detailID=572"
                                button="En savoir plus"
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Cards
                                imgSrc={SuitF}
                                title={"Nom du maillot de bain"}
                                description={"Breve description de l'article"}
                                pageURL="https://www.eurocomswim.com/fr/maillots-loisirs-plage/arena/maillot-de-bain-1-piece-arena-w-multicolor-stripes-challenge-back-one-piece-p-3476.htm?coul_att_detailID=572"
                                button="En savoir plus"
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Cards
                                imgSrc={Cap}
                                title={"Nom du bonnet de bain"}
                                description={"Breve description de l'article"}
                                pageURL="https://www.eurocomswim.com/fr/adultes/arena/bonnet-de-bain-arena-flags-silicone-cap-france-p-3489.htm?coul_att_detailID=572"
                                button="En savoir plus"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Products;
