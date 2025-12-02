import React from 'react'

const Card = (props) => {
  return (
    <div 
      style={{
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#1a1a1a",
        color: "white",
        border: "2px solid #444",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        margin: "20px auto",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{props.user}</h2>
      <p style={{ fontSize: "14px", opacity: 0.8 }}>
        {props.skill1} • {props.skill2}
      </p>
    </div>
  )
}

export default Card
