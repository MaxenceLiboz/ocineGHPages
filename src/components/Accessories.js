import React from "react";
import { Grid } from "@material-ui/core";
import Cards from "./Cards";
import CapFR from "../images/capFR.jpg";

const Accessories = () => {
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
                            <h2>Nos accesoires</h2>
                        </div>
                    </Grid>

                    <Grid item md={4} sm={12} xs={12}>
                        <Cards
                            imgSrc={CapFR}
                            title={<>Bonnet ARENA drapeau Français</>}
                            description={
                                <>
                                    Bonnet de bain souple et doux aux couleurs
                                    de la France revisitées de façon tendance
                                </>
                            }
                            pageURL="https://www.eurocomswim.com/fr/adultes/arena/bonnet-de-bain-arena-flags-silicone-cap-france-p-3489.htm?coul_att_detailID=572"
                            button="En savoir plus"
                        />
                    </Grid>
                </Grid>
                <Grid item md={1} xs={0} />
            </Grid>
        </>
    );
};

export default Accessories;
