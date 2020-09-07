import React from "react";
import { Grid } from "@material-ui/core";
import Cards from "./Cards";
import SuitF from "../images/suitBlue.jpg";

const FSuit = () => {
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
                            <h2>Nos Maillots de bains femme</h2>
                        </div>
                    </Grid>

                    <Grid item md={4} sm={12} xs={12}>
                        <Cards
                            imgSrc={SuitF}
                            title={<>Maillot ARENA multicolor stripes</>}
                            description={
                                <>
                                    Maillot de bain 1 pièce ARENA à bretelles
                                    fines associées à une large ouverture au
                                    niveau du dos et offrant un liberté de
                                    mouvement maximale.
                                </>
                            }
                            pageURL="https://www.eurocomswim.com/fr/maillots-loisirs-plage/arena/maillot-de-bain-1-piece-arena-w-multicolor-stripes-challenge-back-one-piece-p-3476.htm?coul_att_detailID=572"
                            button="En savoir plus"
                        />
                    </Grid>
                </Grid>
                <Grid item md={1} xs={0} />
            </Grid>
        </>
    );
};

export default FSuit;
