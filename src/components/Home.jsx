import React from "react";
import './WebPage.css';
import Poster from "../Dream Art/poster.jpg"
import Footer from "./Footer";
import HomeSlide from "./HomeSlide.jsx";
import HomeSlideMobile from "./HomeSlideMobile";

function Home() {
  return (
    <div className="home">
      <div class="container pt-3 pb-3 my-3">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Poster}
              alt=""
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-light" style={{textAlign: "left"}}>Yi Ying</h1>
            <div class="my-3">
            </div>
            <p style={{textAlign: "left"}}>
              I graduated from China Academy of Art and have been engaged in design work for many years.
              I have accumulated solid painting skills over the years. Combined with pioneering and innovative computer painting and design capabilities, I strive for excellence in both tradition and modernity.
              I always persist in exploring and surpassing myself in the professional field of art.
              In addition to artistic creation and design, as the founder of Dream Art Studio I am also committed to the art teaching of young people and children, cultivating children’s interest in painting.
              I lead the children to experience art and carry out systematic basic skills training step by step, improving children's observation, imagination, creativity, and design abilities in all aspects, experiencing different painting forms and familiarizing themselves with various painting materials. I not only expand their horizons and improve their aesthetic ability but also help students gradually discover and establish their own painting language. My students have participated in various painting competitions and created high school students' portfolios, obtaining excellent results.
            </p>
          </div>
        </div>
        {window.innerWidth < 1000 ? <HomeSlideMobile /> : <HomeSlide />}
      </div>
    </div>
  );
}

export default Home;