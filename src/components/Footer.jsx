import React from "react";
import './WebPage.css';
import { Container, Row, Col, Figure, ButtonGroup, Button } from "react-bootstrap";
import ScrollToTop from "./ScrollToTop";
import "./Footer.css"
import { makeStyles, useTheme } from "@material-ui/core/styles";


const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        color: "#FAC9B8",
    },
    title: {
        flexGrow: 1,
    },
}));

function Footer() {
    const classes = styles()
    const theme = useTheme();
    return (
        <React.Fragment>
            <div className="scroll-button">
                <ScrollToTop />
            </div>
            <footer className="main-footer">

                <div className="footer-container">
                    <hr />
                    <div className="row-info">
                        &copy;{new Date().getFullYear()} Dream Art Studios | All rights reserved
                    </div>
                </div>
            </footer>
        </React.Fragment >
    );
}
export default Footer;