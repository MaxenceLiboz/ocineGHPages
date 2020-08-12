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
                                title={"Maillot de bain homme"}
                                description={"Breve description de l'article"}
                                pageURL="/ocineGHPages"
                                button="En savoir plus"
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Cards
                                imgSrc={SuitF}
                                title={"Maillot de bain femme"}
                                description={"Breve description de l'article"}
                                pageURL="/ocineGHPages"
                                button="En savoir plus"
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Cards
                                imgSrc={Cap}
                                title={"Bonnet de bain"}
                                description={"Breve description de l'article"}
                                pageURL="/ocineGHPages"
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
