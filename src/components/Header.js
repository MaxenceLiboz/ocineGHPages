import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        display: "flex",
        justifyContent: "center",
        color: "#252122",
        paddingTop: "1em",
        fontWeight: 900,
        fontSize: "2em",
        letterSpacing: "-0.035em",
        lineHeight: 1,
    },
});

function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {isMobile ? (
                <div>
                    <Navbar />
                    <h1 className={classes.title}>Ocina</h1>
                </div>
            ) : (
                <div>
                    <h1 className={classes.title}>Ocina</h1>
                    <Navbar />
                </div>
            )}
        </>
    );
}

export default Header;
