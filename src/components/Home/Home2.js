import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hello, I'm <b className="purple"> Gowtham Mahadikar</b>, a passionate developer with a strong background in
              
              <i>
                <b className="purple"> Python.</b>
              </i>
              <br />
              <br />
              I specialize in creating innovative solutions using advanced technologies such as &nbsp;
              <i>
                <b className="purple">Stable Diffusion </b> and
                {" "}
                <b className="purple">
                Huggingface models.
                </b>
              </i>
              <br />
              <br />
              My portfolio showcases projects that highlight my skills in machine learning, AI, and generative models.
              with <b className="purple">Machine learning, Open AI,</b> and
              <i>
                <b className="purple">
                  {" "}
                  Generative models
                </b>
              </i>
            <br/>
            <br/>
            I am always eager to explore new challenges and contribute to meaningful projects. Let’s connect and collaborate on exciting opportunities!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GowthamMahadikar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gowthammahadikar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gowtham__mahadikar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;



