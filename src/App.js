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
import MSuit from "./components/MSuit";

const App = () => {
    return (
        <BrowserRouter>
            <div className="root">
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/ocineGHPages/project" component={Project} />
                <Route
                    exact
                    path="/ocineGHPages/imgSlide"
                    component={ImgSlide}
                />
                <Route exact path="/ocineGHPages/MSuit" component={MSuit} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
