import React from "react";
import './WebPage.css';

function Contact() {
  return (
    <div className="contact">
      <div class="container pt-3 pb-3 my-3">
        <div style={{ textAlign: "left" }} class="col-lg-6">
          <h2>Contact</h2>
          <p>
            Phone: 408-384-1101 <br />
            Email: yyanni78@hotmail.com <br />
            WeChat ID:  adambecky <br />
            Studio Address: Newsom AVE Cupertino 95014 <br />
            PayPal: doublesheepcn@hotmail.com
          </p>
        </div>
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCtb3f0glg8i6LcX-Rwj8BTMHOaiS920fU
          &q=Newsom+Ave,+Cupertino,+CA+95014">
        </iframe>
      </div>
    </div>
  );
}

export default Contact;