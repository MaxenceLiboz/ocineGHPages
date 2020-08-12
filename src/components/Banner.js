import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import ButtonCss from "./CssButton";
import { withRouter } from "react-router-dom";

const Banner = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const { history } = props;
    const handleClick = (pageURL) => {
        history.push(pageURL);
    };

    return (
        <>
            <div>
                <section className="banner">
                    <header>
                        <h2>Bienvenue sur Ocina</h2>
                        <p>
                            Une marque créer pour les nageurs par des nageurs.
                        </p>
                    </header>
                </section>
            </div>

            {isMobile ? (
                <div className="border">
                    <section className="mobileIntro">
                        <section>
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
                        </section>
                        <section className="borderIcon">
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
                        </section>
                        <section className="borderIcon">
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
                        </section>
                    </section>
                    <section className="button col">
                        <ButtonCss variant="contained" color="primary">
                            <a
                                href="https://www.eurocomswim.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                Acheter des maintenant
                            </a>
                        </ButtonCss>
                        <ButtonCss
                            variant="contained"
                            color="primary"
                            className="alt"
                            style={{ marginTop: "1em" }}
                            onClick={() => handleClick("/ocineGHPages/project")}
                        >
                            En savoir plus sur nous
                        </ButtonCss>
                    </section>
                </div>
            ) : (
                <div className="border">
                    <section className="intro">
                        <section className="first">
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
                        </section>
                        <section className="middle">
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
                        </section>
                        <section className="last">
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
                        </section>
                    </section>
                    <section className="button">
                        <ButtonCss variant="contained" color="primary">
                            <a
                                href="https://www.eurocomswim.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                Acheter des maintenant
                            </a>
                        </ButtonCss>

                        <ButtonCss
                            variant="contained"
                            color="primary"
                            className="alt"
                            onClick={() => handleClick("/ocineGHPages/project")}
                        >
                            En savoir plus sur nous
                        </ButtonCss>
                    </section>
                </div>
            )}
        </>
    );
};

export default withRouter(Banner);
