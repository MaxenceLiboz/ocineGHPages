import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { useMediaQuery, Button, Popover, Toolbar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    /* Mobile style */
    menu: { color: "white" },
    italic: { fontStyle: "italic" },
    icon: {
        position: "fixed",
        background: "rgba(150,150,150,0.75)",
        margin: "1em",
        borderRadius: "0.5em",
        color: "white",
        "&:hover": {
            background: "rgba(150,150,150,0.75)",
        },
    },
    dropdown: {
        fontSize: "10px !important",
        paddingLeft: "2em",
        paddingRight: "2em",
    },
    /* Desktop style */
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
    },
    menuItem: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#252122",
    },
    butStyle: {
        padding: "0.6em 1.2em 0.6em 1.2em",
        borderRadius: "5px",
        color: "#5d5d5d",
    },
    popButton: {
        fontStyle: "italic",
        color: "#5d5d5d",
        "&:hover": {
            color: "#e6e6e6",
        },
    },
    marg: { marginLeft: "2em" },
}));

const Navbar = (props) => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [state, setState] = React.useState({
        left: false,
    });
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    /* Mobile settings */

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className={classes.menu}
        >
            <List>
                <Button
                    color="inherit"
                    className={classes.italic}
                    style={{ fontSize: "11px" }}
                    onClick={() => handleMenuClick("/ocineGHPages")}
                >
                    Home
                </Button>
            </List>
            <Divider />
            <List>
                <Button
                    color="inherit"
                    className={classes.italic}
                    style={{ fontSize: "11px" }}
                >
                    Nos produits
                </Button>

                <List>
                    <div className={classes.menuItem}>
                        <Button
                            className={`${classes.italic} ${classes.menu} ${classes.dropdown}`}
                            onClick={() =>
                                handleMenuClick("/ocineGHPages/MSuit")
                            }
                        >
                            Maillots de bain homme
                        </Button>
                        <Button
                            className={`${classes.italic} ${classes.menu} ${classes.dropdown}`}
                        >
                            Maillots de bain femme
                        </Button>
                        <Button
                            className={`${classes.italic} ${classes.menu} ${classes.dropdown}`}
                        >
                            Accesoires
                        </Button>
                    </div>
                </List>
            </List>
            <Divider />
            <List>
                <Button
                    color="inherit"
                    className={classes.italic}
                    style={{ fontSize: "11px" }}
                    onClick={() => handleMenuClick("/ocineGHPages/project")}
                >
                    Notre projet
                </Button>
            </List>
        </div>
    );

    /* Desktop settings */

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            {isMobile ? (
                <div>
                    <div>
                        {["≡"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button
                                    className={classes.icon}
                                    onClick={toggleDrawer(anchor, true)}
                                >
                                    {anchor}
                                </Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <Toolbar style={{ paddingBottom: "2em" }}>
                        <div className={classes.root}>
                            <Button
                                className={`${classes.butStyle} ${classes.italic} ${classes.marg}`}
                                style={{
                                    fontSize: "10px",
                                    backgroundColor: "#c4001d",
                                    color: "white",
                                }}
                                onClick={() => handleMenuClick("/ocineGHPages")}
                            >
                                Home
                            </Button>
                            {auth && (
                                <div>
                                    <Button
                                        onMouseEnter={handleMenu}
                                        onClick={handleMenu}
                                        aria-describedby={id}
                                        color="inherit"
                                        className={`${classes.butStyle} ${classes.italic}`}
                                        style={{ fontSize: "10px" }}
                                    >
                                        Nos produits
                                    </Button>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "center",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "center",
                                        }}
                                        onExit={handleClose}
                                        style={{
                                            marginTop: "1em",
                                        }}
                                    >
                                        <div
                                            className={classes.menuItem}
                                            onMouseLeave={handleClose}
                                        >
                                            <Button
                                                className={classes.popButton}
                                                style={{ fontSize: "10px" }}
                                                onClick={() =>
                                                    handleMenuClick(
                                                        "/ocineGHPages/MSuit"
                                                    )
                                                }
                                            >
                                                Maillots de bain homme
                                            </Button>
                                            <Button
                                                className={classes.popButton}
                                                style={{ fontSize: "10px" }}
                                            >
                                                Maillots de bain femme
                                            </Button>
                                            <Button
                                                className={classes.popButton}
                                                style={{ fontSize: "10px" }}
                                            >
                                                Accessoires
                                            </Button>
                                        </div>
                                    </Popover>
                                </div>
                            )}
                            <Button
                                className={`${classes.butStyle} ${classes.italic}`}
                                style={{ fontSize: "10px" }}
                                onClick={() =>
                                    handleMenuClick("/ocineGHPages/project")
                                }
                            >
                                Notre projet
                            </Button>
                        </div>
                    </Toolbar>
                </div>
            )}
        </>
    );
};

export default withRouter(Navbar);
