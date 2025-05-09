import React from "react";

function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="delete-btn"
      style={{
        backgroundColor: "#ff4d4f",
        color: "white",
        padding: "6px 12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
