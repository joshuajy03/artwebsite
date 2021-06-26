import React from "react";
import './WebPage.css';
import { Container, Row, Col, Figure, ButtonGroup, Button } from "react-bootstrap";
import ScrollToTop from "./ScrollToTop";
import "./Footer.css"

function Footer() {
    return (
        <React.Fragment>
        <div className="space">
        </div>
        <footer className="main-footer">
            <div className="footer-container">
                <div className="scroll-button">
                    <ScrollToTop />
                </div>
                <hr />
                <div className="row-info">
                    Stuff for later.
                </div>
            </div>
        </footer>
        </React.Fragment>
    );
}
export default Footer;