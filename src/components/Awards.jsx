import { List } from "@material-ui/core";
import React from "react";
import './WebPage.css';
import Footer from "./Footer";

function Awards() {
  return (
    <div className="awards">
      <div class="container pt-3 pb-3 my-3">
        <div style={{ textAlign: "left" }} class="col-lg-6">
          <h2>Awards</h2>
          <p>
            2016:  <br />
            <ul>
              <li>Future Stars Bay Area Youth Art Exhibition - 2 students won the Most Creative Award</li>
              <li>California School Employees Association Art Contest - 3 students won the annual prize.</li>
            </ul>
      
          </p>
          <p>
            2017: <br />
            <ul>
              <li>Student's artwork led to acceptance at ArtCenter College with scholarship</li>
            </ul>
          </p>
          <p>
            2019: <br />
            <ul>
              <li>Fine Arts League of Cupertino - 1 student's artwork was selected for display</li>
              <li>Toyota Dream Car Art Contest - 2 students were semifinalists</li>
              <li>Scholastic Art and Writing Awards - 8 students received awards</li>
            </ul> 
          </p>
          <p>
            2020: <br />
            <ul>
              <li>Students accepted to California State Summer School for the Arts</li>
              <li>Students art portfolio received perfect score and 5 on AP Art and Design Portfolio</li>
              <li>Youth Art Contest - several students received gold medal</li>
              <li>Scholastic Art and Writing Awards - 2 gold keys, 5 silver keys, and 7 honorable mentions</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awards;