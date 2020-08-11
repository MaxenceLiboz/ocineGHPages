import React from "react";
import team from "../images/team.jpg";
import { Grid } from "@material-ui/core";
import Cards from "./Cards";

const Project = () => {
    return (
        <>
            <Grid container>
                <Grid item md={1} />

                <Grid
                    container
                    item
                    md={10}
                    sm={12}
                    style={{
                        backgroundColor: "whitesmoke",
                    }}
                    spacing={2}
                >
                    {/* Picture of the all team */}
                    <Grid item md={12}>
                        <img
                            src={team}
                            alt="team"
                            style={{
                                width: "100%",
                                height: "25em",
                            }}
                        />
                    </Grid>

                    {/* Project description */}
                    <Grid item md={12}>
                        <section className="projDes">
                            <h1>Notre projet</h1>
                            <h3>Breve description du projet</h3>
                            <p>
                                Détailler en faisant un ou plusieurs paragraphes
                            </p>
                            <p>
                                Vestibulum scelerisque ultricies libero id
                                hendrerit. Vivamus malesuada quam faucibus ante
                                dignissim auctor hendrerit libero placerat.
                                Nulla facilisi. Proin aliquam felis non arcu
                                molestie at accumsan turpis commodo. Proin
                                elementum, nibh non egestas sodales, augue quam
                                aliquet est, id egestas diam justo adipiscing
                                ante. Pellentesque tempus nulla non urna
                                eleifend ut ultrices nisi faucibus. Vestibulum
                                scelerisque ultricies libero id hendrerit.
                                Vivamus malesuada quam faucibus ante dignissim
                                auctor hendrerit libero placerat. Nulla
                                facilisi. Proin aliquam felis non arcu molestie
                                at accumsan turpis commodo. Proin elementum,
                                nibh non egestas sodales, augue quam aliquet
                                est, id egestas diam justo adipiscing ante.
                            </p>
                        </section>
                    </Grid>

                    {/* 1st teammate */}
                    <Grid item md={6} style={{ textAlign: "center" }}>
                        <Cards
                            imgSrc={team}
                            title={"Alexandre Verplaetse"}
                            description={
                                <p className="justify">
                                    Nageur de haut niveau, étudiant en droit.
                                    J'ai 20 ans, je suis en première année de
                                    droit ...
                                </p>
                            }
                            pageURL="/"
                        />
                    </Grid>

                    {/* 2st teammate */}
                    <Grid item md={6} style={{ textAlign: "center" }}>
                        <Cards
                            imgSrc={team}
                            title={"Maxence Liboz"}
                            description={
                                <p className="justify">
                                    Nageur de haut niveau, étudiant en droit.
                                    J'ai 20 ans, je suis en première année de
                                    droit ..."
                                </p>
                            }
                            pageURL="/"
                        />
                    </Grid>
                    {/* 3st teammate */}
                    <Grid item md={6} style={{ textAlign: "center" }}>
                        <Cards
                            imgSrc={team}
                            title={"Maxence Liboz"}
                            description={
                                <p className="justify">
                                    Nageur de haut niveau, étudiant en droit.
                                    J'ai 20 ans, je suis en première année de
                                    droit ..."
                                </p>
                            }
                            pageURL="/"
                        />
                    </Grid>
                    {/* 4st teammate */}
                    <Grid item md={6} style={{ textAlign: "center" }}>
                        <Cards
                            imgSrc={team}
                            title={"Alexandre Verplaetse"}
                            description={
                                <p className="justify">
                                    Nageur de haut niveau, étudiant en droit.
                                    J'ai 20 ans, je suis en première année de
                                    droit ...
                                </p>
                            }
                            pageURL="/"
                        />
                    </Grid>
                </Grid>
                <Grid item md={1} />
            </Grid>
        </>
    );
};

export default Project;
