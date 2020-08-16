import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import { Grid } from "@material-ui/core";

const Home = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Banner />
                </Grid>
                <Grid item xs={12}>
                    <Products />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
