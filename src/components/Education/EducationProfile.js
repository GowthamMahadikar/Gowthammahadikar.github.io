import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import EducationCard from "./EducationCards";
import InternshipCard from "./InternshipCards";

// Import localhost logos
import College from "../../Assets/college.jpg";
import Rnslogo from "../../Assets/rnslogo.jpg";
import Daalilogo from "../../Assets/daali.png";
import ContentEaselogo from "../../Assets/contentease1.jpg";
import Knowledgeflexlogo from "../../Assets/Knowledgeflexlogo.jpg";

function EducationProfile() {
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
          maxWidth: "1200px",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* ==================== INTERNSHIPS ==================== */}

        <h1
          className="Education-heading"
          style={{
            fontSize: "24px",
            marginTop: "30px",
            color: "#ab6bff",
          }}
        >
          <strong>Internships</strong>
        </h1>

        <p style={{ fontSize: "14px" }}>
          Below is my internship experience.
        </p>

        <Row className="justify-content-center" style={{ marginBottom: "30px" }}>
          <Col md={4} style={{ marginBottom: "20px" }}>
            <InternshipCard
              companyName="ContentEase.ai"
              role="Software Developer Intern"
              duration="Nov 2023 - July 2024"
              description="Developed and optimized software solutions, focusing on scalable and efficient full-stack applications."
              logoSrc={ContentEaselogo}
            />
          </Col>

          <Col md={4} style={{ marginBottom: "20px" }}>
            <InternshipCard
              companyName="Knowledge Flex"
              role="AI Engineer Intern"
              duration="December 2025"
              description="Developing end-to-end RAG pipelines using FAISS, Chroma, and Pinecone, significantly enhancing retrieval accuracy and contextual reasoning for enterprise applications."
              logoSrc={Knowledgeflexlogo}
            />
          </Col>

          <Col md={4} style={{ marginBottom: "20px" }}>
            <InternshipCard
              companyName="Daali Pictures"
              role="Prompt Engineer Intern"
              duration="April 2024 - March 2025"
              description="Crafted and optimized prompts to enhance AI model outputs, ensuring accuracy and alignment with project goals."
              logoSrc={Daalilogo}
            />
          </Col>
        </Row>

        {/* ==================== EDUCATION ==================== */}

        <h1
          className="Education-heading"
          style={{
            fontSize: "24px",
            marginTop: "30px",
            color: "#ab6bff",
          }}
        >
          <strong>Education</strong>
        </h1>

        <p style={{ fontSize: "14px" }}>
          Below is my overview of educational background.
        </p>

        <Row
          className="justify-content-center"
          style={{ marginBottom: "30px" }}
        >
          <Col md={6} style={{ marginBottom: "20px" }}>
            <EducationCard
              collegeName="Dayananda Sagar College of Engineering"
              grade="8.3 CGPA"
              year="2022-2024"
              imageSrc={College}
            />
          </Col>

          <Col md={6} style={{ marginBottom: "20px" }}>
            <EducationCard
              collegeName="Rns First Grade College"
              grade="7.4 CGPA"
              year="2019-2022"
              imageSrc={Rnslogo}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EducationProfile;
