import { List } from "@material-ui/core";
import React from "react";
import './WebPage.css';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./Awards.css";
import awards2021img1 from '../Dream Art/Awards/2021_Scholastic/6.jpg';
import awards2021img2 from '../Dream Art/Awards/2021_Scholastic/1.jpg';
import awards2021img3 from '../Dream Art/Awards/2021_Scholastic/3.jpg';
import awards2021img4 from '../Dream Art/Awards/2021_Scholastic/4.jpg';
import awards2021img5 from '../Dream Art/Awards/2021_Scholastic/7.jpg';
import awards2021img6 from '../Dream Art/Awards/2021_Scholastic/2.jpg';
import awards2021img7 from '../Dream Art/Awards/2021_Scholastic/5.jpg';
import awards2021img8 from '../Dream Art/Awards/2021_Scholastic/8.jpg';
import awards2021img9 from '../Dream Art/Awards/2021_Scholastic/9.jpg';
import awards2021img10 from '../Dream Art/Awards/2021_Scholastic/10.jpg';
import img2020Scholastic1 from '../Dream Art/Awards/2020 Scholastic/1.jpg';
import img2020Scholastic2 from '../Dream Art/Awards/2020 Scholastic/2.jpg';
import img2020Scholastic3 from '../Dream Art/Awards/2020 Scholastic/6.jpg';
import img2020Scholastic4 from '../Dream Art/Awards/2020 Scholastic/4.jpg';
import img2020Scholastic5 from '../Dream Art/Awards/2020 Scholastic/5.jpg';
import img2020Scholastic6 from '../Dream Art/Awards/2020 Scholastic/3.jpg';
import img2020Scholastic7 from '../Dream Art/Awards/2020 Scholastic/7.jpg';
import img2020Youth1 from '../Dream Art/Awards/2020  Youth Art/1.jpg';
import img2020Youth2 from '../Dream Art/Awards/2020  Youth Art/2.jpg';
import img2020Youth3 from '../Dream Art/Awards/2020  Youth Art/3.jpg';
import img2020Youth4 from '../Dream Art/Awards/2020  Youth Art/4.jpg';
import img2020Youth5 from '../Dream Art/Awards/2020  Youth Art/5.jpg';
import img2020Youth6 from '../Dream Art/Awards/2020  Youth Art/6.jpg';
import img2020Youth7 from '../Dream Art/Awards/2020  Youth Art/7.jpg';
import img2020Youth8 from '../Dream Art/Awards/2020  Youth Art/8.jpg';
import img2020Youth9 from '../Dream Art/Awards/2020  Youth Art/9.jpg';
import img2020AP from '../Dream Art/Awards/2020   AP/AP Art.jpg';
import img2020Summer1 from '../Dream Art/Awards/2020 SUMMER SCHOOL/1.jpg';
import img2020Summer2 from '../Dream Art/Awards/2020 SUMMER SCHOOL/2.jpg';
import img2020Summer3 from '../Dream Art/Awards/2020 SUMMER SCHOOL/3.jpg';
import img2019Toyota1 from '../Dream Art/Awards/2019  Toyota/1.jpg';
import img2019Toyota2 from '../Dream Art/Awards/2019  Toyota/2.jpg';
import img2019FineArts from '../Dream Art/Awards/2019  Fine Arts League of Cupertino/1.jpg';
import img2019Summer1 from '../Dream Art/Awards/2019 SUMMER SCHOOL/1.jpg';
import img2019Summer2 from '../Dream Art/Awards/2019 SUMMER SCHOOL/2.jpg';
import img2019Summer3 from '../Dream Art/Awards/2019 SUMMER SCHOOL/3.jpg';
import img2017ArtCenter1 from '../Dream Art/Awards/2017 ARTCENTER/1.jpg';
import img2017ArtCenter2 from '../Dream Art/Awards/2017 ARTCENTER/2.jpg';
import img2016FutureStars1 from '../Dream Art/Awards/2016 Future Stars/Nina Pan.jpg';
import img2016FutureStars2 from '../Dream Art/Awards/2016 Future Stars/Zhiyuan Li.jpg';
import img2016California1 from '../Dream Art/Awards/2016  California School Employees Association/Amy.jpg';
import img2016California2 from '../Dream Art/Awards/2016  California School Employees Association/Nina.jpg';
import img2016California3 from '../Dream Art/Awards/2016  California School Employees Association/3.jpg';

