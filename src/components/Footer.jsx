import React from "react";
import './WebPage.css';
import { Container, Row, Col, Figure, ButtonGroup, Button } from "react-bootstrap";
import ScrollToTop from "./ScrollToTop";
import "./Footer.css"

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="scroll-button">
                    <ScrollToTop />
                </div>
                <hr />
                <div className="row-info">
                    Stuff for later.
                </div>
            </div>
        </div>
    );
}
export default Footer;