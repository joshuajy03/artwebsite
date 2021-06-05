import React from 'react'
import logo from '../image0.jpeg'
import { Toolbar, Typography, AppBar } from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import './NavBar.css';
import { IconButton } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

const styles = makeStyles({
    bar: {
        paddingTop: "0rem",
        backgroundColor: "#22223B",
        ["@media (max-width: 900px)"]: {
            paddingLeft: 10,
        },
    },
    logo: {
        width: "50px",
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#CFD2B2"
        },
        ['@media (max-width: 900px)']: {
            paddingBottom: "0rem"
        }
    }
})


function NavBarMobile() {
    const classes = styles()
    return (
        <AppBar position="sticky">
            <Toolbar color="rgba(75, 59, 71, 0.87)" className={classes.bar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img src={logo} className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
}

export default NavBarMobile