import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
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
              Hello, I'm <b className="purple">Gowtham Mahadikar</b>, an AI
              Engineer with a strong background in
              <i>
                <b className="purple"> Python </b>
              </i>
              and
              <i>
                <b className="purple"> Generative AI.</b>
              </i>
              <br />
              <br />
              I specialize in building production-grade solutions using{" "}
              <i>
                <b className="purple">RAG, multi-agent systems, LangChain, Gemini, Whisper, </b>
                and
                <b className="purple"> Hugging Face models.</b>
              </i>{" "}
              I've built end-to-end RAG pipelines with 
                <b className="purple"> FAISS, Chroma </b> and 
                <b className="purple"> Pinecone </b>
                that sharpen retrieval accuracy for enterprise applications, and I've trained 
                <i> 
                  <b className="purple"> LoRA models.</b> that keep AI-generated
                  </i>
              visuals consistent in style for film production.
              <br />
              <br />
              My portfolio showcases projects that highlight my skills in{" "}
              <i>
                <b className="purple">RAG pipelines, LLM integration, LoRA training, Stable Diffusion </b>
                </i>

              and full-stack AI applications with
              <b className="purple"> FastAPI, Node.js, React.js </b> and 
                <b className="purple"> Docker. </b>
              <br />
              <br />
              I'm always eager to explore new challenges and contribute to
              meaningful projects. Let's connect and collaborate on exciting
              opportunities!
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
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gowthammahadikar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
