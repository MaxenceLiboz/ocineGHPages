import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

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

                    <section>
                        <header>
                            <h2>Nous suivre</h2>
                        </header>
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

                        <div className="row pad-top">
                            <h3 style={{ width: "4em" }}>Addresse</h3>
                            <p className="pad">
                                Untitled Incorporated
                                <br />
                                1234 Somewhere Road Suite
                                <br />
                                Paris
                            </p>
                        </div>
                        <div className="row next">
                            <h3 style={{ width: "4em" }}>Email</h3>
                            <p className="pad">ocinabrand@gmail.com</p>
                        </div>
                        <div className="row next">
                            <h3 style={{ width: "4em" }}>Téléphone</h3>
                            <p className="pad">060000000</p>
                        </div>
                    </section>
                    <div className="copyright">
                        &copy; Ocina. All rights reserved. Help Designed with:
                        HTML5 UP
                    </div>
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
                            <header>
                                <h2>Nous suivre</h2>
                            </header>
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

                            <div className="row pad-top">
                                <h3 style={{ width: "4em" }}>Addresse</h3>
                                <p className="pad">
                                    Untitled Incorporated
                                    <br />
                                    1234 Somewhere Road Suite
                                    <br />
                                    Paris
                                </p>
                            </div>
                            <div className="row next">
                                <h3 style={{ width: "4em" }}>Email</h3>
                                <p className="pad">ocinabrand@gmail.com</p>
                            </div>
                            <div className="row next">
                                <h3 style={{ width: "4em" }}>Téléphone</h3>
                                <p className="pad">060000000</p>
                            </div>
                        </section>
                    </div>
                    <div className="footCopyright">
                        <div className="copyright">
                            &copy; Ocina. All rights reserved. Help Designed
                            with: HTML5 UP
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;
