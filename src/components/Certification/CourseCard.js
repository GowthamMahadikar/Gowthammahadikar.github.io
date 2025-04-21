import React from "react";

function CourseCard({ InstituteName, Course, Year, description, logoSrc }) {
  return (
    <div
    style={{
      padding: "10px",
      borderRadius: "30px",
      boxShadow: "0px 4px 8px rgba(187, 70, 222, 0.97)",
      color: "white",
      textAlign: "center",
      border: "1px solid rgba(204, 61, 223, 0.61)",
      height: "370px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      }}
    >
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
