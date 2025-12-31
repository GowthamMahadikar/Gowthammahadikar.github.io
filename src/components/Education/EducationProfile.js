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
        backgroundColor: "00FFFFF",
        overflow: "hidden",
        paddingTop: "50px", // Top spacing
        paddingBottom: "50px", // Bottom spacing
      }}
    >
      <Particle />
      <Container
        style={{
          maxWidth: "800px", // Restrict width for alignment
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Education Section */}
        <h1
          className="Education-heading"
          style={{
            fontSize: "24px",
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
          <Col md={6}>
            <EducationCard
              collegeName="Dayananda Sagar College of Engineering"
              grade="8.3 CGPA"
              year="2022-2024"
              imageSrc={College}
            />
          </Col>
          <Col md={6}>
            <EducationCard
              collegeName="Rns First Grade College"
              grade="7.4 CGPA"
              year="2019-2022"
              imageSrc={Rnslogo}
            />
          </Col>
        </Row>

        {/* Internship Section */}
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
        <Row className="justify-content-center">
          <Col md={6} style={{ marginBottom: "20px" }}>
            <InternshipCard
              companyName="ContentEase.ai"
              role="Software Developer Intern"
              duration="Nov 2023 - July 2024"
              description="Developed and optimized software solutions, focusing on scalable and efficient full-stack applications."
              logoSrc={ContentEaselogo}
            />
          </Col>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <InternshipCard
              companyName="Daali Pictures"
              role="Prompt Engineer Intern"
              duration="April 2024 - March 2025"
              description="Crafted and optimized prompts to enhance AI model outputs, ensuring accuracy and alignment with project goals."
              logoSrc={Daalilogo}
            />
          </Col>
                <Col md={6} style={{ marginBottom: "20px" }}>
            <InternshipCard
              companyName="Daali Pictures"
              role="Prompt Engineer Intern"
              duration="April 2024 - March 2025"
              description="Crafted and optimized prompts to enhance AI model outputs, ensuring accuracy and alignment with project goals."
              logoSrc={Daalilogo}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EducationProfile;


