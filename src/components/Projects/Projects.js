import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import structure from "../../Assets/Projects/structure.jpeg";
import mcg from "../../Assets/Projects/mcg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={structure}
              isBlog={false}
              title="YouTube summarization"
              description="YouTube summarization involves condensing lengthy videos into concise summaries, providing viewers withkey insights and highlights in a short format, enhancing accessibility and saving time.."
              ghLink="https://github.com/GowthamMahadikar/Youtube-Summirization"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcg}
              isBlog={false}
              title="Multimodal Content Generation"
              description="Multimodal Content Generation assistant generates both text and images, converting user prompts into rich,descriptive content and vibrant visuals.."
              ghLink="https://github.com/GowthamMahadikar/Mutli-Model-Content-Genearation"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
