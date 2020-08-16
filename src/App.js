import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import "./components/FontAwesomeIcons/IconsLibrary";
import "./App.css";
import "./css/banner.css";
import "./css/footer.css";
import "./css/products.css";
import "./css/project.css";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSlide from "./components/ImgSlide";
import MSuit from "./components/MSuit";
import constants from "./constants";
import { Grid } from "@material-ui/core";

const homepage = constants.homepage;
const project = constants.project;
const suitM = constants.suitM;

const App = () => {
    return (
        <BrowserRouter>
            <Grid container className="root">
                <Grid item sm={12}>
                    <Header />
                </Grid>
                <Grid item sm={12}>
                    <Route exact path={homepage} component={Home} />
                </Grid>
                <Grid item sm={12}>
                    <Route
                        exact
                        path={homepage + project}
                        component={Project}
                    />
                </Grid>
                <Grid item sm={12}>
                    <Route
                        exact
                        path={homepage + "/ImgSlide"}
                        component={ImgSlide}
                    />
                </Grid>
                <Grid item sm={12}>
                    <Route exact path={homepage + suitM} component={MSuit} />
                </Grid>
                <Grid item sm={12}>
                    <Footer />
                </Grid>
            </Grid>
        </BrowserRouter>
    );
};

export default App;
