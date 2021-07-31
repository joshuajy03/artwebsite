import React from "react";
import './WebPage.css';
import { Container, Row, Col } from "react-bootstrap";
import SketchImgs from "./SketchImgs";
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
import Collapse from 'react-bootstrap/Collapse'
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";


function Courses() {
  return (
    <React.Fragment>
      <div class="container pt-3 pb-3 mb-3 mt-3">
          <Row>
            <Col md={3}>
              <h2>Courses</h2>
            </Col>
          </Row>
        <Container>
          <Tab.Container id="example-images" transition={Collapse} defaultActiveKey="#course1">
            <Row>
              <Col md={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course1">
                      Sketch
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course2">
                      Charcoal
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course3">
                      Color Pencil
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course4">
                      Acrylic
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course5">
                      Water Color
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course6">
                      Oil Painting
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course7">
                      Color Composition
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course8">
                      Black and White Composition
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course11">
                      Proposition Creation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course9">
                      Illustration Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" action href="#course10">
                      Comic Design
                    </Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" href="#course12">
                      Graphic Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" href="#course13">
                      Industrial Product Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" href="#course14">
                      Architectural Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} className="course-link" href="#course15">
                      Portfolio
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
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