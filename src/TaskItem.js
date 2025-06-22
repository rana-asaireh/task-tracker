function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      style={{
        marginBottom: "0.5rem",
        display: "flex",
        alignItems: "center",
        padding: "0.5rem 1rem",
        borderBottom: "1px solid #eee",
        borderRadius: "4px",
        backgroundColor: "#fff",
      }}
    >
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          fontSize: "1rem",
          marginRight: "10px",
          maxWidth: "calc(100% - 70px)", 
          overflowWrap: "break-word",
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          padding: "0.3rem 0.6rem",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          flexShrink: 0,
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;