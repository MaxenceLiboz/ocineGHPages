import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import ButtonCss from "./CssButton";
import Suit from "../images/boxerBlue.jpg";
import "../css/cards.css";

const Cards = (props) => {
    const { imgSrc, title, description, pageURL, button, styles } = props;

    return (
        <>
            <Card>
                <a href={pageURL ? pageURL : "/"}>
                    <Button
                        disableRipple
                        disableFocusRipple
                        style={{ background: "transparent" }}
                    >
                        <CardMedia
                            component="img"
                            image={imgSrc ? imgSrc : Suit}
                            title="boxerBlue"
                            style={styles}
                        />
                    </Button>
                </a>
                <CardContent
                    style={{ backgroundColor: "whitesmoke", minHeight: "6em" }}
                >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        style={{ fontWeight: "700" }}
                    >
                        {title ? title : "Titre par default"}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {description ? description : "Description par default"}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{
                        backgroundColor: "whitesmoke",
                        paddingBottom: "2em",
                    }}
                >
                    {button ? (
                        <ButtonCss
                            className="alt"
                            variant="contained"
                            color="primary"
                        >
                            <a href={pageURL ? pageURL : "/"}>{button}</a>
                        </ButtonCss>
                    ) : (
                        ""
                    )}
                </CardActions>
            </Card>
        </>
    );
};

export default withRouter(Cards);
