import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {isMobile ? (
                <div className="footer">
                    <section>
                        <div className="row">
                            <div className="box">
                                <div className="date">
                                    <div className="month">Sep</div>
                                    <h1 className="day">28</h1>
                                </div>
                            </div>

                            <div className="pad" style={{ width: "100%" }}>
                                <h3>Sortie de la premiere collection</h3>
                                <p>
                                    Pour notre première collection nous avons
                                    decidé de sortir ...
                                </p>
                            </div>
                        </div>
                        <div className="row next">
                            <div className="box">
                                <div className="date">
                                    <div className="month">Sep</div>
                                    <h1 className="day">18</h1>
                                </div>
                            </div>
                            <div className="pad" style={{ width: "100%" }}>
                                <h3>Sortie de notre site</h3>
                                <p>
                                    Nous avons décidé de créer notre site ....
                                </p>
                            </div>
                        </div>
                    </section>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item xs={11}>
                            <header>
                                <h2>Nous suivre</h2>
                            </header>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={11}>
                            <div>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.facebook.com"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "facebook"]}
                                        className="facebook icon"
                                        size="2x"
                                        color="white"
                                    />
                                </a>

                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://twitter.com/"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "twitter"]}
                                        className="twitter icon"
                                        size="2x"
                                        color="white"
                                    />
                                </a>

                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.instagram.com"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "instagram"]}
                                        className="instagram icon"
                                        size="2x"
                                        color="white"
                                    />
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item xs={11} container className="pdt-1">
                            <Grid item xs={4}>
                                <h3>Addresse</h3>
                            </Grid>
                            <Grid item xs={8}>
                                <p>
                                    Untitled Incorporated
                                    <br />
                                    1234 Somewhere Road Suite
                                    <br />
                                    Paris
                                </p>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid className="next" item xs={11} container>
                            <Grid item xs={4}>
                                <h3>Email</h3>
                            </Grid>
                            <Grid item xs={8}>
                                <p>
                                    <a href="mailto: ocinabrand@gmail.com">
                                        ocinabrand@gmail.com
                                    </a>
                                </p>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid className="next" item xs={11} container>
                            <Grid item xs={4}>
                                <h3>Téléphone</h3>
                            </Grid>
                            <Grid item xs={8}>
                                <p>060000000</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item xs={10}>
                            <div className="copyright">
                                &copy; Ocina. All rights reserved. Help Designed
                                with: HTML5 UP
                            </div>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </div>
            ) : (
                <div>
                    <div className="footer row">
                        <section style={{ width: "60%" }}>
                            <div className="row">
                                <div className="box">
                                    <div className="date">
                                        <div className="month">Sep</div>
                                        <h1 className="day">28</h1>
                                    </div>
                                </div>

                                <div className="pad">
                                    <h3>Sortie de la premiere collection</h3>
                                    <p>
                                        Pour notre première collection nous
                                        avons decidé de sortir ...
                                    </p>
                                </div>
                            </div>
                            <div className="row next">
                                <div className="box">
                                    <div className="date">
                                        <div className="month">Sep</div>
                                        <h1 className="day">18</h1>
                                    </div>
                                </div>
                                <div className="pad">
                                    <h3>Sortie de notre site</h3>
                                    <p>
                                        Nous avons décidé de créer notre site
                                        ....
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <Grid container>
                                <Grid item xs={4} />
                                <Grid item xs={8}>
                                    <header>
                                        <h2>Nous suivre</h2>
                                    </header>
                                </Grid>
                                <Grid item xs={4} />
                                <Grid item xs={8}>
                                    <div>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://www.facebook.com"
                                        >
                                            <FontAwesomeIcon
                                                icon={["fab", "facebook"]}
                                                className="facebook icon"
                                                size="2x"
                                                color="white"
                                            />
                                        </a>

                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://twitter.com/"
                                        >
                                            <FontAwesomeIcon
                                                icon={["fab", "twitter"]}
                                                className="twitter icon"
                                                size="2x"
                                                color="white"
                                            />
                                        </a>

                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://www.instagram.com"
                                        >
                                            <FontAwesomeIcon
                                                icon={["fab", "instagram"]}
                                                className="instagram icon"
                                                size="2x"
                                                color="white"
                                            />
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={4} />
                                <Grid item xs={8} container className="pdt-1">
                                    <Grid item xs={4}>
                                        <h3 className="m2vh">Addresse</h3>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className="m21vh">
                                            Untitled Incorporated
                                            <br />
                                            1234 Somewhere Road Suite
                                            <br />
                                            Paris
                                        </p>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} />
                                <Grid className="next" item xs={8} container>
                                    <Grid item xs={4}>
                                        <h3 className="m2vh">Email</h3>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className="m21vh">
                                            <a href="mailto: ocinabrand@gmail.com">
                                                ocinabrand@gmail.com
                                            </a>
                                        </p>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} />
                                <Grid className="next" item xs={8} container>
                                    <Grid item xs={4}>
                                        <h3 className="m2vh">Téléphone</h3>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <p className="m21vh">060000000</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </section>
                    </div>
                    <div className="footCopyright">
                        <Grid container>
                            <Grid item xs={3} />
                            <Grid item xs={6}>
                                <div className="copyright">
                                    &copy; Ocina. All rights reserved. Maxence
                                    Liboz design help with: HTML5 UP
                                </div>
                            </Grid>
                            <Grid item xs={3} />
                        </Grid>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;
