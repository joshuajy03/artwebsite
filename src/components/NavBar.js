import React from 'react'
import logo from '../Dream Art/logos/bluelogolong.jpg'
import { Toolbar, Typography, AppBar } from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import './NavBar.css';

const styles = makeStyles({
    bar: {
        paddingTop: "0rem",
        backgroundColor: "#22223B",
    },
    logo: {
        width: "400px",
    },
    menuItem: {
        cursor: "pointer",
        marginRight: 24,
        "&:hover": {
            color: "#CFD2B2"
        },
    },

    space: {
        flexGrow: 1,
    },
})


function NavBar() {
    const classes = styles()

    return (
        <AppBar position="sticky">
            <Toolbar color="rgba(75, 59, 71, 0.87)" className={classes.bar}>
                <Link style={{ textDecoration: 'none' }, {color : "#FAC9B8"}}  to="/">
                    <img src={logo} className={classes.logo} />
                </Link>
                <Typography variant="h6" className={classes.space}>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#FAC9B8"}}  to="/">
                        Home
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#FAC9B8"}}  to="/awards">
                        Awards and Achievements
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#FAC9B8"}}  to="/courses">
                        Courses and Gallery
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#FAC9B8"}}  to="/registration">
                        Registration Form
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#FAC9B8"}} to="/contact">
                        Contact and PayPal
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar