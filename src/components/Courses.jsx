import React from "react";
import './WebPage.css';
import { Container, Row, Col, Figure, ButtonGroup, Button } from "react-bootstrap";
import FigureImage from 'react-bootstrap/FigureImage';
import Image from 'react-bootstrap/Image'
import SketchImgs from "./SketchImgs";
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import CharcoalImgs from "./CharcoalImgs";
import ColorPencilImgs from "./ColorPencilImgs";
import AcrylicImgs from "./AcrylicImgs";
import WaterColorImgs from "./WaterColorImgs";
import OilPaintingImgs from "./OilPaintingImgs";
import ColorCompositionImgs from "./ColorCompositionImgs";
import BlackWhiteCompositionImgs from "./BlackWhiteCompositionImgs";
import IllustrationDesignImgs from "./IllustrationDesignImgs";
import ComicDesignImgs from "./ComicDesignImgs";
import PropositionCreationImgs from "./PropositionCreationImgs";
import GraphicDesignImgs from "./GraphicDesignImgs";
import IndustrialProductDesignImgs from "./IndustrialProductDesignImgs";
import ArchitecturalDesignImgs from "./ArchitecturalDesignImgs";
import PortfolioImgs from "./PortfolioImgs";
import Footer from "./Footer";

function Courses() {
  return (
    <React.Fragment>
    <div class="container pt-3 pb-5 mb-5 mt-3">
      <Container>
        <Row>
          <Col md={3}>
            <h2>Courses</h2>
          </Col>
        </Row>

        <Tab.Container id="example-images" defaultActiveKey="#course1">
          <Row>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item action href="#course1">
                  Sketch
                </ListGroup.Item>
                <ListGroup.Item action href="#course2">
                  Charcoal
                </ListGroup.Item>
                <ListGroup.Item action href="#course3">
                  Color Pencil
                </ListGroup.Item>
                <ListGroup.Item action href="#course4">
                  Acrylic
                </ListGroup.Item>
                <ListGroup.Item action href="#course5">
                  Water Color
                </ListGroup.Item>
                <ListGroup.Item action href="#course6">
                  Oil Painting
                </ListGroup.Item>
                <ListGroup.Item action href="#course7">
                  Color Composition
                </ListGroup.Item>
                <ListGroup.Item action href="#course8">
                  Black and White Composition
                </ListGroup.Item>
                <ListGroup.Item action href="#course9">
                  Illustration Design
                </ListGroup.Item>
                <ListGroup.Item action href="#course10">
                  Comic Design
                </ListGroup.Item>
                <ListGroup.Item action href="#course11">
                  Proposition Creation
                </ListGroup.Item>
                <ListGroup.Item action href="#course12">
                  Graphic Design
                </ListGroup.Item>
                <ListGroup.Item action href="#course13">
                  Industrial Product Design
                </ListGroup.Item>
                <ListGroup.Item action href="#course14">
                  Architectural Design
                </ListGroup.Item>
                <ListGroup.Item action href="#course15">
                  Portfolio
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#course1">
                  <SketchImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course2">
                  <CharcoalImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course3">
                  <ColorPencilImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course4">
                  <AcrylicImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course5">
                  <WaterColorImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course6">
                  <OilPaintingImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course7">
                  <ColorCompositionImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course8">
                  <BlackWhiteCompositionImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course9">
                  <IllustrationDesignImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course10">
                  <ComicDesignImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course11">
                  <PropositionCreationImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course12">
                  <GraphicDesignImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course13">
                  <IndustrialProductDesignImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course14">
                  <ArchitecturalDesignImgs />
                </Tab.Pane>
                <Tab.Pane eventKey="#course15">
                  <PortfolioImgs />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>





      </Container>
      
    </div>
    </React.Fragment>
    
    
  );
}

export default Courses;