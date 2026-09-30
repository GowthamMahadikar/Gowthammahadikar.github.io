import React from "react";

function EducationCard({ collegeName, grade, year, imageSrc, internshipDetails }) {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "30px",
        boxShadow: "0px 4px 8px rgba(187, 70, 222, 0.97)",
        color: "white",
        textAlign: "center",
        border: "1px solid rgba(204, 61, 223, 0.61)",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={imageSrc}
        alt={collegeName}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />
      <h3 style={{ color: "#ab6bff" }}>{collegeName}</h3>
      <p>Grade: {grade}</p>
      <p>Year: {year}</p>
      {internshipDetails && (
        <div style={{ marginTop: "20px" }}>
          <strong>Internship:</strong>
          <p>{internshipDetails}</p>
        </div>
      )}
    </div>
  );
}

export default EducationCard;
