import React from "react";
import Slider from "react-slick";
import Ocean from "../images/blueOcean.jpg";
import SuitH from "../images/boxerBlue.jpg";
import SuitF from "../images/suitBlue.jpg";
import { Grid } from "@material-ui/core";
import "../css/imgSlide.css";

const ImgSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides slick-prev",
    };

    return (
        <>
            <Grid container>
                <Grid item sm={2} />
                <Grid item sm={8} style={{ padding: "4em" }}>
                    <Slider {...settings}>
                        <img src={SuitH} alt="suitH" />
                        <img src={SuitF} alt="suitF" />
                        <img src={Ocean} alt="Ocean" />
                    </Slider>
                </Grid>
                <Grid item sm={2} />
            </Grid>
        </>
    );
};

export default ImgSlide;
