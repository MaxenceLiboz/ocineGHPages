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
import { Grid } from "@material-ui/core";

const App = () => {
    return (
        <BrowserRouter>
            <Grid container>
                <div className="root">
                    <Grid item sm={12}>
                        <Header />
                    </Grid>
                    <Grid item sm={12}>
                        <Route exact path="/ocineGHPages" component={Home} />
                    </Grid>
                    <Grid item sm={12}>
                        <Route
                            exact
                            path="/ocineGHPages/project"
                            component={Project}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <Route
                            exact
                            path="/ocineGHPages/imgSlide"
                            component={ImgSlide}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <Footer />
                    </Grid>
                </div>
            </Grid>
        </BrowserRouter>
    );
};

export default App;
