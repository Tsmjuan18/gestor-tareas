import { TaskItem } from "../TaskItem/taskItem";
import "./taskList.css";

export const TaskList = ({
  tasks,
  deleteTask,
  toggleTask
}) => {

  return (
    <>
      <h2>
        Tareas Activas ({tasks.length})
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