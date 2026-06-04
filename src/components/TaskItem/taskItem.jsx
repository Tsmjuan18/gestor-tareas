import "./taskItem.css";

export const TaskItem = ({
  task,
  deleteTask,
  toggleTask
}) => {

  return (
    <div className="task-item">

      <div>

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span
          style={{
            textDecoration:
              task.completed
                ? "line-through"
                : "none"
          }}
        >
          {task.text}
        </span>

      </div>

      <button
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>

    </div>
  );
};