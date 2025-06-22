import { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; 
    addTask(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "1rem", paddingLeft: "1rem" }}
    >
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "70%",
          fontSize: "1rem",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          marginLeft: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTask;