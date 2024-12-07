import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhay Nori </span>
            from <span className="purple"> Seattle, WA studying Computer Science at UW Seattle.</span>
            <br />
            <br />
            I am currently employed as a Jr. Software Developer at Thales Avionics.
            <br />
            Before deciding to major in Computer Science, I was fascinated by math and probability, and later decided to take an AP CS class.
            <br />
            <br /> 
            From then on, my passion for coding flourished. I have worked three years in industry and have placed top 3 in a quantum computing hackathon.
            <br />
            Even though I loved interning and designing new applications, I've always found a passion for learning new things and challenging myself.  
            <br />
            <br /> 
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Building APIs and Web Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <br />
            "Tough times never last, but tough people do."{" "}
          </p>
          <footer className="blockquote-footer">Robert W. Schuller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
