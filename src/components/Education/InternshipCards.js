import React from "react";

function InternshipCard({ companyName, role, duration, description, logoSrc }) {
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
          alt={`${companyName} logo`}
          style={{
            width: "120px",
            height: "80px",
            borderRadius: "1%",
            marginBottom: "15px",
            
          }}
        />
      )}
      <h3 style={{ color: "#ab6bff" }}>{companyName}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p style={{ fontStyle: "italic" }}>{description}</p>
    </div>
  );
}

export default InternshipCard;
