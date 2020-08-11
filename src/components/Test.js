import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonCss from "./CssButton";
import { Grid } from "@material-ui/core";

const Test = () => {
    return (
        <>
            <Grid container spacing={2} alignItems="center">
                <Grid item md={4} sm={6} xs={12}>
                    <div className="featured">
                        <FontAwesomeIcon
                            color="#0077c2"
                            icon="tint"
                            size="5x"
                            style={{
                                width: "100%",
                            }}
                        />
                    </div>
                    <header>
                        <h2>Caracteristique</h2>
                    </header>

                    <p>Approfondir la carac mis en avant.</p>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className="featured">
                        <FontAwesomeIcon
                            color="#0077c2"
                            icon="hand-holding-water"
                            size="5x"
                            style={{
                                width: "100%",
                            }}
                        />
                    </div>
                    <header>
                        <h2>Caracteristique</h2>
                    </header>
                    <p>Approfondir la carac mis en avant.</p>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className="featured">
                        <FontAwesomeIcon
                            color="#0077c2"
                            icon="swimmer"
                            size="5x"
                            style={{
                                width: "100%",
                            }}
                        />
                    </div>
                    <header>
                        <h2>Caracteristique</h2>
                    </header>
                    <p>Approfondir la carac mis en avant.</p>
                </Grid>
                <section className="button">
                    <ButtonCss variant="contained" color="primary">
                        Acheter des maintenant
                    </ButtonCss>
                    <ButtonCss
                        variant="contained"
                        color="primary"
                        className="alt"
                    >
                        En savoir plus sur nous
                    </ButtonCss>
                </section>
            </Grid>
        </>
    );
};

export default Test;