function Awards() {
  return (
    <div className="awards">
      <div class="container pt-3 pb-3 mb-3 mt-3">
        <div style={{ textAlign: "left" }} class="col-lg-6">
          <h2>Awards</h2>
          <p>
            2021: <br />
            <ul>
              <li>Scholastic Art and Writing Awards:
                <ul>
                  <li>2 Gold Key</li>
                  <li>5 Silver Key</li>
                  <li>7 Honorable Mention</li>
                </ul>
                <br/>
                  <Container>
                    <Row>
                    <img className="resize-img" src={awards2021img1} fluid />
                    <img className="resize-img" src={awards2021img2} fluid />
                    <img className="resize-img" src={awards2021img3} fluid />
                    <img className="resize-img" src={awards2021img4} fluid />
                    <img className="resize-img" src={awards2021img5} fluid />
                    </Row>
                    <Row>
                    <img className="resize-img" src={awards2021img6} fluid />
                    <img className="resize-img" src={awards2021img7} fluid />
                    <img className="resize-img" src={awards2021img8} fluid />
                    <img className="resize-img" src={awards2021img9} fluid />
                    <img className="resize-img" src={awards2021img10} fluid />
                    </Row>

                    
                  </Container>
                
                <br/>
                
               
              </li>
              <li>
                Asian American Pacific Heritage Month Art Wall:
                <ul>
                  <li>25 students' artwork featured</li>
                </ul>
              </li>
            </ul>
          </p>
          <p>
            2020: <br />
            <ul>
              <li>
                Scholastic Art and Writing Awards:
                <ul>
                  <li>1 Silver Key</li>
                  <li>8 Honorable Mentions</li>
                </ul>
                <br />
                <Container>
                  <Row>
                    <img className="resize-img" src={img2020Scholastic1} fluid />
                    <img className="resize-img" src={img2020Scholastic2} fluid />
                    <img className="resize-img" src={img2020Scholastic3} fluid />
                    <img className="resize-img" src={img2020Scholastic4} fluid />
                  </Row>
                  <Row>
                    <img className="resize-img" src={img2020Scholastic5} fluid />
                    <img className="resize-img" src={img2020Scholastic6} fluid />
                    <img className="resize-img" src={img2020Scholastic7} fluid />
                  </Row>
                </Container>
                <br />
              </li>
              <li>
                Youth Art Contest:
                <ul>
                  <li>Joanna Zhang &nbsp;&emsp; Grade K-2 &nbsp; &emsp;&nbsp; Gold Award</li>
                  <li>Becky Yang &nbsp;&ensp; &nbsp;&emsp; Grade 3-5 &nbsp; &emsp;&nbsp; Gold Award</li>
                  <li>Eileen Wang &nbsp;&ensp;&nbsp;&emsp; Grade 3-5 &nbsp; &emsp;&nbsp; Gold Award</li>
                  <li>Nina Pan &nbsp;&emsp; &emsp; &ensp;&nbsp; Grade 6-8 &nbsp; &emsp;&nbsp; Gold Award</li>
                  <li>Elizabeth Yang &emsp; Grade 9-10 &emsp;&nbsp; Gold Award</li>
                  <li>Ethan Wei &emsp; &emsp; &ensp; Grade 9-10 &emsp;&nbsp; Bronze Award</li>
                  <li>Angela Qian &emsp;&ensp;&ensp; Grade 9-10 &emsp;&nbsp; Silver Award</li>
                  <li>Kayla Weiss &emsp; &emsp; Grade 11-12 &emsp; Gold Award</li>
                </ul>
                <br />
                <Container>
                  <Row>
                    <img className="resize-img" src={img2020Youth1} fluid />
                    <img className="resize-img" src={img2020Youth2} fluid />
                    <img className="resize-img" src={img2020Youth3} fluid />
                    <img className="resize-img" src={img2020Youth4} fluid />
                    <img className="resize-img" src={img2020Youth5} fluid />
                  </Row>
                  <Row>
                    <img className="resize-img" src={img2020Youth6} fluid />
                    <img className="resize-img" src={img2020Youth7} fluid />
                    <img className="resize-img" src={img2020Youth8} fluid />
                    <img className="resize-img" src={img2020Youth9} fluid />
                  </Row>

                </Container>
                <br />
              </li>
              <li>
                AP Art:
                <ul>
                  <li>Numerous students received full scores (5)</li>
                </ul>
                <br/>
                <img className = "resize-collection" src={img2020AP} fluid/>
                <br/> <br/>
              </li>
              <li>One student accepted to the California State Summer School for the Arts</li>
              <li>2020 Summer School Art:
                <br/> <br/>
                <Container>
                  <Row>
                    <img className = "resize-img" src={img2020Summer1} fluid/>
                    <img className = "resize-img" src={img2020Summer2} fluid/>
                    <img className = "resize-img" src={img2020Summer3} fluid/>
                  </Row>
                </Container>
                <br/>
              </li>
            </ul>
          </p>
          <p>
            2019:
            <ul>
              <li>One student accepted to the California State Summer School for the Arts with a scholarship</li>
              <li>Toyota Dream Car Art Contest:
                <ul>
                  <li>2 students were semifinalists</li>
                </ul>
                <br/>
                <Container>
                  <Row>
                    <img className = "resize-img" src={img2019Toyota1} fluid/>
                    <img className = "resize-img" src={img2019Toyota2} fluid/>
                  </Row>

                </Container>
                <br/>
              </li> 
              <li>Fine Arts League of Cupertino:
                <ul>
                  <li>1 student's artwork was selected for display</li>
                </ul>
                <br/>
                <img className = "resize-img" src={img2019FineArts} fluid/>
                <br/> <br/>
              </li>
              <li>
                2019 Summer School Art:
                <br/> <br/>
                <Container>
                  <Row>
                    <img className = "resize-img" src={img2019Summer1} fluid/>
                    <img className = "resize-img" src={img2019Summer2} fluid/>
                    <img className = "resize-img" src={img2019Summer3} fluid/>
                  </Row>
                </Container>
                <br/>
              </li>
            </ul>
          </p>
          <p>
            2017:
            <ul>
            <li>University and College Admission:
            <ul>
              <li>One student accepted by ArtCenter College with a scholarship</li>
            </ul>
            <br/>
            <Container>
              <Row>
                <img className = "resize-img" src={img2017ArtCenter1} fluid />
                <img className = "resize-img" src={img2017ArtCenter2} fluid />
              </Row>
            </Container>
            <br/>

            </li>
            </ul>
          </p>
          <p>
            2016:
            <ul>
            <li>Future Stars Bay Area Youth Art Exhibition:
            <ul>
              <li>2 students won the Most Creative Award</li>
            </ul>
            <br/>
            <Container>
              <Row>
                <img className = "resize-img" src={img2016FutureStars1} fluid />
                <img className = "resize-img" src={img2016FutureStars2} fluid />
              </Row>
            </Container>
            <br/>
            </li>
            </ul>
            <ul>
              <li>California School Employees Association Art Contest
                <ul>
                  <li>3 students won the annual prize</li>
                </ul>
                <br/>
                <Container>
                  <Row>
                    <img className="resize-img" src={img2016California1} fluid />
                    <img className="resize-img" src={img2016California2} fluid />
                    <img className="resize-img" src={img2016California3} fluid />
                  </Row>
                </Container>
                <br/>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awards;