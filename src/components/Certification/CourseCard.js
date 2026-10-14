import React from "react";

function CourseCard({ InstituteName, Course, Year, description, logoSrc }) {
  return (
    <div className="exp-card-view" style={{ minHeight: "370px" }}>
      {logoSrc && (
        <img
          src={logoSrc}
          alt={`${InstituteName} logo`}
          style={{
            width: "90px",
            height: "80px",
            borderRadius: "50%",
            marginBottom: "4px",
          }}
        />
      )}
      <h3 style={{ color: "#ab6bff" }}>{InstituteName}</h3>
      <p><strong>Course:</strong> {Course}</p>
      <p><strong>Year:</strong> {Year}</p>
      <p style={{ fontStyle: "italic" }}>{description}</p>
    </div>
  );
}

export default CourseCard;
