import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

// Logos
import v4info from "../../Assets/v4 info.png";
import College from "../../Assets/college.jpg";
import Rnslogo from "../../Assets/rnslogo.jpg";
import Daalilogo from "../../Assets/daali.png";
import ContentEaselogo from "../../Assets/contentease1.jpg";
import Knowledgeflexlogo from "../../Assets/Knowledgeflexlogo.jpg";

const sectionHeading = {
  fontSize: "24px",
  color: "#ab6bff",
  marginBottom: "8px",
};

function ExperienceEducationProfile() {
  return (
    <Container
      fluid
      className="Education-section"
      style={{
        backgroundColor: "#000000",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <Particle />

      <Container style={{ maxWidth: "1200px", textAlign: "center", color: "white" }}>

        {/* ── Experience ── */}
        <h1 style={sectionHeading}><strong>Experience</strong></h1>
        <p style={{ fontSize: "14px", marginBottom: "30px" }}>My professional experience.</p>
        <Row className="justify-content-center" style={{ marginBottom: "60px" }}>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <div className="exp-card-view" style={{ minHeight: "300px" }}>
              <img src={v4info} alt="V4 Info"
                style={{ width: "120px", height: "80px", borderRadius: "4px", marginBottom: "15px" }} />
              <h3 style={{ color: "#ab6bff" }}>V4 Info</h3>
              <p><strong>Role:</strong> Generative AI Engineer</p>
              <p><strong>Duration:</strong> September 2026 - Present</p>
              <p style={{ fontStyle: "italic" }}>Working on Generative AI solutions, developing LLM-powered applications, RAG pipelines, and AI-driven enterprise solutions.</p>
            </div>
          </Col>
        </Row>

        {/* ── Internship ── */}
        <h1 style={sectionHeading}><strong>Internships</strong></h1>
        <p style={{ fontSize: "14px", marginBottom: "30px" }}>My internship experience.</p>
        <Row className="justify-content-center" style={{ marginBottom: "60px" }}>
          <Col md={4} className="d-flex" style={{ marginBottom: "20px" }}>
            <div className="exp-card-view" style={{ minHeight: "300px" }}>
              <img src={ContentEaselogo} alt="ContentEase"
                style={{ width: "120px", height: "80px", borderRadius: "4px", marginBottom: "15px" }} />
              <h3 style={{ color: "#ab6bff" }}>ContentEase.ai</h3>
              <p><strong>Role:</strong> Software Developer Intern</p>
              <p><strong>Duration:</strong> Nov 2023 - July 2024</p>
              <p style={{ fontStyle: "italic" }}>Developed and optimized software solutions, focusing on scalable and efficient full-stack applications.</p>
            </div>
          </Col>
          <Col md={4} className="d-flex" style={{ marginBottom: "20px" }}>
            <div className="exp-card-view" style={{ minHeight: "300px" }}>
              <img src={Daalilogo} alt="Daali Pictures"
                style={{ width: "120px", height: "80px", borderRadius: "4px", marginBottom: "15px" }} />
              <h3 style={{ color: "#ab6bff" }}>Daali Pictures</h3>
              <p><strong>Role:</strong> Prompt Engineer Intern</p>
              <p><strong>Duration:</strong> April 2024 - March 2025</p>
              <p style={{ fontStyle: "italic" }}>Crafted and optimized prompts to enhance AI model outputs, ensuring accuracy and alignment with project goals.</p>
            </div>
          </Col>
          <Col md={4} className="d-flex" style={{ marginBottom: "20px" }}>
            <div className="exp-card-view" style={{ minHeight: "300px" }}>
              <img src={Knowledgeflexlogo} alt="KnowledgeFlex"
                style={{ width: "120px", height: "80px", borderRadius: "4px", marginBottom: "15px" }} />
              <h3 style={{ color: "#ab6bff" }}>KnowledgeFlex PVT LTD</h3>
              <p><strong>Role:</strong> AI Engineer Intern</p>
              <p><strong>Duration:</strong> December 2025 - July 2026</p>
              <p style={{ fontStyle: "italic" }}>Developing end-to-end RAG pipelines using FAISS, Chroma, and Pinecone, enhancing retrieval accuracy for enterprise applications.</p>
            </div>
          </Col>
        </Row>

        {/* ── Education ── */}
        <h1 style={sectionHeading}><strong>Education</strong></h1>
        <p style={{ fontSize: "14px", marginBottom: "30px" }}>My educational background.</p>
        <Row className="justify-content-center" style={{ marginBottom: "30px" }}>
          <Col md={5} className="d-flex" style={{ marginBottom: "20px" }}>
            <div className="exp-card-view" style={{ minHeight: "260px" }}>
              <img src={College} alt="DSCE"
                style={{ width: "50px", height: "50px", borderRadius: "50%", marginBottom: "20px" }} />
              <h3 style={{ color: "#ab6bff" }}>Dayananda Sagar College of Engineering</h3>
              <p>Grade: 8.3 CGPA</p>
              <p>Year: 2022-2024</p>
            </div>
          </Col>
          <Col md={5} className="d-flex" style={{ marginBottom: "20px" }}>
            <div className="exp-card-view" style={{ minHeight: "260px" }}>
              <img src={Rnslogo} alt="RNS College"
                style={{ width: "50px", height: "50px", borderRadius: "50%", marginBottom: "20px" }} />
              <h3 style={{ color: "#ab6bff" }}>Rns First Grade College</h3>
              <p>Grade: 7.4 CGPA</p>
              <p>Year: 2019-2022</p>
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default ExperienceEducationProfile;
