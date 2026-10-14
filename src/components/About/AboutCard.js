import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Beyond Coding, I was also creative professional in film Industry. I specialize in <span className="purple">Editing </span>
            and <span className="purple">Storyboard</span>, bringing visuals to life with precision and creativity.
            I contribute to <span className="purple">Daali Production</span>, where innovative ideas are turned into <span className="purple">Cinematic Experiences </span>.
            <br />
            As a former <span className="purple">Prompt Engineer</span>, I have honed my skills in optimizing and refining AI-driven processes.
            <br />
            <br />
            My background in <span className="purple">cricket</span>, having represented my school at the zonal level, has instilled valuable <span className="purple">Teamwork</span> and <span className="purple">Leadership Skills</span>.
            <br/>
            <br/>
          I enjoy engaging in a variety of other activities like!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gowtham Mahadikar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
