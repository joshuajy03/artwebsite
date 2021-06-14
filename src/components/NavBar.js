import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../image0.jpeg'
import logoMobile from '../image0.jpeg'
import {Toolbar, Typography, AppBar} from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles"; 
import './NavBar.css';

const styles = makeStyles({
    bar:{
        paddingTop: "0rem",
        backgroundColor: "#22223B",
    },
    logo: {
        width: "50px",
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#CFD2B2"
        },
    }
})


function NavBar() {
    const classes = styles()
    return (
        <AppBar position="sticky">
            <Toolbar color="rgba(75, 59, 71, 0.87)" className={classes.bar}> 
                <Link to="/artwebsite">
                    <img src={logo} className={classes.logo}/> 
                </Link>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite">
                        Home
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite/awards">
                        Awards and Achievements
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite/courses">
                        Courses and Gallery
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite/registration">
                       Registration Form
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite/contact">
                        Contact and PayPal
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar