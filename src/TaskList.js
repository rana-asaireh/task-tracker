import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul style={{ listStyle: "none", paddingLeft: "1rem", paddingRight: "1rem" }}>
      {tasks.length === 0 ? (
        <li
          style={{
            color: "#888",
            fontStyle: "italic",
            padding: "0.5rem",
            backgroundColor: "#f9f9f9",
            borderRadius: "4px",
          }}
        >
          No tasks yet.
        </li>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;