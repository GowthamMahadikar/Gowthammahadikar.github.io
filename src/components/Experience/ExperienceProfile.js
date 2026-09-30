import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

// Import localhost logos
import Experience from "../../Assets/v4info.png";

function ExperienceProfile() {
  return (
    <Container
      fluid
      className="Education-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      <Particle />

      <Container
        style={{
          maxWidth: "800px",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* ==================== EXPERIENCE ==================== */}

        <h1
          className="Education-heading"
          style={{
            fontSize: "24px",
            color: "#ab6bff",
          }}
        >
          <strong>Experience</strong>
        </h1>

        <p style={{ fontSize: "14px" }}>
          Below is my professional experience.
        </p>

        <Row className="justify-content-center" style={{ marginBottom: "30px" }}>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <ExperienceCard
              companyName="V4 Info"
              role="Generative AI Engineer"
              duration="September 2026 - Present"
              description="Working on Generative AI solutions, developing LLM-powered applications, RAG pipelines, and AI-driven enterprise solutions."
              logoSrc={Experience}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ExperienceProfile;
