import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CourseCard from "./CourseCard";
import CertificationCard from "./CertificationCards";

// Import localhost logos
import pyspiders from "../../Assets/Pyspiders.jpg";
import Certificate from "../../Assets/Certificate.png";
import Certificate2 from "../../Assets/certificate2.png";
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
        backgroundColor: "# 00FFFFFF",
        overflow: "hidden",
        paddingTop: "100px", // Top spacing
        paddingBottom: "50px", // Bottom spacing
      }}
    >
      <Particle />
      <Container
        style={{
          maxWidth: "1200px", // Restrict width for alignment
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
          <strong>My Course</strong>
        </h1>
        <p style={{ fontSize: "14px" }}>
        Here is my training module
        </p>
        <Row
          className="justify-content-center"
          style={{ marginBottom: "30px" }}
        >
          <Col md={6}>
            <CourseCard
              InstituteName="PySpiders"
              Course="Python Full Stack Developer"
              Year="2025"
              description="This course helped me to learn how to Design, Develop, Modify, and Debug Software code according to functional, non-functional and technical design specifications of a web application using Python platform."
              logoSrc={pyspiders}
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
          <strong>My Certifications</strong>
        </h1>
        <p style={{ fontSize: "14px" }}>
        These are the document validating my training
        </p>
        <Row className="justify-content-center">
          <Col md={6} style={{ marginBottom: "20px" }}>
            <CertificationCard
               imgPath={Certificate}
               title="Introduction to OpenShift Applications"
               description="Completed Red Hat DO101: Introduction to OpenShift Applications – focused on app development, deployment, scaling, and troubleshooting on OpenShift 4.6.
Hands-on with Git, VSCode, build configurations, application secrets, and cloud-native scaling techniques."
               crLink="https://rha.ole.redhat.com/rha/api/certificates/attendance/uuid/68349e16-080a-4b71-9a96-9e6bb576db81"
               platform="Red Hat"
               year="2024"
             />
          
          </Col>
          <Col md={6} style={{ marginBottom: "20px" }}>
            <CertificationCard
              imgPath={Certificate2}
              title="Building Modern Web Applications with Go (Golang)"
              description="Completed a comprehensive course on Go (Golang) Web Development, covering secure, fast, and scalable web application development from scratch."
              crLink="https://www.udemy.com/certificate/UC-686583a5-98eb-4eb4-b00a-ebb0ff457002/"
              platform="Udemy"
              year="2023"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EducationProfile;
