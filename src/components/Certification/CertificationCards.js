import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { TbCertificate2 } from "react-icons/tb";

function CertificationCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#c85aff" }}>{props.title}</Card.Title>

        {/* Highlighted Platform and Year using Badges */}
        <div style={{ marginBottom: "10px" }}>
          <Badge bg="danger" className="me-2">
            {props.platform}
          </Badge>
          <Badge bg="secondary">{props.year}</Badge>
        </div>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.crLink} target="_blank">
        <TbCertificate2 /> &nbsp;
          {props.isBlog ? "Blog" : "View Certificate"}
        </Button>

        {/* Optional Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
  
}

export default CertificationCard;
