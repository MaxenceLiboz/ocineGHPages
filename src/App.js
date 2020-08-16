import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ImgSlide from "./components/ImgSlide";
import MSuit from "./components/MSuit";
import FSuit from "./components/FSuit";
import Accessories from "./components/Accessories";
import ScrollToTop from "react-router-scroll-top";

import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./components/FontAwesomeIcons/IconsLibrary";

import "./App.css";
import "./css/banner.css";
import "./css/footer.css";
import "./css/products.css";
import "./css/project.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import constants from "./constants";

const homepage = constants.homepage;
const project = constants.project;
const suitM = constants.suitM;
const suitF = constants.suitF;
const accessories = constants.accessories;

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Grid container className="root">
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Route exact path={homepage} component={Home} />
                </Grid>
                <Grid item xs={12}>
                    <Route
                        exact
                        path={homepage + project}
                        component={Project}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Route
                        exact
                        path={homepage + "/ImgSlide"}
                        component={ImgSlide}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Route exact path={homepage + suitM} component={MSuit} />
                </Grid>
                <Grid item xs={12}>
                    <Route exact path={homepage + suitF} component={FSuit} />
                </Grid>
                <Grid item xs={12}>
                    <Route
                        exact
                        path={homepage + accessories}
                        component={Accessories}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </BrowserRouter>
    );
};

export default App;
