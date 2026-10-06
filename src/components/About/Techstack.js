import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiPython,
  DiGit,
  DiCss3,
  DiHtml5,
} from "react-icons/di";

import {
  SiGo,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiLangchain,
  SiOpenai,
  SiHuggingface,
  SiFastapi,
  SiReact,
  SiNodedotjs,
  SiMicrosoftazure,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiPinecone,
  SiChroma,
  SiWordpress,
  SiShopify,
} from "react-icons/si";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      {/* Programming Languages */}

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>


      {/* AI / ML */}

      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>

      {/* Generative AI / LLM */}

      <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHuggingface />
      </Col>

      {/* Backend / Web Frameworks */}

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>

      {/* Cloud / DevOps */}

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      {/* Databases / Vector Stores */}

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPinecone />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiChroma />
      </Col>

      {/* Web Technologies */}

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
      </Col>

      {/* Version Control */}

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
        <Col xs={4} md={2} className="tech-icons">
       <SiGo />
      </Col>
    </Row>
  );
}

export default Techstack;
