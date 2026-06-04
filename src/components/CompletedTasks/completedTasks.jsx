import { TaskItem } from "../TaskItem/taskItem";
import "./completedTasks.css";

export const CompletedTasks = ({
  tasks,
  deleteTask,
  toggleTask
}) => {

  return (
    <>
      <h2>
        Tareas Completadas ({tasks.length})
      </h2>

      {
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      }
    </>
  );
};