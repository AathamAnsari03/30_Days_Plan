import React from "react";

function EditSaveButton({ isEditing, onEdit, onSave }) {
  return (
    <button onClick={isEditing ? onSave : onEdit}
      className="edit-save-btn"
      style={{
        backgroundColor: isEditing ? "#4CAF50" : "#008CBA",
        color: "white",
        padding: "6px 12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}>
      {isEditing ? "Save" : "Edit"}
    </button>
  );
}
export default EditSaveButton;