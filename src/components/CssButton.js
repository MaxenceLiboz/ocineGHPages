import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const ButtonCss = withStyles({
    root: {
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "0.65em 1.5em 0.65em 1.5em",
        marginLeft: "1em",
        border: "1px solid",
        lineHeight: 1.5,
        backgroundColor: "#c4001d",
        borderColor: "#b4001a",
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:hover": {
            backgroundColor: "#b4001a",
            borderColor: "#a4001a",
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#b4001a",
            borderColor: "#a4001a",
        },
        "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
    },
})(Button);

const CssButton = ({ ...props }) => {
    return <ButtonCss {...props} />;
};

export default CssButton;
