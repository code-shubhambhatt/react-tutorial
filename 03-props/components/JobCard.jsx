import React from "react";

const JobCard = (props) => {
  return (
    <div
      style={{
        width: "320px",
        padding: "20px",
        borderRadius: "18px",
        backgroundColor: "#fff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        fontFamily: "sans-serif",
        margin: "20px auto"
      }}
    >
      {/* Top Section */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <img
          src={props.logo}
          alt="logo"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            padding: "5px"
          }}
        />

        {/* Save Button */}
        <button
          style={{
            background: "#f5f5f5",
            border: "none",
            padding: "6px 12px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Save
        </button>
      </div>

      {/* Job Info */}
      <div style={{ marginTop: "12px" }}>
        <p style={{ color: "gray", fontSize: "14px" }}>
          {props.company} • {props.posted}
        </p>

        <h3 style={{ marginTop: "5px" }}>{props.role}</h3>

        {/* Tags */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <span
            style={{
              background: "#f2f2f2",
              padding: "5px 12px",
              borderRadius: "8px",
              fontSize: "13px"
            }}
          >
            {props.type}
          </span>
          <span
            style={{
              background: "#f2f2f2",
              padding: "5px 12px",
              borderRadius: "8px",
              fontSize: "13px"
            }}
          >
            {props.level}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#eee",
          margin: "18px 0"
        }}
      ></div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <h3 style={{ margin: 0 }}>{props.rate}</h3>
          <p style={{ margin: 0, color: "gray", fontSize: "14px" }}>
            {props.location}
          </p>
        </div>

        <button
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
