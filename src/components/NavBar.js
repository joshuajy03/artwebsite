import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../image0.jpeg'
import logoMobile from '../image0.jpeg'
import {Toolbar, Typography} from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles"; 
import './NavBar.css';

const styles = makeStyles({
    bar:{
        paddingTop: "0rem",
        backgroundColor: "#4B3B47",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "7%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "7%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#CFD2B2"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "0rem"    }
    }
})


function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="fixed" color="rgba(75, 59, 71, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
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
                        Courses
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite/gallery">
                        Gallery
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite/registration">
                       Registration Forms
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/artwebsite/contact">
                        Contact
                    </Link>
                </Typography>
                <CustomBtn txt="PayPal"/>
            </Toolbar>
    )
}

export default NavBar